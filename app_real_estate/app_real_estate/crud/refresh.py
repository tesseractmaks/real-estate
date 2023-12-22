from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
import uuid

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
    refresh_obj = refresh_in.model_dump()
    refresh = RefreshKey(**refresh_obj)
    session.add(refresh)
    await session.commit()
    return refresh


async def read_refresh_by_name_db(
        session: AsyncSession,
        refresh_name: str
) -> RefreshKeySchema | None:
    query = select(RefreshKey).where(RefreshKey.refresh == refresh_name)
    # stmt = select(User).order_by(User.id)
    result: AsyncResult = await session.execute(query)
    name = result.scalar()
    return name


async def update_refresh_db(
    session: AsyncSession,
        refresh: RefreshKeySchema,
        refresh_update: RefreshKeySchema,
        partial: bool = False
) -> RefreshKeySchema:
    for name, value in refresh_update.model_dump(exclude_unset=partial).items():
        setattr(refresh, name, value)
    await session.commit()
    return refresh


async def delete_refresh_db(session: AsyncSession, refresh: RefreshKeySchema) -> None:
    await session.delete(refresh)
    await session.commit()
