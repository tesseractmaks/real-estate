import random
from datetime import datetime
from .utils import values_update
import pytest
from httpx import AsyncClient
from .conftest import client


@pytest.mark.anyio
@pytest.mark.parametrize(
    "route",
    [
        "properties/?page=1&size=9",
        "properties/1/",
        "properties/count-sities",
        "properties/sidebar"
    ]
)
async def test_get_properties(client: AsyncClient, route):
    response = await client.get(route)
    assert response.status_code == 200


@pytest.mark.anyio
async def test_create_property(client: AsyncClient):
    response = await client.post("properties/", json=values_update)
    assert response.status_code == 201


@pytest.mark.anyio
async def test_update_property(client: AsyncClient):
    response = await client.put("properties/1", json=values_update)
    assert response.status_code == 200


@pytest.mark.anyio
async def test_update_property_partial(client: AsyncClient):
    values_data = {
        "country": "string1"
        }
    response = await client.patch("properties/1", json=values_data)
    assert response.status_code == 200
#
#
# @pytest.mark.anyio
# async def test_delete_user(client: AsyncClient):
#     respons = await client.delete('http://127.0.0.1:8000/api/v1/profiles/1/')
#     response = await client.delete("/1/")
#     assert response.status_code == 204
#
