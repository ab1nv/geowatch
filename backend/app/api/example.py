from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()


class ExampleItem(BaseModel):
    name: str
    description: str


@router.get("/")
async def get_example():
    return {"message": "API CHAL RHA HAI"}


@router.post("/")
async def create_example(item: ExampleItem):
    return {"message": f"Item '{item.name}' created successfully!"}
