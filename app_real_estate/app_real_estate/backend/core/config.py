import sys

import os
from os.path import join, dirname
from dotenv import load_dotenv
from pydantic_settings import BaseSettings
from loguru import logger
dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)


class Setting(BaseSettings):
    db_url: str = f"postgresql+asyncpg://{os.getenv('POSTGRES_USER')}:{os.getenv('POSTGRES_PASSWORD')}@{os.getenv('POSTGRES_HOST')}:5432/estate_db"
    api_v1_prefix: str = "/api/v1"
    db_username: str = "estate"
    db_password: str = "qwerty"
    db_name: str = "estate_db"
    db_echo: bool = True

    test_db_url: str = "postgresql+asyncpg://postgres:qwerty@localhost:5432/test_estate_db"
    test_db_username: str = "postgres"
    test_db_password: str = "qwerty"
    test_db_name: str = "test_estate_db"
    test_db_echo: bool = True


settings = Setting()


logger.add(
    # "runtime_ {time} .json",
    sys.stdout,
    # retention="10 days",
    format="{time} {level} {message}",
    # level="INFO",
    level="ERROR",
    serialize=True,
    backtrace=True,
    diagnose=True,
)