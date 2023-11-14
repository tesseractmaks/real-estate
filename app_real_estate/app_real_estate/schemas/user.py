from pydantic import BaseModel, ConfigDict
from pydantic import EmailStr


class UserSchema(BaseModel):
    # model_config = ConfigDict(from_attributes=True)
    # email: EmailStr
    email: str
    password: str
    is_active: bool


class UserResponseSchema(UserSchema):
    ...
# class UserResponseSchema(BaseModel):
#     model_config = ConfigDict(from_attributes=True)
#     email: EmailStr
#     is_active: bool


class UserCreateSchema(UserSchema):
    ...


class UserUpdateSchema(UserSchema):
    ...


class UserUpdatePartialSchema(UserSchema):
    email: EmailStr | None = None
    password: str | None = None
    is_active: bool | None = None


class UserInDB(UserSchema):
    password: str



