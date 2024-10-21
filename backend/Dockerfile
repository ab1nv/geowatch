# Use the latest Python version (3.12)
FROM python:3.12-slim

WORKDIR /app

# Copy pyproject.toml and poetry.lock files first
COPY pyproject.toml poetry.lock /app/

# Install poetry
RUN pip install poetry

# Install dependencies without creating a virtual environment
RUN poetry config virtualenvs.create false
RUN poetry install --no-root

# Copy the rest of the application code
COPY . /app

# Expose the port that FastAPI will run on
EXPOSE 8000

# Start the FastAPI server and print the access link
CMD ["sh", "-c", "poetry run uvicorn app.main:app --host 0.0.0.0 --port 8000 && echo 'Backend is accessible at http://localhost:8000'"]
