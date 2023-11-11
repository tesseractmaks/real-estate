import asyncio
from hypercorn.asyncio import serve
from hypercorn.config import Config
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from api import router as router_v1
from app_real_estate.core import settings
from app_real_estate.db import connect_create_if_exist
from app_real_estate.db import init_db


@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_create_if_exist(settings.db_username, settings.db_password, settings.db_name)
    await init_db()
    yield


app = FastAPI(lifespan=lifespan)
app.mount("/img", StaticFiles(directory="img"), name="img")
app.include_router(
    router=router_v1,
    prefix=settings.api_v1_prefix
)


config = Config()
config.bind = ["127.0.0.1:8000"]
sockets = config.create_sockets()
sock = sockets.insecure_sockets[0]


asyncio.run(serve(app, config))