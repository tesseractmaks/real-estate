import json
import os

from fastapi import APIRouter, status, Depends, UploadFile, File
import shutil
from sqlalchemy.ext.asyncio import AsyncSession

from app_real_estate.crud import (
    read_profiles_db,
    create_profile_db,
    update_profile_db,
    delete_profile_db
)
from app_real_estate.crud.profile import update_photo_profile
from app_real_estate.db import db_helper

from app_real_estate.schemas import (
    ProfileSchema,
    ProfileCreateSchema,
    ProfileUpdateSchema,
    ProfileUpdatePartialSchema,
ProfileResponseSchema
)
from .depends_endps import profile_by_id

router = APIRouter(tags=["Profiles"])


@router.get(
    "/",
    # response_model=list[ProfileSchema]
    response_model=list[ProfileResponseSchema]
)
async def read_profiles(
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await read_profiles_db(session=session)


@router.get(
    "/{profile_id}/",
    response_model=ProfileResponseSchema
)
async def read_profile_by_id(
        product: ProfileSchema = Depends(profile_by_id)
):
    return product


@router.post(
    "/",
    response_model=ProfileSchema,
    status_code=status.HTTP_201_CREATED
)
async def create_profile(
        profile_in: ProfileCreateSchema,
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await create_profile_db(session=session, profile_in=profile_in)


@router.patch(
    "/upload/{profile_id}",
    status_code=status.HTTP_201_CREATED
)
async def upload_photo_profile(
        profile: ProfileSchema = Depends(profile_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency),
        photo: UploadFile = File(...),
):
    # cwd = os.getcwd()
    path_image_dir = f"img/users/{profile.id}/profile/avatar/"
    full_image_path = os.path.join(path_image_dir, photo.filename)

    if not os.path.exists(path_image_dir):
        os.makedirs(path_image_dir,  exist_ok=True)

    file_name = full_image_path.replace(photo.filename, "profile.png")

    with open(file_name, "wb") as img:
        shutil.copyfileobj(photo.file, img)

    return await update_photo_profile(
        session=session,
        profile=profile,
        url_file=file_name,
    )


@router.put(
    "/{profile_id}",
    response_model=ProfileSchema
)
async def update_profile(
        profile_update: ProfileUpdateSchema,
        profile: ProfileSchema = Depends(profile_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await update_profile_db(
        session=session,
        profile=profile,
        profile_update=profile_update
    )


@router.patch(
    "/{profile_id}",
    response_model=ProfileSchema
)
async def update_profile_partial(
        profile_update: ProfileUpdatePartialSchema,
        profile: ProfileSchema = Depends(profile_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
):
    return await update_profile_db(
        session=session,
        profile=profile,
        profile_update=profile_update,
        partial=True
    )


@router.delete("/{profile_id}/", status_code=status.HTTP_204_NO_CONTENT)
async def delete_profile(
        profile: ProfileSchema = Depends(profile_by_id),
        session: AsyncSession = Depends(db_helper.scoped_session_dependency)
) -> None:
    await delete_profile_db(profile=profile, session=session)
