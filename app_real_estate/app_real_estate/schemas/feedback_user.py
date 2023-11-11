from pydantic import BaseModel


class FeedbackUserSchema(BaseModel):
    user_id: int | None = None
    profile_id: int | None = None
    # author_id: int | None = None
    # agent_id: int | None = None
    text: str | None = None
