from app_real_estate.db import Base

import datetime

from sqlalchemy.orm import mapped_column, Mapped
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy import Integer
from pydantic import EmailStr


class Author(Base):
    id: Mapped[int]
    user_id: Mapped[int] = "ForeignKey(User.id)"
    name: Mapped[str]


class Post(Base):
    id: Mapped[int]
    author: Mapped[int] = "ForeignKey(Author.id)"
    content: Mapped[str]
    photo: Mapped[str]
    published: Mapped[datetime]
    category: Mapped[list[int]] = "[ForeignKey(Category.id)]"
    comments: Mapped[list[str]] = "[ForeignKey(Comment.id)]"
    views: Mapped[int] = "aggregate [ForeignKey(Views.id)]"
    tags: Mapped[list[int]] = "[ForeignKey(Tag.id)]"
    likes: Mapped[int] = "aggregate [ForeignKey(Like.id)]"


class Like(Base):
    id: Mapped[int] = "unique(user_id, post_id)"
    user_id: Mapped[int] = "FK"
    post_id: Mapped[int] = "FK"
    comment_id: Mapped[int] = "FK"


class Comment(Base):
    id: Mapped[int]
    user_id: Mapped[int] = "ForeignKey(User.id)"
    post_id: Mapped[int] = "ForeignKey(Post.id)"
    content: Mapped[str]


class Tag(Base):
    id: Mapped[int]
    title: Mapped[str]


class Category(Base):
    id: Mapped[int]
    title: Mapped[str]


class Views(Base):
    id: Mapped[int]
    post_id: Mapped[int] = "ForeignKey(Post.id)"
    user_id: Mapped[int] = "ForeignKey(User.id)"