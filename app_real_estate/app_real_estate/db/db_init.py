import json
import os
import random
# from pymongo.server_api import ServerApi
from datetime import datetime

import asyncpg
# import sqlalchemy
from pymongo.mongo_client import MongoClient
from sqlalchemy import insert, inspect

from app_real_estate.models import User, Profile, Category, Property, Post, AppRole
from .base_class import Base
from .db_helper import db_helper
from ..core import settings


# from app_real_estate.core import blog_validator, author_validator


async def connect_create_if_exist(user, password, db_name):
    sys_conn = await asyncpg.connect(user=user, password=password, host="127.0.0.1")
    try:
        await asyncpg.connect(user=user, password=password, host="127.0.0.1", database=db_name)
    except asyncpg.InvalidCatalogNameError:
        await sys_conn.execute(
            f"CREATE DATABASE {db_name} OWNER {user}"
        )
    finally:
        await sys_conn.close()


async def init_db():
    async with db_helper.engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        tables = await conn.run_sync(
            lambda sys_conn: inspect(sys_conn).get_table_names()
        )
        if not tables:
            await conn.run_sync(Base.metadata.create_all)

    await add_test_post_data()
    await add_test_profile_data()
    await add_test_user_data()

    await add_test_categories_data()
    await add_test_profile_data()
    await add_test_property_data()

    # await add_test_user_data(conn)
    # await add_test_profile_data(conn)

    # await add_test_user_data()
    # await conn.commit()
    # add_test_data(conn)


async def add_test_post_data():
    async with db_helper.engine.begin() as conn:
        for _ in range(1, 4):
            values_data = {
                "title": "string"
            }

            await conn.execute(insert(Post).values(values_data))
        await conn.commit()


async def add_test_categories_data():
    async with db_helper.engine.begin() as conn:
        for i in ["flat", "house"]:
            values_data = {
                "title": i
            }

            await conn.execute(insert(Category).values(values_data))
        await conn.commit()


async def add_test_profile_data():
    async with db_helper.engine.begin() as conn:
        for i in range(1, 4):
            values_data = {
                # "users": i,
                "rating_count": i,
                "nickname": "string",
                "deals_count": 0,
                "phone": "string",
                "avatar": "/src/img/author.jpg",
                "first_name": "string",
                "last_name": "string",
                "post": 1,
            }

            await conn.execute(insert(Profile).values(values_data))
        await conn.commit()


async def add_test_user_data():
    async with db_helper.engine.begin() as conn:
        for i in range(1, 2):
            values_data = {
                "profile_id": i,
                "email": f"one{i}@mail.ru",
                "password": "$2b$12$ApY3jQ1m3FyNmJ305FHcqufutbf0cVV5oOUWIXgp7TakmlY.d21bC",  # qwerty
                "is_active": True,
                "roles": [AppRole.ROLE_USER]
            }
            if i == 1:
                values_data["roles"].append(AppRole.ROLE_ADMIN)
            if i == 2:
                values_data["roles"].append(AppRole.ROLE_SUPER_ADMIN)

            await conn.execute(insert(User).values(values_data))
        await conn.commit()


async def add_test_property_data():
    async with db_helper.engine.begin() as conn:
        for _ in range(1, 154):
            values_data = {
                "agent_id": 1,
                "category_id": random.randint(1, 2),
                "street": "string",
                "city": random.choice(["Moscow", "Saint Petersburg", "Tula", "Kursk", "Omsk", "Tver", "Oryol"]),
                "state": random.choice(["Moscow area", "Leningradskaya", "Tulskaya"]),
                "country": "string",
                "postal_code": 0,
                "price": random.randint(10000, 80000),
                "photo": [
                    "/src/img/single-list-slider/2.jpg",
                    "/src/img/single-list-slider/3.jpg",
                    "/src/img/single-list-slider/4.jpg",
                    "/src/img/single-list-slider/5.jpg",
                    "/src/img/single-list-slider/3.jpg",
                    "/src/img/single-list-slider/4.jpg",
                ],
                "photo_plan":
                    [
                        "/src/img/plan-sketch.jpg",
                        "/src/img/plan-sketch.jpg",
                        "/src/img/plan-sketch.jpg",
                    ],
                "status": random.choice(["sale", "rent"]),
                "house_area": random.randint(50, 800),
                "bedrooms": random.randint(1, 6),
                "garages": 2,
                "bathrooms": 3,
                "time_published": datetime.now(),
                "age": random.randint(1, 16),
                "communicate": "string",
                "description": "string",
                "first_floor_area": 10,
                "second_floor_area": 10,
                "third_floor_area": 10,
                "video": "string",
                "map": "string"
            }

            await conn.execute(insert(Property).values(values_data))
        await conn.commit()


# MongoDB

# FastAPI + MongoDB pagination

# @app.get("/items/")
# async def get_items(page: int = 1, limit: int = 10):
#     client = MongoClient("mongodb://localhost:27017/")
#     db = client["mydatabase"]
#     items = db["items"].find().skip((page - 1) * limit).limit(limit)
#     return list(items)

# uri = "mongodb+srv://admin:qwerty1@cluster0.b7f96.mongodb.net/?retryWrites=true&w=majority"


uri = "mongodb://localhost:27017/"

client = MongoClient(uri)
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as exc:
    print(exc)

# Creating a new database
estate_db = client.estate
blog_db = client.blog


def create_post_collection(blog_db=blog_db):
    try:
        blog_db.create_collection("post")
    except Exception as exc:
        print(exc)
    # blog_db.command("collMod", "post", validator=blog_validator)


def create_author_collection(blog_db=blog_db):
    try:
        blog_db.create_collection("author")
    except Exception as exc:
        print(exc)
    # blog_db.command("collMod", "author", validator=author_validator)


def insert_data(filename):
    with open(filename) as file:
        data = json.load(file)
    main_collection = estate_db.main
    main_collection.insert_one(data)


def create_main_collection():
    try:
        estate_db.create_collection("main")
    except Exception as exc:
        print(exc)
    filename = os.path.relpath("db/main_site.json")
    insert_data(filename)


def insert_test_bulk_data(blog_db=blog_db):
    author = {
        "first_name": "1gku",
        "last_name": "1gku"
    }

    # author_ids = blog_db.author.insert_many(author).inserted_ids
    author_id = blog_db.author.insert_one(author).inserted_id
    # print(f"Author IDs: {author_id}")
    #
    posts = [
        {
            "author": blog_db.author.find_one({"_id": author_id}),
            "content": "mustbea date andisrequired",
            "photo": "mustbea date andisrequired",
            "published": str(datetime.now()),
            "category": ["mustbea", "date", "andisrequired"],
            "comments": [],

            "tags": ["mustbea", "date", "andisrequired"],
            "views": 6,
            "likes": 2,
        },

    ]

    posts_collection = blog_db.post
    posts_collection.insert_many(posts)


def insert_test_data(filename):
    with open(filename) as file:
        data = json.load(file)
    main_collection = blog_db.main
    main_collection.insert_one(data)


# create_author_collection()
# create_post_collection()
# create_main_collection()
# insert_test_bulk_data()
# filename = os.path.abspath("./db/main_site.json")
# # filename = os.path.abspath("..app_real_estate/db/main_site.json")
# insert_test_data(filename)



# async def add_test_property_data2():
#     async with db_helper.engine.begin() as conn:
#         for _ in range(20):
#             property_values_data = {
#                 "agent_id": 1,
#                 "nickname": f"{i}one",
#                 "user_feedbacks_id": i,
#                 # "receiving_ratings": 1,
#             }
#             await conn.execute(insert(Property).values(property_values_data))
# Profile.feedback.append(1)
# await conn.commit()
# await conn.commit()
# await conn.close()


# await add_test_data1()
#
# await add_test_data2()
#
# # await add_test_data3()
#
# await add_test_data4()
# await add_test_data5()
# # await add_test_data6()
# await add_test_data11()


#
#
# async def add_test_data1():
#     async with db_helper.engine.begin() as conn:
#         for i in range(1, 4):
#             u_values_data = {
#                 "author_id": i,
#                 "agent_id": i,
#                 "text": f"{i}-yii",
#             }
#             await conn.execute(insert(UserFeedback).values(u_values_data))
#     # Profile.feedback.append(1)
#         await conn.commit()
#
# async def add_test_data11():
#     async with db_helper.engine.begin() as conn:
#         for e in range(1, 4):
#             for i in range(1, 4):
#                 r_values_data = {
#                     "user_id": e,
#                     "profile_id": i,
#                 }
#                 await conn.execute(insert(AssotiateRatings).values(r_values_data))
#     # Profile.feedback.append(1)
#     await conn.commit()
#
#
# async def add_test_data2():
#     async with db_helper.engine.begin() as conn:
#         for i in range(1, 4):
#             profile_values_data = {
#                 "user_id": i,
#                 "nickname": f"{i}one",
#                 "user_feedbacks_id": i,
#                 # "receiving_ratings": 1,
#             }
#             await conn.execute(insert(Profile).values(profile_values_data))
#     # Profile.feedback.append(1)
#     await conn.commit()
#     # await conn.commit()
#     # await conn.close()
#
#
# # async def add_test_data22():
# #     async with db_helper.engine.begin() as conn:
# #         await conn.execute(update(Profile).where(Profile.id == 1).values(user_feedbacks=1, ratting=1))
# #     await conn.commit()
#
#
#
# async def add_test_data3():
#     async with db_helper.engine.begin() as conn:
#         uf_values_data = {
#             "author_id": 1,
#             "text": "texttexttexttext",
#         }
#         await conn.execute(insert(UserFeedback).values(uf_values_data))
#         await conn.commit()
#         # await conn.commit()
#
#
# async def add_test_data4():
#     async with db_helper.engine.begin() as conn:
#         c_values_data = {
#             "title": "agent",
#         }
#         await conn.execute(insert(Category).values(c_values_data))
#         await conn.commit()
#
#
# async def add_test_data5():
#     async with db_helper.engine.begin() as conn:
#         c_values_data = {
#             "agent": 1,
#             "category": 1,
#             "city": "citycitycity",
#         }
#         await conn.execute(insert(Property).values(c_values_data))
#         await conn.commit()
#
#
# async def add_test_data6():
#     async with db_helper.engine.begin() as conn:
#         stmt = select(User).order_by(User.id)
#         result: Result = await conn.execute(stmt)
#         print(result.fetchall())
# products = result.scalars().all()
# print(list(products))
# return list(products)


# async def read_users_by_id_db(session: AsyncSession, user_id: int):
#     return await session.get(User, user_id)
