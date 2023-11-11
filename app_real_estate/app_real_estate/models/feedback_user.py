from sqlalchemy.orm import Mapped, mapped_column, relationship, backref
from sqlalchemy import ForeignKey, UniqueConstraint

from app_real_estate.db import Base

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from app_real_estate.models import Profile, User


class AssociateFeedback(Base):
    __tablename__ = "associate_feedbacks"

    __table_args__ = (
        UniqueConstraint(
            "user_id",
            "profile_id",
            name="idx_unique_feedbacks"
        ),
    )

    id: Mapped[int] = mapped_column(primary_key=True)

    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    profile_id: Mapped[int] = mapped_column(ForeignKey("profiles.id"))

    text: Mapped[str] = mapped_column(default="", server_default="")

    user: Mapped["User"] = relationship(back_populates="profiles")
    profile: Mapped["Profile"] = relationship(back_populates="users_feed")



    # agent: Mapped["User"] = relationship(back_populates="author")
    # author: Mapped["Profile"] = relationship(back_populates="agent")


# class AssociateFeedback(Base):
#     __tablename__ = "associate_feedbacks"
#     UniqueConstraint(
#         "author_id",
#         "agent_id",
#         name="idx_unique_feedbacks"
#     ),
#
#     author_id: Mapped[int] = mapped_column(ForeignKey("users.id"), nullable=True)
#     agent_id: Mapped[int] = mapped_column(ForeignKey("users.id"), nullable=True)
#     text: Mapped[str] = mapped_column(default="", server_default="")
#
#     relationship("Users", backref=backref("user_feedbacks", lazy="select"))
#     relationship("Users", backref=backref("user_feedbacks", lazy="select"))
#
#     def __str__(self):
#       return f"{self.agent_id}, {self.author_id}"