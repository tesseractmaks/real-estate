from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.engine import Result
from sqlalchemy import select

# from models import AssociateFeedback
from schemas import FeedbackUserSchema


# async def read_feedbacks_db(session: AsyncSession) -> list[FeedbackUserSchema]:
#     stmt = select(AssociateFeedback).order_by(AssociateFeedback.id)
#     result: Result = await session.execute(stmt)
#     feedbacks = result.scalars().all()
#     return list(feedbacks)
#
#
# async def read_feedback_by_id_db(session: AsyncSession, feedback_id: int) -> FeedbackUserSchema | None:
#     return await session.get(AssociateFeedback, feedback_id)
#
#
# async def create_feedback_db(session: AsyncSession, feedback_in: FeedbackUserSchema) -> AssociateFeedback:
#     feedback = AssociateFeedback(**feedback_in.model_dump())
#     session.add(feedback)
#     await session.commit()
#     # await session.refresh(product)
#     return feedback


async def update_feedback_db(
        session: AsyncSession,
        feedback: FeedbackUserSchema,
        feedback_update: FeedbackUserSchema,
        partial: bool = False
) -> FeedbackUserSchema:
    for name, value in feedback_update.model_dump(exclude_unset=partial).items():
        setattr(feedback, name, value)
    await session.commit()
    return feedback


async def delete_feedback_db(session: AsyncSession, feedback: FeedbackUserSchema) -> None:
    await session.delete(feedback)
    await session.commit()
