import asyncio
from hypercorn.asyncio import serve
from hypercorn.config import Config
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError, ResponseValidationError
from fastapi.exception_handlers import request_validation_exception_handler
import sentry_sdk

from api import router as router_v1
from api import router_token
from app_real_estate.core import settings
from app_real_estate.db import connect_create_if_exist
from app_real_estate.db import init_db
from app_real_estate.core import logger

sentry_sdk.init(
    dsn="https://38757782f71b29860b09bcce80d3fae9@o4505432482316288.ingest.sentry.io/4506538578673664",
    traces_sample_rate=1.0,
    profiles_sample_rate=1.0,
)


@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_create_if_exist(settings.db_username, settings.db_password, settings.db_name)
    await init_db()
    yield


app = FastAPI(lifespan=lifespan)


@logger.catch
@app.exception_handler(ResponseValidationError)
async def validation_exception_handler(request, exc):
    logger.error(exc)
    return await request_validation_exception_handler(request, exc)


@logger.catch
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    logger.error(exc)
    return await request_validation_exception_handler(request, exc)


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
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3000/",
    "https://127.0.0.1:3000",
    "http://127.0.0.1:8000",
    "https://127.0.0.1:8000",
]

app.add_middleware(
    CORSMiddleware,
    # allow_origins="*",
    allow_origins=origins,
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