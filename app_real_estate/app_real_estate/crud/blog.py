import re
from typing import Any

from bson import ObjectId
from pydantic import json as js
import json
from app_real_estate.db import blog_db


async def read_posts_db() -> list:
    posts = blog_db.post.find()
    collect = str(list(posts))

    step_1 = re.sub(r"(ObjectId\()", '', collect)
    step_2 = re.sub(r"('\),\s)", "', ", step_1)
    str_obj = re.sub(r"'", '"',  step_2)

    stud_obj = json.loads(str_obj)
    json_obj = json.dumps(stud_obj)
    res_ob = json.loads(json_obj)

    return res_ob


async def read_post_by_id_db(post_id: str) -> json:
    post = blog_db.post.find_one({}, {"_id": ObjectId(post_id)})
    return post


async def create_post_db(post_in: js) -> js:
    post_collection = blog_db.post
    post_collection.insert_one(post_in)
    return post_in


async def update_post_db(
        post_update,
        post_id
) -> json:
    blog_db.post.update_one({"_id": ObjectId(post_id)}, {"$set": {post_update}})
    return post_update


async def unset_field_post_db(
        post_update,
        post_id
) -> json:
    blog_db.post.update_one({"_id": ObjectId(post_id)}, {"$unset": {post_update: 1}})
    return f"Delete {post_update}"


async def unset_element_of_array_post_db(
        post_update,
        post_id
) -> str:
    blog_db.post.update_one({"_id": ObjectId(post_id)}, {"$pull": {post_update}})
    return f"Delete {post_update}"


async def delete_post_db(post_id: str) -> str:
    blog_db.post.remove({"_id": ObjectId(post_id)})
    return "Delete"
