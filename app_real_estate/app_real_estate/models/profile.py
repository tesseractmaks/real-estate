from sqlalchemy.orm import mapped_column, Mapped
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy import Integer
from pydantic import EmailStr

from app_real_estate.db import Base


class ProfileModel(Base):
    user: Mapped[int] = ""
    nickname: Mapped[str]
    deals_count: Mapped[int]
    ratting: Mapped[int]
    feedback: Mapped[str]
    phone: Mapped[str]
    avatar: Mapped[str]
    first_name: Mapped[str]
    last_name: Mapped[str]
    role: Mapped[str]

    def __str__(self):
        return f"{self.first_name}, {self.last_name}, {self.nickname}"