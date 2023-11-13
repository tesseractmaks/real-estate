import datetime
from bson.dbref import DBRef
from bson import ObjectId
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
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as exc:
    print(exc)

# Creating a new database
blog_db = client.blog


def create_post_collection(blog_db=blog_db):
    try:
        blog_db.create_collection("post")
    except Exception as exc:
        print(exc)
    blog_db.command("collMod", "post", validator=blog_validator)


def create_author_collection(blog_db=blog_db):
    try:
        blog_db.create_collection("author")
    except Exception as exc:
        print(exc)
    blog_db.command("collMod", "author", validator=author_validator)


def insert_test_bulk_data(blog_db=blog_db):
    author = {
        "first_name": "1gku",
        "last_name": "1gku"
    }

    # author_ids = blog_db.author.insert_many(author).inserted_ids
    author_id = blog_db.author.insert_one(author).inserted_id
    print(f"Author IDs: {author_id}")

    posts = [
        {
            "author": author_id,
            "content": "mustbea date andisrequired",
            "photo": "mustbea date andisrequired",
            "published": datetime.now(),
            "category": ["mustbea", "date", "andisrequired"],
            "comments": [
                {
                    "_id": ObjectId(),
                    "author": blog_db.author.find_one({"_id": author_id}, {"first_name": 1}),
                    "published": datetime.now(),
                    "content": "mustbea date,andisrequired",
                    "likes": 1,
                    "replay": [
                        {
                            "_id": ObjectId(),
                            "author": blog_db.author.find_one({"_id": author_id}, {"first_name": 1}),
                            "comment_id": ObjectId(),
                            "published": datetime.now(),
                            "content": "mustbea date,andisrequired",
                            "likes": 3,
                        },
                        {
                            "_id": ObjectId(),
                            "author": blog_db.author.find_one({"_id": author_id}, {"first_name": 1}),
                            "replay_id": ObjectId(),
                            "published": datetime.now(),
                            "content": "mustbea date,andisrequired",
                            "likes": 2,
                        }
                    ]
                },

                # {"author": author_ids[1], "content": "mustbea date,andisrequired"},
                # {"author": author_ids[0], "content": "stbea at,andisr"},
            ],
            "tags": ["mustbea", "date", "andisrequired"],
            "views": 6,
            "likes": 2,
        },
        # {
        #     "author": author_ids[1],
        #     "content": "2mustbea date andisrequired",
        #     "photo": "2mustbea date andisrequired",
        #     "published": datetime.now(),
        #     "category": ["mustbea", "date", "andisrequired"],
        #     "comments": [
        #         {"author": author_ids[0], "content": "mustbea date,andisrequired"},
        #         {"author": author_ids[1], "content": "stbea at,andisr"},
        #     ],
        #     "tags": ["2mustbea", "date", "andisrequired"],
        #     "views": 7,
        #     "likes": 3,
        # }
    ]

    posts_collection = blog_db.post
    posts_collection.insert_many(posts)


create_author_collection()
create_post_collection()
insert_test_bulk_data()

# result = coll.find_one({"name": "first2"}, {"_id": 0})

# result = blog_db.post.find_one({}, {"_id": "6552282bf7b2cb7ed38c803a"})
# result = blog_db.post.find_one({"_id": ObjectId("6552282bf7b2cb7ed38c803a")}, {"comments.author.$id": 1})
# result = blog_db.author.find_one({"_id": ObjectId("6552282bf7b2cb7ed38c8039")})

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
