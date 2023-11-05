import datetime

from sqlalchemy.orm import mapped_column, Mapped
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy import Integer
from pydantic import EmailStr

from app_real_estate.db import Base


class AuthorModel(Base):
    author: Mapped[int] = ""


class PostModel(Base):
    author: Mapped[int] = ""
    content: Mapped[str]
    photo: Mapped[str]
    tags: Mapped[int] = ""
    likes: Mapped[int]
    contents: Mapped[int]
    published: Mapped[datetime]
    views: Mapped[int]


class LikeModel(Base):
    likes: Mapped[int] = ""
    post: Mapped[int]


class CommentModel(Base):
    author: Mapped[int] = ""
    post: Mapped[int] = ""
    content: Mapped[str]


class TagModel(Base):
    title: Mapped[str]






