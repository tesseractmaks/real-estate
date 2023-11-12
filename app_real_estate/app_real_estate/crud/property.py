from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.engine import Result
from sqlalchemy import select, update

from app_real_estate.models import Property
from app_real_estate.schemas import (
    PropertySchema,
    PropertyCreateSchema,
    PropertyUpdateSchema,
    PropertyUpdatePartialSchema
)


async def read_properties_db(session: AsyncSession) -> list[PropertySchema]:
    stmt = select(Property).order_by(Property.id)
    result: Result = await session.execute(stmt)
    properties = result.scalars().all()
    return list(properties)


async def read_property_by_id_db(session: AsyncSession, property_id: int) -> PropertySchema | None:
    return await session.get(Property, property_id)


async def create_property_db(session: AsyncSession, property_in: PropertyCreateSchema) -> Property:
    _property = Property(**property_in.model_dump())
    session.add(_property)
    await session.commit()
    # await session.refresh(product)
    return _property


async def update_file_property(
        _property: PropertySchema,
        url_file: str,
        session: AsyncSession,
):
    if _property.photo:
        await session.execute(update(Property).where(Property.id == _property.id).values(photo=url_file))
    await session.commit()
    file = {
        "photo": _property.photo,
    }
    return file


async def update_property_db(
        session: AsyncSession,
        _property: PropertySchema,
        property_update: PropertyUpdateSchema | PropertyUpdatePartialSchema,
        partial: bool = False
) -> PropertySchema:
    for name, value in property_update.model_dump(exclude_unset=partial).items():
        setattr(_property, name, value)
    await session.commit()
    return _property


async def delete_property_db(session: AsyncSession, _property: PropertySchema) -> None:
    await session.delete(_property)
    await session.commit()
