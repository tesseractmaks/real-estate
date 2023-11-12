from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.engine import Result
from sqlalchemy import select

from app_real_estate.db import db_helper
from app_real_estate.models import User
from app_real_estate.schemas import UserSchema, UserUpdateSchema, UserUpdatePartialSchema, UserCreateSchema


async def read_users_db(session: AsyncSession) -> list[UserSchema]:
    stmt = select(User).order_by(User.id)
    result: Result = await session.execute(stmt)
    users = result.scalars().all()
    return list(users)


async def read_user_by_id_db(session: AsyncSession, user_id: int) -> UserSchema | None:
    return await session.get(User, user_id)


async def read_user_by_username_db(
        session: AsyncSession,
        username: str
) -> UserSchema | None:
    stmt = select(User).where(User.email == username)
    # stmt = select(User).order_by(User.id)
    result: Result = await session.execute(stmt)

    user = result.scalar()
    return user


async def create_user_db(session: AsyncSession, user_in: UserCreateSchema) -> User:
    print(user_in.model_dump())
    print()
    user = User(**user_in.model_dump())
    session.add(user)
    await session.commit()
    # await session.refresh(product)
    return user


async def update_user_db(
        session: AsyncSession,
        user: UserSchema,
        user_update: UserUpdateSchema | UserUpdatePartialSchema,
        partial: bool = False
) -> UserSchema:
    for name, value in user_update.model_dump(exclude_unset=partial).items():
        setattr(user, name, value)
    await session.commit()
    return user


async def delete_user_db(session: AsyncSession, user: UserSchema) -> None:
    await session.delete(user)
    await session.commit()
