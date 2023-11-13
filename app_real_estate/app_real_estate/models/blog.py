import datetime

from sqlalchemy.orm import mapped_column, Mapped
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy import Integer
from pydantic import EmailStr

from sqlalchemy.orm import Mapped, mapped_column, relationship, backref
from sqlalchemy import ForeignKey, func
# from pydantic import EmailStr
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from datetime import datetime

from app_real_estate.core import blog_validator, author_validator

# from .profile import Profile

# uri = "mongodb+srv://admin:qwerty1@cluster0.b7f96.mongodb.net/?retryWrites=true&w=majority"
uri = "mongodb://localhost:27017/"

client = MongoClient(uri)
# try:
#     client.admin.command('ping')
#     print("Pinged your deployment. You successfully connected to MongoDB!")
# except Exception as e:
#     print(e)


db = client.estate
#
# db.create_collection("property3")
# db.create_collection("author")


# x = {"name": "second"}


db.command("collMod", "property3", validator=blog_validator)
db.command("collMod", "author", validator=author_validator)
coll = db.property3
coll_author = db.author

y = {
    "author": "ObjectId('63bd78b8d7bbbf34d7a3826a')",
    "content": "mustbea date andisrequired",
    "photo": "mustbea date andisrequired",
    "published": datetime.now(),
    "category": ["mustbea", "date", "andisrequired"],
    "comments": [
        {"author": "6551d30fa7aa0c8d6fd99fbf", "content": "mustbea date,andisrequired"},
        {"author": "7551d30fa7aa0c8d6fd99fb", "content": "stbea at,andisr"},
    ],
    "tags": ["mustbea", "date", "andisrequired"],
    "views": 6,
    "likes": 2,
}

author = {
    "first_name": "gku",
    "last_name": "gku"
}

coll.insert_one(y)
coll_author.insert_one(author)

# result = coll.find_one({"name": "first2"}, {"_id": 0})
# result = coll.find({}, {"_id": 0})
# print(list(result))
# print(result)


# from app_real_estate.db import Base
#
#
# class Author(Base):
#     id: Mapped[int]
#     user_id: Mapped[int] = "ForeignKey(User.id)"
#     name: Mapped[str]
#
#
# class Post(Base):
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
#
# class Like(Base):
#     id: Mapped[int] = "unique(user_id, post_id)"
#     user_id: Mapped[int] = "FK"
#     post_id: Mapped[int] = "FK"
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
