# Naksh Jewels – Mini E-Commerce Module

This project was built as part of the **Naksh Jewels ReactJS & Node.js Internship Assessment**.  
It demonstrates practical frontend, backend, and Docker skills with clean structure, validation, and error handling.

---
### Demo Video - https://drive.google.com/file/d/18v4vKsLmcrVBxRkHhO9lpyuYmzJ06ibL/view?usp=sharing
---

## 🚀 Tech Stack

**Frontend**
- Next.js (React)
- Functional components only
- Context API for state management

**Backend**
- Node.js + Express
- MongoDB (Mongoose)
- Zod for request validation

**DevOps**
- Docker
- Docker Compose

---

## ✅ Features

### Frontend
- Product listing with image, name, and price
- Add to cart, update quantity, remove item
- Centralized cart state using Context API
- No UI libraries used
- Clean folder structure

### Backend
- `GET /api/v1/products`
- `POST /api/v1/cart`
- Centralized validation middleware
- Proper error handling
- MongoDB schema validation
- Environment-based configuration

---

## 🐳 Docker Setup

- Dockerfile for frontend and backend
- Multi-stage frontend build
- `docker-compose.yml` orchestrates MongoDB, backend, and frontend
- Single command startup:
```bash
docker-compose up
```

---

## ⚙️ Running the Project

### Prerequisites
- Docker
- Docker Compose

### Steps
```bash
git clone <repository-url>
cd naksh_jewels
docker-compose build
docker-compose up
```

### Access
- Frontend: http://localhost:3000  
- Backend API: http://localhost:8000/api/v1

---

**Author:**  
Mohammad Atif  
Internship Candidate – Naksh Jewels
