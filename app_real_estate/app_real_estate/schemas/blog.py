from bson import ObjectId

import datetime

from sqlalchemy.orm import Mapped

from pydantic import BaseModel


class Post(BaseModel):
    id: Mapped[int]
    author: Mapped[int]
    content: Mapped[str]
    photo: Mapped[str]
    published: Mapped[datetime]
    category: Mapped[list[str]]
    comments: Mapped[list[str]]
    views: Mapped[int]
    tags: Mapped[list[str]]
    likes: Mapped[int]

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "author": 1,
                    "content": "some text",
                    "photo": "some link",
                    "published": datetime.datetime.now(),
                    "category": ["some text", "some text", "some text"],
                    "comments": [
                        {
                            "_id": ObjectId(),
                            "author": {
                                "_id": ObjectId(),
                                "first_name": "some name",
                                "last_name": "some last name"
                            },
                            "published": datetime.datetime.now(),
                            "content": "some text",
                            "likes": 1,
                            "replay": [
                                {
                                    "_id": ObjectId(),
                                    "author": {
                                        "_id": ObjectId(),
                                        "first_name": "some name",
                                        "last_name": "some last name"
                                    },
                                    "comment_id": ObjectId(),
                                    "published": datetime.datetime.now(),
                                    "content": "some text",
                                    "likes": 3,
                                },
                                {
                                    "_id": ObjectId(),
                                    "author": {
                                        "_id": ObjectId(),
                                        "first_name": "some name",
                                        "last_name": "some last name"
                                    },
                                    "replay_id": ObjectId(),
                                    "published": datetime.datetime.now(),
                                    "content": "some text",
                                    "likes": 2,
                                }
                            ]
                        },

                    ],
                    "tags": ["some text", "some text", "some text"],
                    "views": 6,
                    "likes": 2,
                },
            ]
        }
    }

# class Post(BaseModel):
#     id: Mapped[int]
#     author: Mapped[int] = "ForeignKey(Author.id)"
#     content: Mapped[str]
#     photo: Mapped[str]
#     published: Mapped[datetime]
#     category: Mapped[list[int]] = "[ForeignKey(Category.id)]"
#     comments: Mapped[list[str]] = "[ForeignKey(Comment.id)]"
#     views: Mapped[int] = "aggregate [ForeignKey(Views.id)]"
#     tags: Mapped[list[int]] = "[ForeignKey(Tag.id)]"
#     likes: Mapped[int] = "aggregate [ForeignKey(Like.id)]"
#
# class Like(Base):
#     id: Mapped[int] = "unique(user_id, post_id)"
#     user_id: Mapped[int] = "FK"
#     post_id: Mapped[int] = "FK"
#     comment_id: Mapped[int] = "FK"
#
#
# class Comment(Base):
#     id: Mapped[int]
#     user_id: Mapped[int] = "ForeignKey(User.id)"
#     post_id: Mapped[int] = "ForeignKey(Post.id)"
#     content: Mapped[str]
#
#
# class Tag(Base):
#     id: Mapped[int]
#     title: Mapped[str]
#
#
# class Category(Base):
#     id: Mapped[int]
#     title: Mapped[str]
#
#
# class Views(Base):
#     id: Mapped[int]
#     post_id: Mapped[int] = "ForeignKey(Post.id)"
#     user_id: Mapped[int] = "ForeignKey(User.id)"
