from fastapi import APIRouter, status, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app_real_estate.crud import (
    read_posts_db,
    create_post_db,
    update_post_db,
    delete_post_db
)
from app_real_estate.db import db_helper
from app_real_estate.schemas import (
    PostSchema,
    PostCreateSchema,
    PostUpdateSchema,
    PostUpdatePartialSchema
)
from .depends_endps import post_by_id

router = APIRouter(tags=["Posts"])


@router.get(
    "/",
    response_model=list[PostSchema]
)
async def read_categories(
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await read_posts_db(session=session)


@router.get(
    "/{post_id}/",
    response_model=PostSchema
)
async def read_post_by_id(
        product: PostSchema = Depends(post_by_id)
):
    return product


@router.post(
    "/",
    response_model=PostSchema,
    status_code=status.HTTP_201_CREATED
)
async def create_post(
        post_in: PostCreateSchema,
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await create_post_db(session=session, post_in=post_in)


@router.put(
    "/{post_id}",
    response_model=PostSchema
)
async def update_post(
        post_update: PostUpdateSchema,
        post: PostSchema = Depends(post_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await update_post_db(
        session=session,
        post=post,
        post_update=post_update
    )


@router.patch(
    "/{post_id}",
    response_model=PostSchema
)
async def update_post_partial(
        post_update: PostUpdatePartialSchema,
        post: PostSchema = Depends(post_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await update_post_db(
        session=session,
        post=post,
        post_update=post_update,
        partial=True
    )


@router.delete("/{post_id}/", status_code=status.HTTP_204_NO_CONTENT)
async def delete_post(
        post: PostSchema = Depends(post_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> None:
    await delete_post_db(post=post, session=session)
