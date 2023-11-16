import re
from typing import Any
from datetime import datetime
from bson import ObjectId
import json
from app_real_estate.db import blog_db
from app_real_estate.schemas import PostBlogCreateSchema, PostBlogUpdateSchema, CommentSchema, CommentUpdateSchema


async def pasre_to_obj(collect):
    step_1 = re.sub(r"(ObjectId\()", '', str(collect))
    step_2 = re.sub(r"('\),\s)", "', ", step_1)
    step_3 = re.sub(r"('\))", "'",  step_2)
    str_obj = re.sub(r"'", '"', step_3)

    stud_obj = json.loads(str_obj)
    json_obj = json.dumps(stud_obj)
    collection = json.loads(json_obj)
    return collection


async def read_posts_db() -> list:
    posts = blog_db.post.find()
    collect = str(list(posts))
    res_ob = await pasre_to_obj(collect)

    return res_ob


async def read_post_by_id_db(post_id: str) -> PostBlogCreateSchema:
    # collect = blog_db.post.find_one({"_id": ObjectId(post_id)})
    post = blog_db.post.find_one({"_id": ObjectId(post_id)})
    # post = await pasre_to_obj(collect)
    return post


async def create_post_db(post_in: PostBlogCreateSchema) -> PostBlogCreateSchema:
    post_collection = blog_db.post

    post = {
        "author": post_in.author,
        "content": post_in.content,
        "photo": post_in.photo,
        "published": str(datetime.now()),
        "category": post_in.category,
        "tags": post_in.tags
    }
    post_collection.insert_one(post)
    # post_response = await pasre_to_obj(post)
    return post_in


async def update_post_db(
        post_update: PostBlogUpdateSchema,
        post_id: str
) -> PostBlogUpdateSchema:

    post_new = blog_db.post.find_one_and_update({"_id": ObjectId(post_id)}, {"$set": post_update.model_dump(exclude_unset=True)})
    post_response = await pasre_to_obj(post_new)
    return post_response


async def delete_post_db(post_id: str) -> str:
    blog_db.post.find_one_and_delete({"_id": ObjectId(post_id)})
    return "Delete"

#comments


async def create_comment_db(comment_in: CommentSchema, post_id: str) -> CommentSchema:
    comment_collection = blog_db.post

    comment = {
        "id": str(ObjectId()),
        "author": comment_in.author,
        "post_id": post_id,
        "published": str(datetime.now()),
        "content": comment_in.content,
    }
    comment_new = blog_db.post.find_one_and_update(
        {"_id": ObjectId(post_id)},
        {"$push": {"comments": comment}})
    comment_collection.insert_one(comment)
    comment_response = await pasre_to_obj(comment_new)
    return comment_response


async def update_comment_db(
        comment_update: CommentUpdateSchema,
        post_id: str,
        comment_id: str,
) -> CommentSchema:
    get_post = blog_db.post.find_one({"_id": ObjectId(post_id)})
    for comment in get_post["comments"]:
        if comment["id"] == comment_id:
            comment["content"] = comment_update.content

    comment_new = blog_db.post.find_one_and_update({"_id": ObjectId(post_id)}, {"$set": get_post.model_dump(exclude_unset=True)})
    comment_response = await pasre_to_obj(comment_new)
    return comment_response


async def delete_comment_db(post_id: str, comment_id: str,) -> str:
    get_post = blog_db.post.find_one({"_id": ObjectId(post_id)})
    for comment in get_post["comments"]:
        if comment["id"] == comment_id:
            get_post["comments"].remove(comment)

    blog_db.post.find_one_and_update({"_id": ObjectId(post_id)},
                                                   {"$set": get_post.model_dump(exclude_unset=True)})
    return "Delete"
