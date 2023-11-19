from fastapi import APIRouter

from app_real_estate.crud import read_data_one_db

router = APIRouter(tags=["MainSite"])


@router.get("/")
async def read_data():
    return await read_data_one_db()

