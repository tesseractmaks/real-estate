from typing import Annotated

from fastapi import HTTPException, status, Depends, Path
from sqlalchemy.ext.asyncio import AsyncSession

from app_real_estate.crud import (
    read_user_by_id_db,
    read_profile_by_id_db,
    read_rating_by_id_db,
    read_feedback_by_id_db,
    read_category_by_id_db,
    read_property_by_id_db,
    read_post_by_id_db,
)
from app_real_estate.db.db_helper import db_helper
from app_real_estate.schemas import UserSchema
from app_real_estate.schemas import (
    RatingSchema,
    ProfileSchema,
    FeedbackUserSchema,
    CategorySchema,
    PropertySchema,
    PostSchema,
)


async def user_by_id(
        user_id: Annotated[int, Path],
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> UserSchema:
    user = await read_user_by_id_db(session=session, user_id=user_id)
    if user is not None:
        return user
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, detail="not found..."
    )


async def profile_by_id(
        profile_id: Annotated[int, Path],
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> ProfileSchema:
    profile = await read_profile_by_id_db(session=session, profile_id=profile_id)
    if profile is not None:
        return profile
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, detail="not found..."
    )


async def rating_by_id(
        rating_id: Annotated[int, Path],
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> RatingSchema:
    rating = await read_rating_by_id_db(session=session, rating_id=rating_id)
    if rating is not None:
        return rating
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, detail="not found..."
    )


async def feedback_by_id(
        feedback_id: Annotated[int, Path],
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> FeedbackUserSchema:
    feedback = await read_feedback_by_id_db(session=session, feedback_id=feedback_id)
    if feedback is not None:
        return feedback
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, detail="not found..."
    )


async def category_by_id(
        category_id: Annotated[int, Path],
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> CategorySchema:
    category = await read_category_by_id_db(session=session, category_id=category_id)
    if category is not None:
        return category
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, detail="not found..."
    )


async def post_by_id(
        post_id: Annotated[int, Path],
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> PostSchema:
    post = await read_post_by_id_db(session=session, post_id=post_id)
    if post is not None:
        return post
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, detail="not found..."
    )


async def property_by_id(
        property_id: Annotated[int, Path],
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> PropertySchema:
    _property = await read_property_by_id_db(session=session, property_id=property_id)
    if _property is not None:
        return _property
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, detail="not found..."
    )
