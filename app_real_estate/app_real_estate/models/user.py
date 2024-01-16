import enum
from enum import Enum

from sqlalchemy.orm import mapped_column, Mapped, relationship
from app_real_estate.db import Base
from sqlalchemy import ForeignKey, String
from sqlalchemy.dialects.postgresql import ARRAY

from typing import TYPE_CHECKING, Annotated

if TYPE_CHECKING:
    from app_real_estate.models import Profile, AssociateRatings, AssociateFeedback


class AppRole(str, Enum):
    ROLE_USER = 'ROLE_USER'
    ROLE_ADMIN = 'ROLE_ADMIN'
    ROLE_SUPER_ADMIN = 'ROLE_SUPER_ADMIN'


class User(Base):
    __tablename__ = "users"

    email: Mapped[str]
    password: Mapped[str]
    is_active: Mapped[bool]
    roles: Mapped[ARRAY] = mapped_column(ARRAY(String))

    profile_id: Mapped[int] = mapped_column(ForeignKey("profiles.id", ondelete="CASCADE"), nullable=True)

    profile = relationship("Profile", uselist=False, back_populates="users", lazy="joined")
    # profile = relationship("Profile", uselist=False, back_populates="users", lazy="joined")

    properties = relationship("Property", back_populates="users", lazy="joined")
    #
    ratings: Mapped[list["AssociateRatings"]] = relationship(back_populates="user")

    #
    # profiles: Mapped[list["AssociateFeedback"]] = relationship(back_populates="user")

    # def __str__(self):
    #     return f"{self.email}"

    @property
    def is_super_admin(self):
        return AppRole.ROLE_SUPER_ADMIN in self.roles

    @property
    def is_admin(self):
        return AppRole.ROLE_ADMIN in self.roles

    def add_admin_privileges_to_model(self):
        if not self.is_admin:
            return {*self.roles, AppRole.ROLE_ADMIN}

    def remove_admin_privileges_from_model(self):
        if self.is_admin:
            return {role for role in self.roles if role != AppRole.ROLE_ADMIN}
