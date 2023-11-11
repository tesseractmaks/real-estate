from datetime import datetime

from pydantic import BaseModel


class PropertySchema(BaseModel):
    agent_id: int
    category_id: int
    street: str | None = None
    city: str | None = None
    state: str | None = None
    country: str | None = None
    postal_code: int | None = 0
    price: int | None = 0
    photo: str | None = None
    status: str | None = None
    house_area: int | None = 0
    bedrooms: int | None = 0
    garages: int | None = 0
    bathrooms: int | None = 0
    time_published: datetime = None
    age: int | None = 0
    communicate: str | None = None
    description: str | None = None
    first_floor_area: int | None = 0
    second_floor_area: int | None = 0
    third_floor_area: int | None = 0
    video: str | None = None
    map: str | None = None


class PropertyCreateSchema(PropertySchema):
    ...


class PropertyUpdateSchema(PropertySchema):
   ...


class PropertyUpdatePartialSchema(PropertySchema):
    agent: int | None = None
    category: int | None = None