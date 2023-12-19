from sqlalchemy.orm import mapped_column, Mapped, relationship
from app_real_estate.db import Base
from sqlalchemy import ForeignKey

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from app_real_estate.models import Profile, AssociateRatings, AssociateFeedback


class User(Base):
    __tablename__ = "users"

    email: Mapped[str]
    password: Mapped[str]
    is_active: Mapped[bool]

    profile = relationship("Profile", uselist=False, back_populates="users", lazy="joined")
    # profile = relationship("Profile", uselist=False, back_populates="users", lazy="joined")

    properties = relationship("Property",  back_populates="users", lazy="joined")
    #
    ratings: Mapped[list["AssociateRatings"]] = relationship(back_populates="user")
    #
    # profiles: Mapped[list["AssociateFeedback"]] = relationship(back_populates="user")


    # def __str__(self):
    #     return f"{self.email}"
