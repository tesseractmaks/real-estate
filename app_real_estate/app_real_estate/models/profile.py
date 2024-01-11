from sqlalchemy.orm import mapped_column, Mapped, relationship
from sqlalchemy import ForeignKey, func, Column, Integer
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_utils import aggregated

from app_real_estate.db import Base
from app_real_estate.db.db_helper import db_helper

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from app_real_estate.models import User, AssociateFeedback


class Profile(Base):

    # user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), nullable=False)
    users = relationship("User", uselist=False, back_populates="profile", lazy="joined")
    # properties = relationship("Property", uselist=False, back_populates="profile_agent", lazy="joined")

    # users: Mapped[list["User"]] = relationship(secondary="associate_feedbacks", back_populates="profiles")

    # users_feed: Mapped[list["AssociateFeedback"]] = relationship(back_populates="profile")

    # users: Mapped[list["User"]] = relationship(secondary="associate_feedbacks", back_populates="profiles")

    # user_feedbacks_id: Mapped[list[int]] = mapped_column(ForeignKey("associate_feedbacks.id"), nullable=True)

    # feedback = relationship("UserFeedback", backref=backref("profiles", lazy="select"))
    # user_feedbacks_id: Mapped[list[int]] = mapped_column(ForeignKey("associate_feedbacks.id"), nullable=True)

    @aggregated('users_rating', Column(Integer, default=0))
    def rating_count(self):
        return func.count('1')

    users_rating: Mapped[list["AssociateRatings"]] = relationship(back_populates="profile")

    # feedback = relationship("UserFeedback", backref=backref("profiles", lazy="select"))

    # feedback_relation = relationship("AssociateFeedback", backref="profiles", foreign_keys=[user_feedbacks_id])

    # users_feedback = relationship("Users", secondary="AssociateFeedback", back_populates="profiles")
    # feedback_relation = relationship("AssociateFeedback", backref="profiles", foreign_keys=[user_feedbacks_id])
    # feedback = association_proxy("feedback_relation", "users")

    nickname: Mapped[str] = mapped_column(default="", server_default="")
    deals_count: Mapped[int] = mapped_column(nullable=True)
    phone: Mapped[str] = mapped_column(default="", server_default="")
    avatar: Mapped[str] = mapped_column(default="", server_default="")
    first_name: Mapped[str] = mapped_column(default="", server_default="")
    last_name: Mapped[str] = mapped_column(default="", server_default="")
    role: Mapped[str] = mapped_column(default="", server_default="")
    post: Mapped[int] = mapped_column(ForeignKey("posts.id"))
    posts = relationship("Post", back_populates="profiles")

    def __str__(self):
        return f"{self.nickname}, {self.last_name}, {self.nickname}"
