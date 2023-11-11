import datetime

from sqlalchemy.orm import mapped_column, Mapped
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy import Integer
from pydantic import EmailStr

from app_real_estate.db import Base


class Author(Base):
    author: Mapped[int] = ""


class Post(Base):
    author: Mapped[int] = ""
    content: Mapped[str]
    photo: Mapped[str]
    tags: Mapped[int] = ""
    likes: Mapped[int]
    contents: Mapped[int]
    published: Mapped[datetime]
    views: Mapped[int]


class Like(Base):
    likes: Mapped[int] = ""
    post: Mapped[int]


class Comment(Base):
    author: Mapped[int] = ""
    post: Mapped[int] = ""
    content: Mapped[str]


class Tag(Base):
    title: Mapped[str]




