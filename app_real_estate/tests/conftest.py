from typing import AsyncGenerator, Any
import pytest
from httpx import AsyncClient
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from sqlalchemy.pool import NullPool
import pytest_asyncio

from app_real_estate.core import settings
from app_real_estate.db import Base
from app_real_estate.main import app
from app_real_estate.db import db_helper

engine_test = create_async_engine(settings.test_db_url, poolclass=NullPool)
async_session_maker = async_sessionmaker(bind=engine_test, class_=AsyncSession, expire_on_commit=False)


async def override_get_async_session() -> AsyncGenerator[AsyncSession, Any]:
    async with async_session_maker() as session:
        yield session


app.dependency_overrides[db_helper.scoped_session_dependency] = override_get_async_session


@pytest_asyncio.fixture(autouse=True, scope="session")
async def init_test_db():
    async with engine_test.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    async with engine_test.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)


@pytest_asyncio.fixture
async def client() -> AsyncGenerator[AsyncClient, None]:
    async with AsyncClient(app=app, base_url="http://127.0.0.1:8000/api/v1/", follow_redirects=True) as ac:
        yield ac


@pytest.fixture
def anyio_backend():
    return 'asyncio'



