from fastapi import APIRouter, status, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app_real_estate.crud import (
    read_categories_db,
    create_category_db,
    update_category_db,
    delete_category_db
)
from app_real_estate.db import db_helper
from app_real_estate.schemas import (
    CategorySchema,
    CategoryCreateSchema,
    CategoryUpdateSchema,
    CategoryUpdatePartialSchema
)
from .depends_endps import category_by_id

router = APIRouter(tags=["Categories"])


@router.get(
    "/",
    response_model=list[CategorySchema]
)
async def read_categories(
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await read_categories_db(session=session)


@router.get(
    "/{category_id}/",
    response_model=CategorySchema
)
async def read_category_by_id(
        product: CategorySchema = Depends(category_by_id)
):
    return product


@router.post(
    "/",
    response_model=CategorySchema,
    status_code=status.HTTP_201_CREATED
)
async def create_category(
        category_in: CategoryCreateSchema,
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await create_category_db(session=session, category_in=category_in)


@router.put(
    "/{category_id}",
    response_model=CategorySchema
)
async def update_category(
        category_update: CategoryUpdateSchema,
        category: CategorySchema = Depends(category_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await update_category_db(
        session=session,
        category=category,
        category_update=category_update
    )


@router.patch(
    "/{category_id}",
    response_model=CategorySchema
)
async def update_category_partial(
        category_update: CategoryUpdatePartialSchema,
        category: CategorySchema = Depends(category_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await update_category_db(
        session=session,
        category=category,
        category_update=category_update,
        partial=True
    )


@router.delete("/{category_id}/", status_code=status.HTTP_204_NO_CONTENT)
async def delete_category(
        category: CategorySchema = Depends(category_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> None:
    await delete_category_db(category=category, session=session)
