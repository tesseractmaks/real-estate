import asyncpg
from sqlalchemy import insert, inspect

from app_real_estate.models import UserModel
from .base_class import Base
from .db_helper import db_helper


async def connect_create_if_exsist(user, password, db_name):
    sys_conn = await asyncpg.connect(user=user, password=password, host="127.0.0.1")
    try:
        await asyncpg.connect(user=user, password=password, host="127.0.0.1", database=db_name)
    except asyncpg.InvalidCatalogNameError:
        await sys_conn.execute(
            f"CREATE DATABASE {db_name} OWNER {user}"
        )
    finally:
        sys_conn.close()


async def init_db():
    async with db_helper.engine.begin() as conn:
        tables = await conn.run_sync(
            lambda sys_conn: inspect(sys_conn).get_table_names()
        )
        if not tables:
            await conn.run_sync(Base.metadata.create_all)
        await add_test_data(conn)


async def add_test_data(conn):
    values_data = {
        "email": "one@mail.ru",
        "password": "qwerty",
        "is_active": True,
    }
    await conn.execute(insert(UserModel).values(values_data))
