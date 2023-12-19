from pydantic import BaseModel, ConfigDict
from pydantic import EmailStr


class ProfileSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
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


class UserSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    # email: EmailStr
    email: str
    password: str
    is_active: bool


class UserProfileSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    email: str


class UserResponseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    email: str
    profile: ProfileSchema


# class UserResponseSchema(BaseModel):
#     model_config = ConfigDict(from_attributes=True)
#     email: EmailStr
#     is_active: bool


class UserCreateSchema(UserSchema):
    ...


class UserUpdateSchema(UserSchema):
    ...


class UserUpdatePartialSchema(UserSchema):
    model_config = ConfigDict(from_attributes=True)
    email: EmailStr | None = None
    password: str | None = None
    is_active: bool | None = None


class UserInDB(UserSchema):
    model_config = ConfigDict(from_attributes=True)
    password: str



