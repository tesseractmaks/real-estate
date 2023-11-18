from typing import Any
from fastapi import APIRouter, status, Depends

from app_real_estate.crud import (create_comment_db, update_comment_db, delete_comment_db)
from app_real_estate.schemas import PostBlogSchema, PostBlogCreateSchema, PostBlogUpdateSchema, CommentSchema, \
    CommentUpdateSchema, PostBlogResponseSchema, CommentBlogResponseSchema, CommentBlogCreateSchema

from app_real_estate.auth import get_current_active_user

router = APIRouter(tags=["Comment"])


# comments
@router.post(
    "/{post_id}",
    status_code=status.HTTP_201_CREATED,
    response_model=CommentBlogResponseSchema
)
async def create_comment(
        comment_in: CommentBlogCreateSchema,
        post_id: str,
        # current_user=Depends(get_current_active_user),
):
    return await create_comment_db(post_id=post_id, comment_in=comment_in)


@router.put(
    "/replay/{post_id}/{comment_id}",
    status_code=status.HTTP_202_ACCEPTED,
    response_model=CommentBlogResponseSchema
)
async def update_replay_comment(
        comment_update: CommentUpdateSchema,
        post_id: str,
        comment_id: str,
        # current_user=Depends(get_current_active_user),
):
    comment_update.author = comment_update.author.__dict__
    return await update_comment_db(
        comment_update=comment_update,
        post_id=post_id,
        comment_id=comment_id,
        replay=True
    )


@router.patch(
    "/{post_id}/{comment_id}",
    status_code=status.HTTP_202_ACCEPTED,
    response_model=CommentBlogResponseSchema
)
async def update_comment(
        comment_update: CommentUpdateSchema,
        post_id: str,
        comment_id: str,
        # current_user=Depends(get_current_active_user),
):
    return await update_comment_db(
        comment_update=comment_update,
        post_id=post_id,
        comment_id=comment_id
    )


@router.delete(
    "/{post_id}/{comment_id}",
)
async def delete_comment(
        post_id: str,
        comment_id: str,
        # current_user=Depends(get_current_active_user),
):
    return await delete_comment_db(
        comment_id=comment_id,
        post_id=post_id
    )
