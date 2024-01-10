from typing import Any
from fastapi import APIRouter, status, Depends, HTTPException
from app_real_estate.core import logger

from app_real_estate.crud import (
    read_posts_db,
    read_post_by_id_db,
    create_post_db,
    update_post_db,
    delete_post_db, create_comment_db, update_comment_db, delete_comment_db
)
from app_real_estate.schemas import PostBlogSchema, PostBlogCreateSchema, PostBlogUpdateSchema, CommentSchema, \
    CommentUpdateSchema, PostBlogResponseSchema

from app_real_estate.auth import get_current_active_user

router = APIRouter(tags=["Blog"])
@logger.catch
@router.get(
    "/",
    response_model=list[PostBlogResponseSchema]
)
async def read_posts(
        # current_user=Depends(get_current_active_user),
):
    posts = await read_posts_db()
    if posts is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            headers={"X-Error": "Url format wrong"},
        )
    # print(x)
    # print()
    return posts

@logger.catch
@router.get(
    "/{post_id}/",
    response_model=PostBlogResponseSchema
)
async def read_post_by_id(
        post_id: str,
        # current_user=Depends(get_current_active_user),
):
    if post_id is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            headers={"X-Error": "Url format wrong"},
        )
    return await read_post_by_id_db(post_id=post_id)

@logger.catch
@router.post(
    "/",
    status_code=status.HTTP_201_CREATED,
    response_model=list[PostBlogResponseSchema]
)
async def create_post(
        post_in: PostBlogCreateSchema,
        # current_user=Depends(get_current_active_user),
):
    if post_in is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            headers={"X-Error": "Empty data"},
        )
    return await create_post_db(post_in=post_in)

@logger.catch
@router.patch(
    "/{post_id}",
    response_model=PostBlogResponseSchema
)
async def update_post(
        post_update: PostBlogUpdateSchema,
        post_id: str,
        # current_user=Depends(get_current_active_user),
):
    if post_update is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            headers={"X-Error": "Empty data"},
        )
    return await update_post_db(
        post_update=post_update,
        post_id=post_id
    )

@logger.catch
@router.delete(
    "/{post_id}",
)
async def delete_post(
        post_id: str,
        # current_user=Depends(get_current_active_user),
):
    if post_id is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            headers={"X-Error": "Url format wrong"},
        )
    return await delete_post_db(
        post_id=post_id
    )

#
# # comments
# @router.post(
#     "/comment/{post_id}",
# )
# async def create_comment(
#         comment_in: CommentSchema,
#         post_id: str,
#         # current_user=Depends(get_current_active_user),
# ):
#     return await create_comment_db(post_id=post_id, comment_in=comment_in)
#
#
# @router.put(
#     "/comment/replay/{post_id}/{comment_id}",
# )
# async def update_replay_comment(
#         comment_update: CommentUpdateSchema,
#         post_id: str,
#         comment_id: str,
#         # current_user=Depends(get_current_active_user),
# ):
#     return await update_comment_db(
#         comment_update=comment_update,
#         post_id=post_id,
#         comment_id=comment_id
#     )
#
#
# @router.patch(
#     "/comment/{post_id}/{comment_id}",
# )
# async def update_comment(
#         comment_update: CommentUpdateSchema,
#         post_id: str,
#         comment_id: str,
#         # current_user=Depends(get_current_active_user),
# ):
#     return await update_comment_db(
#         comment_update=comment_update,
#         post_id=post_id,
#         comment_id=comment_id
#     )
#
#
# @router.delete(
#     "/comment/{post_id}/{comment_id}",
# )
# async def delete_comment(
#         post_id: str,
#         comment_id: str,
#         # current_user=Depends(get_current_active_user),
# ):
#     return await delete_comment_db(
#         comment_id=comment_id,
#         post_id=post_id
#     )
