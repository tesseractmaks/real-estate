from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
import uuid
from app_real_estate.db import db_helper
from sqlalchemy.ext.asyncio import AsyncResult
from app_real_estate.models import RefreshKey
from app_real_estate.schemas import RefreshKeySchema


async def read_refresh_db(session: AsyncSession) -> list[RefreshKeySchema]:
    query = select(RefreshKey).order_by(RefreshKey.expired)
    result: AsyncResult = await session.execute(query)
    refreshes = result.scalars().all()
    return list(refreshes)


async def read_refresh_by_id_db(session: AsyncSession, refresh_id: uuid.uuid4) -> RefreshKeySchema | None:
    return await session.get(RefreshKey, refresh_id)


async def create_refresh_db(
        session: AsyncSession,
        refresh_in: RefreshKeySchema,
) -> RefreshKey:
    refresh_obj = RefreshKeySchema(**refresh_in)

    # print(refresh_obj,"--")


    refresh = RefreshKey(**refresh_obj.model_dump())

    session.add(refresh)
    await session.commit()
    return refresh_obj


async def read_refresh_by_name_db(
        session: AsyncSession,
        refresh_name: str
) -> RefreshKeySchema | None:
    query = select(RefreshKey).where(RefreshKey.refresh == refresh_name)
    # stmt = select(User).order_by(User.id)
    result: AsyncResult = await session.execute(query)
    name = result.scalar_one()
    return name


async def update_refresh_db(
    session: AsyncSession,
        refresh: RefreshKeySchema,
        refresh_update: dict,
        partial: bool = True
) -> RefreshKeySchema:
    refresh_update = RefreshKeySchema(**refresh_update)
    print(refresh_update,"----")
    print(refresh_update.exp,'-')
    for name, value in refresh_update.model_dump(exclude_unset=partial).items():
        print(name, value, type(name))
        setattr(refresh, name, value)
    await session.commit()
    return refresh_update


async def delete_refresh_db(session: AsyncSession, refresh: RefreshKeySchema) -> None:
    await session.delete(refresh)
    await session.commit()
