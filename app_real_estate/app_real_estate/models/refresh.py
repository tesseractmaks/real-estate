import uuid
from datetime import datetime

from sqlalchemy.dialects.postgresql import UUID, TIMESTAMP
from sqlalchemy.orm import Mapped, mapped_column
from app_real_estate.db import Base


class RefreshKey(Base):
    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    exp: Mapped[datetime]
    refresh: Mapped[str]
    sub: Mapped[str]

    def __str__(self):
        return f"{self.__class__.__name__}, id={self.id}, exp={self.exp}, refresh={self.exp}, sub={self.sub}"

    def __repr__(self):
        return str(self)