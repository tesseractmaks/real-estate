from typing import Any
from fastapi import APIRouter, status, Depends

from app_real_estate.crud import (
    read_posts_db,
    read_post_by_id_db,
    create_post_db,
    update_post_db,
    unset_element_of_array_post_db,
    unset_field_post_db,
    delete_post_db
)
# from app_real_estate.schemas import PostBlogSchema

from app_real_estate.auth import get_current_active_user

router = APIRouter(tags=["Blog"])


@router.get(
    "/",
    # response_model=list[PostBlogSchema]
)
async def read_posts(
        # current_user=Depends(get_current_active_user),
):

    # print(x)
    # print()
    return await read_posts_db()


@router.get(
    "/{post_id}/",
)
async def read_post_by_id(
        post_id: Any,
        # current_user=Depends(get_current_active_user),
):
    return await read_post_by_id_db(post_id=post_id)


@router.post(
    "/",
    status_code=status.HTTP_201_CREATED
)
async def create_post(
        post_in: Any,
        # current_user=Depends(get_current_active_user),
):
    return await create_post_db(post_in=post_in)


@router.patch(
    "/{post_id}",
)
async def update_post(
        post_update: Any,
        post_id: Any,
        # current_user=Depends(get_current_active_user),
):
    return await update_post_db(
        post_update=post_update,
        post_id=post_id
    )


@router.delete(
    "/field/{post_id}",
)
async def update_unset_field_post(
        post_update: Any,
        post_id: Any,
        # current_user=Depends(get_current_active_user),
):
    return await unset_field_post_db(
        post_update=post_update,
        post_id=post_id
    )


@router.delete(
    "/element/{post_id}",
)
async def update_element_of_array_post(
        post_update: Any,
        post_id: Any,
        # current_user=Depends(get_current_active_user),
):
    return await unset_element_of_array_post_db(
        post_update=post_update,
        post_id=post_id
    )


@router.delete(
    "/{post_id}",
)
async def delete_post(
        post_id: Any,
        # current_user=Depends(get_current_active_user),
):
    return await delete_post_db(
        post_id=post_id
    )
