from pydantic import BaseModel


class UserSchema(BaseModel):
    username: str
    permissions: list[int] | None = None
    is_active: bool
    groups: list[int] | None = None


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None


class UserInDB(UserSchema):
    hashed_password: str
