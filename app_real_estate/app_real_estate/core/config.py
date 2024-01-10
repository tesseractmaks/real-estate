import sys

from pydantic_settings import BaseSettings
from loguru import logger


class Setting(BaseSettings):
    db_url: str = "postgresql+asyncpg://postgres:qwerty@localhost:5432/test_estate_db"
    api_v1_prefix: str = "/api/v1"
    db_username: str = "postgres"
    db_password: str = "qwerty"
    db_name: str = "test_estate_db"
    db_echo: bool = True

    test_db_url: str = "postgresql+asyncpg://postgres:qwerty@localhost:5432/test_estate_db"
    test_db_username: str = "postgres"
    test_db_password: str = "qwerty"
    test_db_name: str = "test_estate_db"
    test_db_echo: bool = True


settings = Setting()


logger.add(
    "runtime_ {time} .json",
    # sys.stderr,
    retention="10 days",
    format="{time} {level} {message}",
    # level="INFO",
    level="ERROR",
    serialize=True,
    backtrace=True,
    diagnose=True,
)