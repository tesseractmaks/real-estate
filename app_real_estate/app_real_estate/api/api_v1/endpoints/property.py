import os
import shutil

from fastapi import APIRouter, status, Depends, UploadFile, File, Query
from fastapi_pagination import add_pagination  # , paginate
from fastapi_pagination.ext.sqlalchemy import paginate
from app_real_estate.core import Page
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app_real_estate.models import Property

from app_real_estate.crud import (
    read_properties_db,
    create_property_db,
    update_property_db,
    delete_property_db,
    update_file_property,
)
from app_real_estate.db import db_helper
from app_real_estate.schemas import (
    PropertySchema,
    PropertyCreateSchema,
    PropertyUpdateSchema,
    PropertyUpdatePartialSchema
)
from .depends_endps import property_by_id

router = APIRouter(tags=["Properties"])


@router.get(
    "/",
    response_model=Page[PropertySchema]
)
async def read_properties(
        session: AsyncSession = Depends(db_helper.scoped_session_dependency),
):
    properties = await read_properties_db(session=session)
    # return paginate(properties)
    # return await paginate(session, select(Property).order_by(Property.id))
    print(properties.pages)
    return properties


add_pagination(router)


@router.get(
    "/{property_id}/",
    response_model=PropertySchema
)
async def read_property_by_id(
        product: PropertySchema = Depends(property_by_id)
):
    return product


@router.post(
    "/",
    response_model=PropertySchema,
    status_code=status.HTTP_201_CREATED
)
async def create_property(
        property_in: PropertyCreateSchema,
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await create_property_db(session=session, property_in=property_in)


@router.patch(
    "/upload/{property_id}",
    status_code=status.HTTP_201_CREATED
)
async def upload_file_profile(
        _property: PropertySchema = Depends(property_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency),
        photo: UploadFile = File(...),
):
    # cwd = os.getcwd()
    path_image_dir = f"img/properties/{_property.id}/"
    full_image_path = os.path.join(path_image_dir, photo.filename)

    if not os.path.exists(path_image_dir):
        os.makedirs(path_image_dir, exist_ok=True)

    file_name = full_image_path.replace(photo.filename, f"{photo.filename}.png")

    with open(file_name, "wb") as img:
        shutil.copyfileobj(photo.file, img)

    return await update_file_property(
        session=session,
        _property=_property,
        url_file=file_name,
    )


@router.put(
    "/{property_id}",
    response_model=PropertySchema
)
async def update_property(
        property_update: PropertyUpdateSchema,
        _property: PropertySchema = Depends(property_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await update_property_db(
        session=session,
        _property=_property,
        property_update=property_update
    )


@router.patch(
    "/{property_id}",
    response_model=PropertySchema
)
async def update_property_partial(
        property_update: PropertyUpdatePartialSchema,
        _property: PropertySchema = Depends(property_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await update_property_db(
        session=session,
        _property=_property,
        property_update=property_update,
        partial=True
    )


@router.delete("/{property_id}/", status_code=status.HTTP_204_NO_CONTENT)
async def delete_property(
        _property: PropertySchema = Depends(property_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> None:
    await delete_property_db(property=_property, session=session)
