from fastapi_filter.contrib.sqlalchemy import Filter
from pydantic import Field
from models import Property


class PropertyFilter(Filter):
    city__ilike: str | None = Field(alias='city', default="")
    state__ilike: str | None = Field(alias='state', default="")
    category_id: int | None = Field(alias='category', default=0)
    status__ilike: str | None = Field(alias='status', default=None)
    bedrooms: int | None = 0

    class Constants(Filter.Constants):
        model = Property

    class Config:
        extra = "allow"
        populate_by_name = True
