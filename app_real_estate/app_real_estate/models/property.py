from sqlalchemy.orm import Mapped, mapped_column, relationship, backref
from sqlalchemy import ForeignKey, func
# from pydantic import EmailStr
# from pymongo.mongo_client import MongoClient
# from pymongo.server_api import ServerApi
from datetime import datetime

from app_real_estate.db import Base
# from .profile import Profile

# uri = "mongodb+srv://admin:qwerty1@cluster0.b7f96.mongodb.net/?retryWrites=true&w=majority"
# uri = "mongodb://localhost:27017/"

# client = MongoClient(uri)

# try:
#     client.admin.command('ping')
#     print("Pinged your deployment. You successfully connected to MongoDB!")
# except Exception as e:
#     print(e)

# db = client.estate
# coll = db.property

# coll.insert_one({"name": "first"})
# result = coll.find_one({"name": "first2"}, {"_id": 0})
# result = coll.find({}, {"_id": 0})
# print(list(result))
# print(result)


class Property(Base):
    __tablename__ = "properties"
    # arbitrary_types_allowed = True

    agent_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    users = relationship("User", uselist=False, back_populates="properties")

    category_id: Mapped[int] = mapped_column(ForeignKey("categories.id"))
    categories = relationship("Category", back_populates="properties")

    street: Mapped[str] = mapped_column(default="", server_default="")
    city: Mapped[str] = mapped_column(default="", server_default="")
    state: Mapped[str] = mapped_column(default="", server_default="")
    country: Mapped[str] = mapped_column(default="", server_default="")
    postal_code: Mapped[int] = mapped_column(nullable=True)
    price: Mapped[int] = mapped_column(nullable=True)
    photo: Mapped[str] = mapped_column(default="", server_default="")
    status: Mapped[str] = mapped_column(default="", server_default="")
    house_area: Mapped[int] = mapped_column(nullable=True)
    bedrooms: Mapped[int] = mapped_column(nullable=True)
    garages: Mapped[int] = mapped_column(nullable=True)
    bathrooms: Mapped[int] = mapped_column(nullable=True)
    time_published: Mapped[datetime] = mapped_column(default=datetime.now, server_default=func.now())
    age: Mapped[int] = mapped_column(nullable=True)
    communicate: Mapped[str] = mapped_column(default="", server_default="")
    description: Mapped[str] = mapped_column(default="", server_default="")
    first_floor_area: Mapped[int] = mapped_column(nullable=True)
    second_floor_area: Mapped[int] = mapped_column(nullable=True)
    third_floor_area: Mapped[int] = mapped_column(nullable=True)
    video: Mapped[str] = mapped_column(default="", server_default="")
    map: Mapped[str] = mapped_column(default="", server_default="")

    def __str__(self):
        return f"{self.agent}, {self.city}, {self.category}"
        # return f"{self.agent}, {self.city}, {self.street}, {self.category}"

