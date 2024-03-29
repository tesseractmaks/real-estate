import datetime
import json
import random

import pytest
from httpx import AsyncClient
from sqlalchemy.ext.asyncio import AsyncResult
from sqlalchemy import insert, select

from app_real_estate.schemas import UserSchema, UserUpdatePartialSchema, RatingSchema
from ..conftest import client
from app_real_estate.models import User, Profile, Property, Post, Category, AssociateRatings
from sqlalchemy.orm import selectinload, joinedload, strategy_options
from ..conftest import async_session_maker


@pytest.mark.anyio
async def test_read_ratings_db():
    async with async_session_maker() as session:
        stmt = select(User).order_by(User.id)
        result: AsyncResult = await session.execute(stmt)
        users = result.unique().scalars().all()
        assert len(list(users)) > 1
        assert isinstance(list(users), list)


@pytest.mark.anyio
async def test_rating_by_id_db():
    async with async_session_maker() as session:
        user = await session.get(User, 1)
        assert user.__dict__["id"] == 1


@pytest.mark.anyio
async def test_rating_db():
    rating_update = {
        "user_id": 2
        }
    rating = {
          "user_id": 1,
          "profile_id": 1
        }
    rating_update = RatingSchema(**rating_update)
    rating = RatingSchema(**rating)
    for name, value in rating_update.model_dump(exclude_unset=True).items():
        setattr(rating, name, value)
    assert rating.user_id == 2


