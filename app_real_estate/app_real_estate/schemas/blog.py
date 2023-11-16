from datetime import datetime
from pydantic import BaseModel, Field, ConfigDict


class AuthorSchema(BaseModel):
    id: str | None = Field(alias="_id")
    first_name: str
    last_name: str


class PostBlogSchema(BaseModel):
    author: AuthorSchema
    content: str
    photo: str
    published: str | None = str(datetime.now())
    category: list[str]
    tags: list[str]

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "author": {
                        "id": "655376e5807668698d9acf8d",
                        "first_name": "some name",
                        "last_name": "some last name"
                    },
                    "content": "some text",
                    "photo": "some link",
                    "category": ["some text", "some text", "some text"],
                    "tags": ["some text", "some text", "some text"],
                },
            ]
        }
    }


class PostBlogCreateSchema(BaseModel):
    ...


class PostBlogUpdateSchema(PostBlogSchema):
    author: AuthorSchema | None = None
    content: str | None = None
    photo: str | None = None
    published: str | None = str(datetime.now())
    category: list[str] | None = None
    tags: list[str] | None = None


class CommentReplaySchema(BaseModel):
    author: AuthorSchema
    comment_id: str
    published: str | None = str(datetime.now())
    content: str | None = None
    likes: int | None = None


class CommentSchema(BaseModel):
    id: str
    author: AuthorSchema
    post_id: str
    published: str | None = str(datetime.now())
    content: str | None = None
    likes: int | None = None
    replay_comments: list[CommentReplaySchema] | None = None


class CommentUpdateSchema(PostBlogSchema):
    author: AuthorSchema | None = None
    post_id: str | None = None
    comment_id: str | None = None
    published: str | None = str(datetime.now())
    content: str | None = None
    likes: int | None = None
    replay_comments: list[CommentReplaySchema] | None = None


class PostBlogCommentSchema(PostBlogSchema):
    comments: list[CommentSchema] | None = None

    model_config = {
        "json_schema_extra": {
            "examples": [
                {

                    "author": {
                        "id": "655376e5807668698d9acf8d",
                        "first_name": "some name",
                        "last_name": "some last name"
                    },
                    "content": "some text",
                    "photo": "some link",
                    "category": ["some text", "some text", "some text"],
                    "tags": ["some text", "some text", "some text"],
                    "likes": 3,

                    "comments": [
                        {
                            "id": "655376e5807668698d9acf8y",
                            "author": {
                                "id": "655376e5807668698d9acf8d",
                                "first_name": "some name",
                                "last_name": "some last name"
                            },
                            "post_id": "655376e5807668698d9acf8d",
                            "published": str(datetime.now()),
                            "content": "some text",
                            "likes": 1,

                            "replay_comments": [
                                {
                                    "author": {
                                        "id": "655376e5807668698d9acf8d",
                                        "first_name": "some name",
                                        "last_name": "some last name"
                                    },
                                    "comment_id": "655376e5807668698d9acf8d",
                                    "published": str(datetime.now()),
                                    "content": "some text",
                                    "likes": 3
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }

    # class Post(BaseModel):
    #     id: Mapped[int]
    #     author: Mapped[int] = "ForeignKey(Author.id)"
    #     content: Mapped[str]
    #     photo: Mapped[str]
    #     published: Mapped[datetime]
    #     category: Mapped[list[int]] = "[ForeignKey(Category.id)]"
    #     comments: Mapped[list[str]] = "[ForeignKey(Comment.id)]"
    #     views: Mapped[int] = "aggregate [ForeignKey(Views.id)]"
    #     tags: Mapped[list[int]] = "[ForeignKey(Tag.id)]"
    #     likes: Mapped[int] = "aggregate [ForeignKey(Like.id)]"
    #
    # class Like(Base):
    #     id: Mapped[int] = "unique(user_id, post_id)"
    #     user_id: Mapped[int] = "FK"
    #     post_id: Mapped[int] = "FK"
    #     comment_id: Mapped[int] = "FK"
    #
    #
    # class Comment(Base):
    #     id: Mapped[int]
    #     user_id: Mapped[int] = "ForeignKey(User.id)"
    #     post_id: Mapped[int] = "ForeignKey(Post.id)"
    #     content: Mapped[str]
    #
    #
    # class Tag(Base):
    #     id: Mapped[int]
    #     title: Mapped[str]
    #
    #
    # class Category(Base):
    #     id: Mapped[int]
    #     title: Mapped[str]
    #
    #
    # class Views(Base):
    #     id: Mapped[int]
    #     post_id: Mapped[int] = "ForeignKey(Post.id)"
    #     user_id: Mapped[int] = "ForeignKey(User.id)"
