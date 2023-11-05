from sqlalchemy.orm import Mapped
from pydantic import EmailStr

from app_real_estate.db import Base
from .profile import ProfileModel


class PropertyModel(Base):
    agent: Mapped[int]
    category: Mapped[str]
    street: Mapped[str]
    city: Mapped[str]
    state: Mapped[str]
    country: Mapped[str]
    postal_code: Mapped[int]
    price: Mapped[int]
    photo: Mapped[str]
    status: Mapped[str]
    house_area: Mapped[int]
    bedrooms: Mapped[int]
    garages: Mapped[int]
    bathrooms: Mapped[int]
    time_published: Mapped[str]
    age: Mapped[int]
    communicate: Mapped[str]
    description: Mapped[str]
    first_floor_area: Mapped[int]
    second_floor_area: Mapped[int]
    third_floor_area: Mapped[int]
    video: Mapped[str]
    map: Mapped[str]

    def __str__(self):
        return f"{self.agent}, {self.city}, {self.street}, {self.category}"


class CategoryPropertyModel(Base):

    title: Mapped[str] # APARTMENT, FAMILY HOME, RESORT VILLAS, OFFICE BUILDING