# GeoWatch

Enhancing disaster preparedness by providing real-time alerts for impending natural disasters by leveraging satellite imagery, machine learning, and data from NASA, Google Earth and other sources.

## Features

- **Real-time Alerts**: Get immediate notifications for upcoming natural disasters.
- **Data-Driven Insights**: Utilize advanced algorithms to analyze satellite imagery and predict disaster patterns.
- **User-Friendly Interface**: Navigate easily with an intuitive UI designed for quick access to critical information.

### Contributing Code
To contribute code to Geowatch, follow these steps:

1. Fork the Repository: Click the "Fork" button on the top right of this page.
2. Clone the repo:
```bash
git clone https://github.com/YOUR_USERNAME/geowatch.git
```
3. Update .env: Rename `example.env` to `.env` and fill in the required keys.
4. Install Docker: Download and install Docker from the [official website](https://docs.docker.com/engine/install/). Make sure both `docker` and `docker-compose` are installed.
5. Run Locally: Navigate to the project directory and run:
```bash
docker-compose up --build
```
6. Make changes: Implement your changes and commit them with clear, descriptive messages.
7. Push to Your Fork: Push your changes to your fork on GitHub:
```bash
git push origin master
```
8. Create a Pull Request: Go to the original repository and submit a pull request from your branch.

This will set up your local environment for development.

### Running

#### Frontend
1. Navigate to the frontend directory.
```bash
cd frontend/
```
2. Install packages.
```bash
npm install
```
3. Build the code.
```bash
npm run build
```
4. Run the server.
```bash
npm start && echo 'Frontend is accessible at http://localhost:3000'
```
#### Backend
1. Navigate to the backend directory.
```bash
cd backend/
```
2. Install packages.
```bash
pip install poetry; poetry config virtualenvs.create false; poetry install --no-root
```
3. Run the server.
```bash
poetry run uvicorn app.main:app --host 0.0.0.0 --port 8000 && echo 'Backend is accessible at http://localhost:8000'
```

### License
This project is licensed under the MIT License. See the [LICENSE.md](https://github.com/ab1nv/geowatch/blob/main/LICENSE.md) file for details.

### Acknowledgments
1. NASA for providing valuable data.
2. Google Earth for satellite imagery.
3. Open source contributors who make this project possible.
4. Team journalctl to make this idea come to reality.
