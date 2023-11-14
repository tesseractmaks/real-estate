from bson import ObjectId
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from datetime import datetime
import asyncpg
from sqlalchemy import insert, inspect, select, Result

# from app_real_estate.models import User, Profile, UserFeedback, Category, Property, AssotiateRatings
from .base_class import Base
from .db_helper import db_helper
from app_real_estate.core import blog_validator, author_validator


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
        tables = await conn.run_sync(
            lambda sys_conn: inspect(sys_conn).get_table_names()
        )
        if not tables:
            await conn.run_sync(Base.metadata.create_all)
    # await conn.commit()
    # add_test_data(conn)


# MongoDB

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


def create_main_collection():
    try:
        blog_db.create_collection("main")
    except Exception as exc:
        print(exc)


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
create_main_collection()
insert_test_bulk_data()



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

# def add_test_data(conn):
#     # async with db_helper.engine.begin() as conn:
#     for _ in range(1, 4):
#         user_values_data = {
#             "email": "one@mail.ru",
#             "password": "qwerty",
#             "is_active": True,
#         }
#         conn.execute(insert(User).values(user_values_data))
#
#     conn.commit()
#         # await conn.close()
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
