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


@pytest.mark.anyio
@pytest.mark.parametrize("route", ["posts/", "posts/1/"])
async def test_get_posts(client: AsyncClient, route):
    response = await client.get(route)
    assert response.status_code == 200


@pytest.mark.anyio
async def test_create_post(client: AsyncClient):
    values_data = {
        "title": "qwerty"
    }
    response = await client.post("posts/", json=values_data)
    assert response.status_code == 201


@pytest.mark.anyio
async def test_update_post(client: AsyncClient):
    values_data = {
        "title": "qwerty"
    }
    response = await client.put("posts/1", json=values_data)
    assert response.status_code == 200


@pytest.mark.anyio
async def test_delete_post(client: AsyncClient):
    # respons = await client.delete('http://127.0.0.1:8000/api/v1/profiles/1/')
    response = await client.delete("posts/1/")
    assert response.status_code == 204

