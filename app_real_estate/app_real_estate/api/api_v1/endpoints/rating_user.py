from fastapi import APIRouter, status, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app_real_estate.crud import (
    read_ratings_db,
    create_rating_db,
    update_rating_db,
    delete_rating_db
)
from app_real_estate.db import db_helper
from app_real_estate.schemas import (
    RatingSchema,
)
from .depends_endps import rating_by_id

router = APIRouter(tags=["Ratings"])


@router.get(
    "/",
    response_model=list[RatingSchema]
)
async def read_ratings(
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await read_ratings_db(session=session)


@router.get(
    "/{rating_id}/",
    response_model=RatingSchema
)
async def read_rating_by_id(
        rating: RatingSchema = Depends(rating_by_id)
):
    return rating


@router.post(
    "/",
    response_model=RatingSchema,
    status_code=status.HTTP_201_CREATED
)
async def create_rating(
        rating_in: RatingSchema,
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await create_rating_db(session=session, rating_in=rating_in)


@router.put(
    "/{rating_id}",
    response_model=RatingSchema
)
async def update_rating(
        rating_update: RatingSchema,
        rating: RatingSchema = Depends(rating_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await update_rating_db(
        session=session,
        rating=rating,
        rating_update=rating_update
    )


@router.patch(
    "/{rating_id}",
    response_model=RatingSchema
)
async def update_rating_partial(
        rating_update: RatingSchema,
        rating: RatingSchema = Depends(rating_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await update_rating_db(
        session=session,
        rating=rating,
        rating_update=rating_update,
        partial=True
    )


@router.delete("/{rating_id}/", status_code=status.HTTP_204_NO_CONTENT)
async def delete_rating(
        rating: RatingSchema = Depends(rating_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> None:
    await delete_rating_db(rating=rating, session=session)
