import datetime
import json
import random
import shutil

import pytest
from httpx import AsyncClient
from sqlalchemy.ext.asyncio import AsyncResult
from sqlalchemy import insert, select, update, func

from app_real_estate.schemas import UserSchema, UserUpdatePartialSchema, PropertyUpdatePartialSchema, PropertySchema, \
    PostUpdatePartialSchema, PostSchema
from ..conftest import client
from app_real_estate.models import User, Profile, Property, Post, Category
from sqlalchemy.orm import selectinload, joinedload, strategy_options
from ..conftest import async_session_maker
from ..utils import values_update_property


@pytest.mark.anyio
async def test_read_posts_db():
    async with async_session_maker() as session:
        query = select(Post)
        result: AsyncResult = await session.execute(query)
        posts = result.unique().scalars().all()
        assert len(list(posts)) > 1


@pytest.mark.anyio
async def test_read_post_by_id_db():
    async with async_session_maker() as session:
        posts = await session.get(Post, 1)
        assert posts.__dict__["id"] == 1


@pytest.mark.anyio
async def test_create_post_db():
    async with async_session_maker() as session:
        post_in = {
            "title": "string2"
        }
        post = Post(**post_in)
        assert post.title == "string2"


@pytest.mark.anyio
async def test_update_post_db():
    post_in = {
        "title": "string3"
    }
    post_update = PostUpdatePartialSchema(**post_in)
    post_new = PostSchema(**post_in)
    for name, value in post_update.model_dump(exclude_unset=True).items():
        setattr(post_new, name, value)
    assert post_new.title == "string3"


@pytest.mark.anyio
async def test_delete_post():
    async with async_session_maker() as session:
        post_get = await session.get(Post, 1)
        await session.delete(post_get)
        await session.commit()
        post_empty = await session.get(Post, 1)
        assert not post_empty
