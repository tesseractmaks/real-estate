from sqlalchemy.orm import (Mapped,
                            mapped_column,
                            relationship,
                            )
from sqlalchemy import UniqueConstraint
from sqlalchemy import ForeignKey
from typing import TYPE_CHECKING

from app_real_estate.db import Base


if TYPE_CHECKING:
    from app_real_estate.models import Profile, User


class AssociateRatings(Base):
    __tablename__ = "associate_ratings"
    __table_args__ = (
        UniqueConstraint(
            "user_id",
            "profile_id",
            name="idx_unique_u_p"
        ),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    profile_id: Mapped[int] = mapped_column(ForeignKey("profiles.id"))

    profile: Mapped["Profile"] = relationship(back_populates="users_rating")
    user: Mapped["User"] = relationship(back_populates="ratings")



class ReceivingRating(Base):
    __tablename__ = "receiving_ratings"

    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))

    # profile_id: Mapped[int] = mapped_column(ForeignKey("profiles.id"))
    # profiles: Mapped["Profile"] = relationship(secondary="Profile", back_populates="receiving_ratings")

    # ratting: Mapped[list["User"]] = relationship(secondary="ratting_relation", back_populates="profiles")

    def __str__(self):
        return f"{self.user_id}, {self.profile_id}"
