from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine, async_scoped_session, AsyncSession
from asyncio import current_task

from app_real_estate.core import settings


class DatabaseHelper:
    def __init__(self, url: str, echo: bool):
        self.engine = create_async_engine(
            url=url,
            echo=echo,
        )

        self.session_factory = async_sessionmaker(
            bind=self.engine,
            autoflush=False,
            autocommit=False,
            expire_on_commit=False,
        )

    def get_scoped_session(self):
        session = async_scoped_session(
            session_factory=self.session_factory,
            scopefunc=current_task,
        )
        return session

    async def get_scoped_dependensy(self) -> AsyncSession:
        session = self.get_scoped_session()
        yield session
        await session.remove()


db_helper = DatabaseHelper(
    settings.db_url,
    settings.db_echo
)
