from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta
from typing import Annotated
from fastapi import Request
from jose import JWTError, jwt
from fastapi import Cookie, Response

from app_real_estate.db import db_helper
from app_real_estate.schemas import Token, RefreshKeySchema
from app_real_estate.auth import (
    authenticate_user,
    create_token,
    ACCESS_TOKEN_EXPIRE_MINUTES,
    REFRESH_TOKEN_EXPIRE_MINUTES
)

from app_real_estate.crud import (
    read_refresh_db,
    read_refresh_by_id_db,
    create_refresh_db,
    update_refresh_db,
    delete_refresh_db,
)

router = APIRouter(tags=["Token"])


#  one@mail.ru1
#  qwerty


@router.post("/token", response_model=Token)
async def login_for_access_token(
        response: Response,
        form_data: OAuth2PasswordRequestForm = Depends(),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    # response.set_cookie(key="access_token", value="Bearer 123}", httponly=True)
    # print("-=-=-=-------", form_data.username)

    user = await authenticate_user(
        form_data.username,
        form_data.password,
        session=session,
    )

    access_token, refresh_token = create_token(
        data={"sub": user.email},
    )



    # response.set_cookie(key="refresh_token", value=f"Bearer {refresh_token}", httponly=True)
    response.set_cookie(key="refresh_token", value=f"Bearer {refresh_token}", httponly=True)
    # print("access_token", access_token)

    return {"access_token": access_token, "token_type": "bearer"}


# async def update_refresh_token(session, username):
#     refresh_token_expires = timedelta(minutes=REFRESH_TOKEN_EXPIRE_MINUTES)
#     refresh_token, exp_token = create_access_token(
#         data={"sub": username},
#         expires_delta=refresh_token_expires,
#     )
#     refresh_token_db = {
#         "refresh": refresh_token,
#         "exp": exp_token
#     }
#     await update_refresh_db(session=session, refresh=refresh, refresh_update=refresh_token_db)


#  one@mail.ru1
#  qwerty
#
# @router.get(
#     "/",
#     response_model=list[RefreshKeySchema]
# )
# async def read_users(
#         access_token: str | None = Cookie(default=None),
#         current_user=Depends(get_current_active_user),
#         session: AsyncSession = Depends(db_helper.scoped_session_dependency),
#
# ):
#     print(access_token, "-------", current_user)
#     return await read_users_db(session=session)
#
#
# @router.get(
#     "/{user_id}/",
#     response_model=RefreshKeySchema
# )
# async def read_user_by_id(
#         current_user=Depends(get_current_active_user),
#         product: UserSchema = Depends(user_by_id)
# ):
#     return product
#
#
# @router.post(
#     "/",
#     response_model=RefreshKeySchema,
#     status_code=status.HTTP_201_CREATED
# )
# async def create_user(
#         user_in: RefreshKeySchema,
#         session: AsyncSession = Depends(db_helper.scoped_session_dependency),
#         current_user=Depends(get_current_active_user),
# ):
#     pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
#     user_in.password = pwd_context.hash(user_in.password)
#     return await create_user_db(session=session, user_in=user_in)
#
#
# @router.put(
#     "/{user_id}",
#     response_model=RefreshKeySchema
# )
# async def update_user(
#         user_update: RefreshKeySchema,
#         user: RefreshKeySchema = Depends(user_by_id),
# current_user=Depends(get_current_active_user),
#         session: AsyncSession = Depends(db_helper.scoped_session_dependency)
# ):
#     return await update_user_db(
#         session=session,
#         user=user,
#         user_update=user_update
#     )
#
#
# @router.patch(
#     "/{user_id}",
#     response_model=RefreshKeySchema
# )
# async def update_user_partial(
#         user_update: RefreshKeySchema,
#         user: RefreshKeySchema = Depends(user_by_id),
# current_user=Depends(get_current_active_user),
#         session: AsyncSession = Depends(db_helper.scoped_session_dependency)
# ):
#     return await update_user_db(
#         session=session,
#         user=user,
#         user_update=user_update,
#         partial=True
#     )
#
#
# @router.delete("/{user_id}/", status_code=status.HTTP_204_NO_CONTENT)
# async def delete_user(
#         user: RefreshKeySchema = Depends(user_by_id),
# current_user=Depends(get_current_active_user),
#         session: AsyncSession = Depends(db_helper.scoped_session_dependency)
# ) -> None:
#     await delete_user_db(user=user, session=session)