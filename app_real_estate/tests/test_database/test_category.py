import datetime
import json
import random
import shutil

import pytest
from httpx import AsyncClient
from sqlalchemy.ext.asyncio import AsyncResult
from sqlalchemy import insert, select, update, func

from app_real_estate.schemas import UserSchema, UserUpdatePartialSchema, PropertyUpdatePartialSchema, PropertySchema, \
    CategoryUpdatePartialSchema, CategorySchema
from ..conftest import client
from app_real_estate.models import User, Profile, Property, Post, Category
from sqlalchemy.orm import selectinload, joinedload, strategy_options
from ..conftest import async_session_maker
from ..utils import values_update_property


@pytest.mark.anyio
async def test_read_categories_db():
    async with async_session_maker() as session:
        query = select(Category)
        result: AsyncResult = await session.execute(query)
        categories = result.unique().scalars().all()
        assert len(list(categories)) > 1


@pytest.mark.anyio
async def test_read_category_by_id_db():
    async with async_session_maker() as session:
        category = await session.get(Category, 1)
        assert category.__dict__["id"] == 1


@pytest.mark.anyio
async def test_create_category_db():
    async with async_session_maker() as session:
        values = {
            "title": "any"
        }
        category = Category(**values)
        assert category.title == "any"


@pytest.mark.anyio
async def test_update_category_db():
    values = {
        "title": "any"
    }
    value_new = {
        "title": "any2"
    }
    category_update = CategoryUpdatePartialSchema(**value_new)
    category = CategorySchema(**values)
    for name, value in category_update.model_dump(exclude_unset=True).items():
        setattr(category, name, value)
    assert category.title == "any2"


@pytest.mark.anyio
async def test_delete_category():
    async with async_session_maker() as session:
        category_get = await session.get(Category, 1)
        await session.delete(category_get)
        await session.commit()
        category_empty = await session.get(Category, 1)
        assert not category_empty
