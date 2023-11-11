from fastapi import APIRouter, status, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app_real_estate.crud import (
    read_users_db,
    create_user_db,
    update_user_db,
    delete_user_db
)
from app_real_estate.db import db_helper
from app_real_estate.schemas import (
    UserSchema,
    UserCreateSchema,
    UserUpdateSchema,
    UserUpdatePartialSchema
)
from .depends_endps import user_by_id

router = APIRouter(tags=["Users"])


@router.get(
    "/",
    response_model=list[UserSchema]
)
async def read_users(
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await read_users_db(session=session)


@router.get(
    "/{user_id}/",
    response_model=UserSchema
)
async def read_user_by_id(
        product: UserSchema = Depends(user_by_id)
):
    return product


@router.post(
    "/",
    response_model=UserSchema,
    status_code=status.HTTP_201_CREATED
)
async def create_user(
        user_in: UserCreateSchema,
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await create_user_db(session=session, user_in=user_in)


@router.put(
    "/{user_id}",
    response_model=UserSchema
)
async def update_user(
        user_update: UserUpdateSchema,
        user: UserSchema = Depends(user_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await update_user_db(
        session=session,
        user=user,
        user_update=user_update
    )


@router.patch(
    "/{user_id}",
    response_model=UserSchema
)
async def update_user_partial(
        user_update: UserUpdatePartialSchema,
        user: UserSchema = Depends(user_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await update_user_db(
        session=session,
        user=user,
        user_update=user_update,
        partial=True
    )


@router.delete("/{user_id}/", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(
        user: UserSchema = Depends(user_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> None:
    await delete_user_db(user=user, session=session)
