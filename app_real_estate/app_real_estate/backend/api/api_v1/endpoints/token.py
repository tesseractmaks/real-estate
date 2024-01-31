from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta, datetime
from typing import Annotated
from fastapi import Request
from jose import JWTError, jwt
from fastapi import Cookie, Response
from core import logger
from db import db_helper
from schemas import Token, RefreshKeySchema
from auth import (
    authenticate_user,
    create_token,
    ACCESS_TOKEN_EXPIRE_MINUTES,
    REFRESH_TOKEN_EXPIRE_MINUTES, get_refresh_token
)

from crud import (
    read_refresh_db,
    read_refresh_by_id_db,
    create_refresh_db,
    update_refresh_db,
    delete_refresh_db, read_refresh_by_name_db, delete_user_db, read_user_by_id_db, read_user_by_username_db,
)

router = APIRouter(tags=["Token"])


#  one@mail.ru1
#  qwerty

@logger.catch
@router.post("/token/auth/logout")
async def logout_for_access_token(
        response: Response,
        session: AsyncSession = Depends(db_helper.scoped_session_dependency),
        refresh_token: str | None = Cookie(default=None),
):

    refresh_token_clean = refresh_token.replace("Bearer ", "")
    refresh_key = await read_refresh_by_name_db(session=session, refresh_name=refresh_token_clean)
    if refresh_key.__dict__["sub"] == "one@mail.ru1":
        user = await read_user_by_username_db(session=session, username=str(refresh_key.__dict__["sub"]))
        await delete_user_db(user=user, session=session)

    response.delete_cookie("access_token")
    response.delete_cookie("refresh_token")
    response.delete_cookie("user_id")

    refresh_token_clean = str(refresh_token).replace("Bearer ", "")
    refresh_key = await read_refresh_by_name_db(session=session, refresh_name=refresh_token_clean)

    await delete_refresh_db(session=session, refresh=refresh_key)
    return {"access_token": ""}


@logger.catch
@router.post("/token", response_model=Token)
async def login_for_access_token(
        response: Response,
        form_data: OAuth2PasswordRequestForm = Depends(),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    if form_data is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            headers={"X-Error": "Empty data"},
        )
    # response.set_cookie(key="access_token", value="Bearer 123}", httponly=True)

    user = await authenticate_user(
        form_data.username,
        form_data.password,
        session=session,
    )
    # await session.close()

    access_token, refresh_token = await create_token(
        data={"sub": user.email},
        session=session,
        response=response,
    )
    # print(refresh_token)

    # response.set_cookie(key="refresh_token", value=f"Bearer {refresh_token}", httponly=True)
    response.set_cookie(key="access_token", value=f"Bearer {access_token}")
    response.set_cookie(key="refresh_token", value=f"Bearer {refresh_token}", httponly=True)
    response.set_cookie(key="user_id", value=user.id)
    SECRET_KEY = "$2b$12$cZmHQ5w9KXng0Q/XWCn4ReMfPh5JqwzpI6oaEY/XS1ERCHSbJceC."

    jwt_access = jwt.decode(access_token, SECRET_KEY)
    jwt_refresh = jwt.decode(refresh_token, SECRET_KEY)
    access_token = datetime.utcfromtimestamp(int(jwt_access["exp"])).strftime('%Y-%m-%d %H:%M:%S')
    refresh_token = datetime.utcfromtimestamp(int(jwt_refresh["exp"])).strftime('%Y-%m-%d %H:%M:%S')
    # print("access_token", access_token)
    # print("refresh_token", refresh_token)

    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/token/refresh")
async def refresh_token(
        current_user=Depends(get_refresh_token),
        refresh_token: str | None = Cookie(default=None),
):
    print("-- ", refresh_token)
    print("-- ", refresh_token[len(refresh_token) -10: ])
    return True
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
