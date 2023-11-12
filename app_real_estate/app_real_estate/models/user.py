from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import Mapped, relationship, backref

from app_real_estate.db import Base

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from app_real_estate.models import Profile, AssociateRatings, AssociateFeedback


class User(Base):
    __tablename__ = "users"
    email: Mapped[str]
    password: Mapped[str]
    is_active: Mapped[bool]

    profile = relationship("Profile", uselist=False, back_populates="users")

    properties = relationship("Property", uselist=False, back_populates="users")

    ratings: Mapped[list["AssociateRatings"]] = relationship(back_populates="user")

    profiles: Mapped[list["AssociateFeedback"]] = relationship(back_populates="user")


    # def __str__(self):
    #     return f"{self.email}"



