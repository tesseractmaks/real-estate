from sqlalchemy.orm import Mapped
from pydantic import EmailStr

from app_real_estate.db import Base
from .profile import ProfileModel


class UserModel(Base):
    email: Mapped[EmailStr]
    password: Mapped[str]
    is_active: Mapped[bool]

    def __str__(self):
        return f"{self.email}"


class UserRatingModel(Base):
    agent: Mapped[int]
    likes: Mapped[int]


class UserFeedbackModel(Base):
    author: Mapped[int]
    agent: Mapped[int]
    feedback: Mapped[str]


class UserAgentModel(Base):
    agent: Mapped[int]
    post: Mapped[str]


