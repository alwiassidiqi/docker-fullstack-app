# Docker Fullstack App

A simple full-stack web application using:

- React (Frontend)
- Node.js with Express (Backend)
- MySQL (Database)
- Docker & Docker Compose for containerization

## 🔧 How to Run

```bash
docker compose up --build
```
App will be available at http://localhost:3000 (frontend), backend at http://localhost:5000.

📁 Structure
frontend/   # React app
backend/    # Express API
docker-compose.yml

✍️ Features
Display user list from database

Future: Add/Edit/Delete user

Will add CI/CD with GitHub Actions + VPS deploy
