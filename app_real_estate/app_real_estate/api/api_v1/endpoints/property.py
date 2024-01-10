import os
import shutil
import urllib
from typing import Any, List, Annotated, Optional

from fastapi import APIRouter, status, Depends, UploadFile, File
from fastapi_pagination import add_pagination

from fastapi import Request, Cookie, Response, HTTPException

from app_real_estate.core import Page
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi_filter import FilterDepends

from urllib.parse import urlparse

from app_real_estate.schemas import PropertyFilter, CitiesSchema
from app_real_estate.auth import get_current_active_user
from app_real_estate.core import logger

from app_real_estate.crud import (
    read_properties_db,
    create_property_db,
    update_property_db,
    delete_property_db,
    update_file_property,
    sidebar_properties_db,
    count_cities_db
)
from app_real_estate.db import db_helper
from app_real_estate.schemas import (
    PropertySchema,
    PropertyCreateSchema,
    PropertyUpdateSchema,
    PropertyUpdatePartialSchema,
    PropertyResponseSchema
)
from .depends_endps import property_by_id

router = APIRouter(tags=["Properties"])


def get_tail_url(url):
    parse_path_url = urlparse(url)
    path_clean = urllib.parse.unquote(parse_path_url.path)
    url_tail_url = os.path.split(path_clean)
    return url_tail_url[-1]


@logger.catch
@router.get("/count-sities", response_model=CitiesSchema)
@router.get(
    "/",
    response_model=Page[PropertyResponseSchema]
)
async def read_properties(
        request: Request,
        session: AsyncSession = Depends(db_helper.scoped_session_dependency),
        property_filter: PropertyFilter = FilterDepends(PropertyFilter),
) -> list | list[tuple]:
    if get_tail_url(request.scope["route"].path) == "count-sities":
        cities = await count_cities_db(session=session)
        if cities is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                headers={"X-Error": "Url format wrong"},
            )
        return cities
    # print(property_filter, "=====-----")

    properties = await read_properties_db(session=session, property_filter=property_filter)
    if properties is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            headers={"X-Error": "Url format wrong"},
        )
    return await properties


add_pagination(router)


@logger.catch
@router.get("/sidebar", response_model=list[PropertySchema])
async def read_property_sidebar(
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    sidebar = await sidebar_properties_db(session=session)
    if sidebar is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            headers={"X-Error": "Url format wrong"},
        )
    return sidebar


@logger.catch
@router.get(
    "/{property_id}/",
    response_model=PropertySchema
)
async def read_property_by_id(
        request: Request,
        response: Response,
        refresh_token: str | None = Cookie(default=None),
        property_: PropertySchema = Depends(property_by_id),
        # current_user=Depends(get_current_active_user)
):
    if property_ is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            headers={"X-Error": "Url format wrong"},
        )
    return property_


@logger.catch
@router.post(
    "/",
    # response_model=PropertySchema,
    status_code=status.HTTP_201_CREATED
)
async def create_property(
        property_in: PropertyCreateSchema,
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    if property_in is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            headers={"X-Error": "Empty data"},
        )
    return await create_property_db(session=session, property_in=property_in)


@logger.catch
@router.patch("/upload/{property_id}/", status_code=status.HTTP_201_CREATED)
async def upload_file_profile(
        _property: PropertySchema = Depends(property_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency),
        photos: List[UploadFile] = File(...)
):
    if photos is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            headers={"X-Error": "Empty data"},
        )
    # print(property_by_id)
    # print(_property)
    print(photos)
    # cwd = os.getcwd()
    # print(files)

    for photo in photos:
        # print(photo.filename)

        path_image_dir = f"img/properties/{_property.id}/"
        full_image_path = os.path.join(path_image_dir, photo.filename)

        if not os.path.exists(path_image_dir):
            os.makedirs(path_image_dir, exist_ok=True)

        file_name = full_image_path.replace(photo.filename, f"{photo.filename}.png")

        with open(file_name, "wb") as img:
            shutil.copyfileobj(photo.file, img)
        #
        # return await update_file_property(
        #     session=session,
        #     _property=_property,
        #     url_file=file_name,
        # )


@logger.catch
@router.put(
    "/{property_id}",
    response_model=PropertySchema
)
async def update_property(
        property_update: PropertyUpdateSchema,
        _property: PropertySchema = Depends(property_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    if property_update is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            headers={"X-Error": "Empty data"},
        )
    return await update_property_db(
        session=session,
        _property=_property,
        property_update=property_update
    )


@logger.catch
@router.patch(
    "/{property_id}",
    response_model=PropertySchema
)
async def update_property_partial(
        property_update: PropertyUpdatePartialSchema,
        _property: PropertySchema = Depends(property_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    if property_update is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            headers={"X-Error": "Empty data"},
        )
    return await update_property_db(
        session=session,
        _property=_property,
        property_update=property_update,
        partial=True
    )


@logger.catch
@router.delete("/{property_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_property(
        _property: PropertySchema = Depends(property_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> None:
    if _property is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            headers={"X-Error": "Url format wrong"},
        )
    await delete_property_db(_property=_property, session=session)
