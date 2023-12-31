from pydantic_settings import BaseSettings


class Setting(BaseSettings):
    db_url: str = "postgresql+asyncpg://postgres:qwerty@localhost:5432/estate_db"
    api_v1_prefix: str = "/api/v1"
    db_username: str = "postgres"
    db_password: str = "qwerty"
    db_name: str = "estate_db"
    db_echo: bool = True


settings = Setting()