from typing import Any
from fastapi import APIRouter, status, Depends

from app_real_estate.crud import (
    read_posts_db,
    read_post_by_id_db,
    create_post_db,
    update_post_db,
    delete_post_db, create_comment_db, update_comment_db, delete_comment_db
)
from app_real_estate.schemas import PostBlogSchema, PostBlogCreateSchema, PostBlogUpdateSchema, CommentSchema, \
    CommentUpdateSchema, PostBlogCommentSchema

from app_real_estate.auth import get_current_active_user

router = APIRouter(tags=["Blog"])


@router.get(
    "/",
    response_model=list[PostBlogCommentSchema]
)
async def read_posts(
        # current_user=Depends(get_current_active_user),
):
    # print(x)
    # print()
    return await read_posts_db()


@router.get(
    "/{post_id}/",
    response_model=PostBlogCommentSchema
)
async def read_post_by_id(
        post_id: str,
        # current_user=Depends(get_current_active_user),
):
    return await read_post_by_id_db(post_id=post_id)


@router.post(
    "/",
    status_code=status.HTTP_201_CREATED
)
async def create_post(
        post_in: PostBlogCreateSchema,
        # current_user=Depends(get_current_active_user),
):
    return await create_post_db(post_in=post_in)


@router.patch(
    "/{post_id}",
)
async def update_post(
        post_update: PostBlogUpdateSchema,
        post_id: str,
        # current_user=Depends(get_current_active_user),
):
    return await update_post_db(
        post_update=post_update,
        post_id=post_id
    )


@router.delete(
    "/{post_id}",
)
async def delete_post(
        post_id: str,
        # current_user=Depends(get_current_active_user),
):
    return await delete_post_db(
        post_id=post_id
    )


# comments
@router.post(
    "/comment/{post_id}",
)
async def create_comment(
        comment_in: CommentSchema,
        post_id: str,
        # current_user=Depends(get_current_active_user),
):
    return await create_comment_db(post_id=post_id, comment_in=comment_in)


@router.post(
    "/comment/replay/{post_id}/{comment_id}",
)
async def create_comment(
        comment_in: CommentSchema,
        post_id: str,
        # current_user=Depends(get_current_active_user),
):
    return await create_comment_db(post_id=post_id, comment_in=comment_in)


@router.patch(
    "/comment/{post_id}/{comment_id}",
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
    "/comment/{post_id}/{comment_id}",
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
