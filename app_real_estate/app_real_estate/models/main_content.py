import json

from pymongo.mongo_client import MongoClient
from datetime import datetime

from app_real_estate.db import blog_db


# class Main(Base):
#     email: Mapped[EmailStr]
#     phone: Mapped[int]
#     about_content: Mapped[str]
#     quality_content: Mapped[str]
#     staff_content: Mapped[str]


# class Staff(Base):
#     first_name: Mapped[str]
#     last_name: Mapped[str]
#     post: Mapped[str]
#     content: Mapped[str]
#     rating: Mapped[str]
# MongoDB

# uri = "mongodb+srv://admin:qwerty1@cluster0.b7f96.mongodb.net/?retryWrites=true&w=majority"

def insert_test_data(filename):
    with open(filename) as file:
        data = json.load(file)
    main_collection = blog_db.main
    main_collection.insert_one(data)
