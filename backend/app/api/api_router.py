from fastapi import APIRouter
from app.api import example

api_router = APIRouter()

api_router.include_router(example.router, prefix="/example", tags=["example"])
