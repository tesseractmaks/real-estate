import datetime
import random

import pytest
from httpx import AsyncClient
from sqlalchemy.ext.asyncio import AsyncResult
from sqlalchemy import insert, select
from ..conftest import client
from app_real_estate.models import User, Profile, Property, Post, Category
from sqlalchemy.orm import selectinload, joinedload, strategy_options
from ..conftest import async_session_maker


# @pytest.mark.anyio
# @pytest.mark.parametrize("route", ["users/", "users/1/"])
# async def test_get_users(client: AsyncClient, route):
#     response = await client.get(route)
#     assert response.status_code == 200


@pytest.mark.anyio
async def test_create_token(client: AsyncClient):
    values_data = {
          "access_token": "string",
          "token_type": "string"
        }
    response = await client.post("http://127.0.0.1:8000/token", json=values_data)
    assert response.status_code == 201


# @pytest.mark.anyio
# async def test_update_user(client: AsyncClient):
#     values_data = {
#         "email": "one5@mail.ru",
#         "password": "qwerty",
#         "is_active": True
#         }
#     response = await client.put("users/1", json=values_data)
#     assert response.status_code == 200
#
#
# @pytest.mark.anyio
# async def test_update_user_partial(client: AsyncClient):
#     values_data = {
#         "email": "one55@mail.ru"
#         }
#     response = await client.patch("users/1", json=values_data)
#     assert response.status_code == 200
#
#
# @pytest.mark.anyio
# async def test_delete_user(client: AsyncClient):
#     respons = await client.delete('http://127.0.0.1:8000/api/v1/profiles/1/')
#     response = await client.delete("users/1/")
#     assert response.status_code == 204

