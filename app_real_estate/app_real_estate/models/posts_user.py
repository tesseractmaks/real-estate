from sqlalchemy.orm import Mapped, relationship, backref

from app_real_estate.db import Base


class Post(Base):
    __tablename__ = "posts"
    title: Mapped[str] # APARTMENT, FAMILY HOME, RESORT VILLAS, OFFICE BUILDING
    profiles = relationship("Profile", back_populates="posts")

    def __str__(self):
        return f"{self.title}"
