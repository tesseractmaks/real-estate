import asyncio
from hypercorn.asyncio import serve
from hypercorn.config import Config
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware

from api import router as router_v1
from api import router_token
from app_real_estate.core import settings
from app_real_estate.db import connect_create_if_exist
from app_real_estate.db import init_db


@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_create_if_exist(settings.db_username, settings.db_password, settings.db_name)
    await init_db()
    yield


app = FastAPI(lifespan=lifespan)
app.mount("/img", StaticFiles(directory="frontend", html=True), name="img")
app.include_router(
    router=router_v1,
    prefix=settings.api_v1_prefix
)
app.include_router(
    router=router_token
)

origins = [
    "http://127.0.0.1",
    "https://127.0.0.1",
    "http://127.0.0.1:1234",
    "https://127.0.0.1:1234",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    # allow_origins=origins,
    allow_credentials=True,
    # allow_methods=["GET", "OPTIONS", "HEAD", "PATCH", "POST", "DELETE"],
    allow_methods="*",
    allow_headers=["*"],
)


config = Config()
config.bind = ["127.0.0.1:8000"]
sockets = config.create_sockets()
sock = sockets.insecure_sockets[0]


asyncio.run(serve(app, config))