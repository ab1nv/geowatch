import redis
import os
from dotenv import load_dotenv

load_dotenv()

REDIS_HOST = os.getenv("REDIS_HOST")
REDIS_PORT = os.getenv("REDIS_PORT")
REDIS_PASSWORD = os.getenv("REDIS_PASSWORD")

try:
    r = redis.Redis(
        host=REDIS_HOST,
        port=int(REDIS_PORT),
        password=REDIS_PASSWORD,
        decode_responses=True,
    )

    if r.ping():
        print("Connected to Redis database successfully.")

except redis.ConnectionError:
    print("Failed to connect to Redis database.")


def redis_set(key, value):
    r.set(key, value)


def redis_get(key):
    return r.get(key)
