# Workout Tracker API

A RESTful API for managing workouts and exercises built with Node.js, Express, TypeScript, Prisma, and PostgreSQL.

This project is based on the **Workout Tracker** backend project from roadmap.sh:

https://roadmap.sh/projects/fitness-workout-tracker

---

## Features

- CRUD operations for workouts
- CRUD operations for exercises
- PostgreSQL database with Prisma ORM
- One-to-many relationship between workouts and exercises
- Cascade delete for exercises when a workout is removed
- Request validation using Zod
- Global error handling
- OpenAPI (Swagger) documentation
- Health check endpoint
- Docker support
- TypeScript
- ESLint

---

## Tech Stack

- Node.js
- TypeScript
- Express
- PostgreSQL
- Prisma ORM
- Docker
- Zod
- Swagger UI
- ESLint

---

## Project Structure

```
src
├── config
├── controllers
├── database
├── docs
├── middlewares
├── repositories
├── routes
├── schemas
├── services
├── types
└── index.ts
```

---

## Getting Started

### Clone the repository

```bash
git clone <repository-url>

cd workout-tracker
```

### Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=3000

DATABASE_URL="postgresql://postgres:postgres@localhost:5433/workout_tracker?schema=public"
```

---

## Start PostgreSQL

```bash
docker compose up -d
```

---

## Apply database migrations

```bash
npm run db:migrate
```

---

## Run the development server

```bash
npm run dev
```

Server:

```
http://localhost:3000
```

---

## Build

```bash
npm run build
```

---

## Production

```bash
npm start
```

---

## Available Scripts

```bash
npm run dev
npm run build
npm start
npm run lint
npm run check
npm run db:migrate
npm run db:generate
```

---

## API Endpoints

### Health

```
GET /api/health
```

---

### Workouts

```
GET    /api/workouts
POST   /api/workouts
GET    /api/workouts/:id
PUT    /api/workouts/:id
DELETE /api/workouts/:id
```

---

### Exercises

```
GET    /api/workouts/:workoutId/exercises
POST   /api/workouts/:workoutId/exercises

GET    /api/exercises/:id
PUT    /api/exercises/:id
DELETE /api/exercises/:id
```

---

## API Documentation

Swagger UI is available at:

```
http://localhost:3000/api/docs
```

---

## Validation

Incoming requests are validated using Zod.

Examples:

- workout name is required
- exercise name is required
- sets must be greater than 0
- reps must be greater than 0
- weight cannot be negative

---

## Database

Prisma ORM is used for database access.

Relations:

```
Workout
  └── Exercise[]
```

Deleting a workout automatically deletes all related exercises.

---

## License

This project is for learning purposes.