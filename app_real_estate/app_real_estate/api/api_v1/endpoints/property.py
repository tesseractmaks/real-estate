from fastapi import APIRouter, status, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app_real_estate.crud import (
    read_properties_db,
    create_property_db,
    update_property_db,
    delete_property_db
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
    response_model=list[PropertySchema]
)
async def read_properties(
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await read_properties_db(session=session)


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


@router.put(
    "/{property_id}",
    response_model=PropertySchema
)
async def update_property(
        property_update: PropertyUpdateSchema,
        property: PropertySchema = Depends(property_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await update_property_db(
        session=session,
        property=property,
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
        property=_property,
        property_update=property_update,
        partial=True
    )


@router.delete("/{property_id}/", status_code=status.HTTP_204_NO_CONTENT)
async def delete_property(
        _property: PropertySchema = Depends(property_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> None:
    await delete_property_db(property=_property, session=session)
