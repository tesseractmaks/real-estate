import datetime

from sqlalchemy.orm import mapped_column, Mapped
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy import Integer
from pydantic import EmailStr

from app_real_estate.db import Base


class MainModel(Base):
    email: Mapped[EmailStr]
    phone: Mapped[int]
    about_content: Mapped[str]
    quality_content: Mapped[str]
    staff_content: Mapped[str]


class StaffModel(Base):
    first_name: Mapped[str]
    last_name: Mapped[str]
    post: Mapped[str]
    content: Mapped[str]
    rating: Mapped[str]

