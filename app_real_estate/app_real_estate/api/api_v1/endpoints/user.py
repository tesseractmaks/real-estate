import json

from fastapi import APIRouter, status, Depends, Cookie, Request, WebSocket, WebSocketDisconnect, HTTPException, WebSocketException
from sqlalchemy.ext.asyncio import AsyncSession
from passlib.context import CryptContext
from fastapi.encoders import jsonable_encoder
from app_real_estate.core import logger

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
    UserUpdatePartialSchema,
    UserResponseSchema
)
from .depends_endps import user_by_id
from app_real_estate.auth import get_current_active_user
import sys

router = APIRouter(tags=["Users"])


# one@mail.ru1
# qwerty


@logger.catch
@router.get("/", response_model=list[UserResponseSchema])
async def read_users(
        access_token: str | None = Cookie(default=None),
        # current_user=Depends(get_current_active_user),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency),
):
    # print(access_token, "-------", current_user)
    logger.info('message success')
    users = await read_users_db(session=session)
    if users is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            headers={"X-Error": "Url format wrong"},
        )
    return users


@logger.catch
@router.get(
    "/{user_id}/",
    response_model=UserResponseSchema
)
async def read_user_by_id(
        # current_user=Depends(get_current_active_user),
        product: UserSchema = Depends(user_by_id)
):
    if product is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            headers={"X-Error": "Url format wrong"},
        )
    return product


@logger.catch
@router.post(
    "/",
    # response_model=UserResponseSchema,
    response_model=UserSchema,
    status_code=status.HTTP_201_CREATED
)
async def create_user(
        request: Request,
        user_in: UserCreateSchema,
        session: AsyncSession = Depends(db_helper.scoped_session_dependency),
        # current_user=Depends(get_current_active_user),
):
    # form_data = await request.form()
    # user_in_data = jsonable_encoder(form_data)
    # print(user_in_data)
    print(user_in, "--")
    print(type(user_in))
    print(user_in.password,"=")
    # x= json.dumps(form_data)
    # print("-=-=-=-------", x["password"])
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
    user_in.password = pwd_context.hash(user_in.password)
    # print(type(user_in))
    # print(user_in,"--")
    user_in = UserCreateSchema(**user_in.__dict__)
    # user_in = json.dumps(user_in)
    if user_in is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            headers={"X-Error": "Empty data"},
        )
    return await create_user_db(session=session, user_in=user_in)


@logger.catch
@router.put(
    "/{user_id}",
    response_model=UserResponseSchema
)
async def update_user(
        user_update: UserUpdateSchema,
        user: UserSchema = Depends(user_by_id),
        # current_user=Depends(get_current_active_user),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    if user_update is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            headers={"X-Error": "Empty data"},
        )
    return await update_user_db(
        session=session,
        user=user,
        user_update=user_update
    )


@logger.catch
@router.patch(
    "/{user_id}",
    response_model=UserResponseSchema
)
async def update_user_partial(
        user_update: UserUpdatePartialSchema,
        user: UserSchema = Depends(user_by_id),
        # current_user=Depends(get_current_active_user),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    if user_update is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            headers={"X-Error": "Empty data"},
        )
    return await update_user_db(
        session=session,
        user=user,
        user_update=user_update,
        partial=True
    )


@logger.catch
@router.delete("/{user_id}/", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(
        user: UserSchema = Depends(user_by_id),
        # current_user=Depends(get_current_active_user),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> None:
    print(user,"--")
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            headers={"X-Error": "Url format wrong"},
        )
    await delete_user_db(user=user, session=session)


# test chat

class ConnectionManager:
    def __init__(self):
        self.active_connection: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connection.append(websocket)

    async def disconnect(self, websocket: WebSocket):
        self.active_connection.remove(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message: str):
        for connection in self.active_connection:
            await connection.send_text(message)


manager = ConnectionManager()


@logger.catch
@router.websocket("/ws/")
async def websocket_endpoint(
        websocket: WebSocket,
        client_id: str = "1",
        # topic: str = None,
):
    # kafka
    # record = get_consumer(topic)

    # sockets
    await manager.connect(websocket)

    if client_id is None:
        raise WebSocketException(code=status.WS_1008_POLICY_VIOLATION)

    try:
        while True:
            data = await websocket.receive_text()
            # print(websocket)
            # await manager.send_personal_message(f"some text{data}", websocket)
            await manager.broadcast(f"Topic #{client_id} -- {data}")
    except WebSocketDisconnect:
        await manager.disconnect(websocket)
        await manager.broadcast(f"Client #{client_id} left the chat")



