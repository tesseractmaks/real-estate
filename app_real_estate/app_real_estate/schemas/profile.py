import json

from pydantic import BaseModel, Field, ConfigDict
from typing import Annotated


from app_real_estate.schemas import UserProfileSchema


class ProfileSchema(BaseModel):
    user_id:  int | None = None
    # user_feedbacks_id: list[int] | None = None
    rating_count: int | None = 0
    nickname: str | None = None
    deals_count: int | None = None
    phone:  str | None = None
    avatar:  str | None = None
    first_name:  str | None = None
    last_name:  str | None = None
    role:  str | None = None
    post:  int | None = None


# class UserSchema(BaseModel):
#     # model_config = ConfigDict(from_attributes=True)
#     # email: EmailStr
#     email: str
#     password: str
#     is_active: bool


class ProfileResponseSchema(ProfileSchema):

    users: UserProfileSchema


class ProfileCreateSchema(ProfileSchema):
    ...


class ProfileUpdateSchema(ProfileSchema):
    ...


class ProfileUpdatePartialSchema(ProfileSchema):
    ...

