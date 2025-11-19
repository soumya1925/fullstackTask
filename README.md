# Task Manager API Backend

-This is a Node.js + Express + MongoDB backend API for a Task Management application.
-It supports auto-registration/login, JWT authentication, and CRUD operations for tasks.

# Deployment API:
https://fullstacktask-974k.onrender.com
check api endpoints below  where how to  use this api is explained in more detail

---

## Features

- Auto-register user if email not found during login
- JWT-based authentication
- Create, Read, Update, Delete tasks
- Task schema: title, description, status, timestamps
- Protected routes (user must be logged in)
- Mobile-friendly design support for frontend

---

## Tech Stack

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv

---

## Folder Structure

```
fullstackTask/
 ├── server.js
 ├── package.json
 ├── controllers/
 ├── routes/
 ├── models/
 ├── middleware/
 └── .env   (DO NOT UPLOAD)
```

---

## Installation Instructions (Local Setup)

// 1. Clone the repository

```bash
git clone https://github.com/soumya1925/fullstackTask.git
cd fullstackTask
```

// 2. Install dependencies

```bash
npm install
```

// 3. Create a `.env` file in the root directory and add the following:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_key
```

// 4. Start the server in development mode

```bash
npm run dev
```

// Or start in production mode

```bash
npm start
```

// 5. The server will run on [http://localhost:5000](http://localhost:5000) by default

---

API Endpoints:(BASE URL:https://fullstacktask-974k.onrender.com)
#Authentication

-POST /api/auth/login
-Body: { name, email, password }
-Auto-registers if email not found, otherwise logs in
-POST /api/auth/logout
-Logs out the user (frontend removes token)

#Tasks (Require JWT Token in Authorization Header)
-POST /api/tasks
-Body: { title, description, status }
-Create a new task
-GET /api/tasks
-Get all tasks for logged-in user
-GET /api/tasks/:id
-Get a single task by ID
-PUT /api/tasks/:id
-Body: { title?, description?, status? }
-Update task by ID
-DELETE /api/tasks/:id
-Delete task by ID
-Test this API with Postman

// You can test the deployed API using Postman:

1. Login / Auto-register POST https://fullstacktask-974k.onrender.com/api/auth/login Body (JSON):

{
  "name": "Prem Sarkar",
  "email": "prem@gmail.com",
  "password": "Rljdy%$1245"
}

2. Logout POST https://fullstacktask-974k.onrender.com/api/auth/logout

3. Create a Task (Requires Authorization header Bearer <token>) POST https://fullstacktask-974k.onrender.com/api/tasks Body (JSON):

{
  "title": "Finish Project",
  "description": "Complete all API endpoints",
  "status": "pending"
}

4. Get All Tasks GET https://fullstacktask-974k.onrender.com/api/tasks Headers: Authorization: Bearer <token>

5. Get Single Task by ID GET https://fullstacktask-974k.onrender.com/api/tasks/<task_id> Headers: Authorization: Bearer <token>

6. Update Task PUT https://fullstacktask-974k.onrender.com/api/tasks/<task_id> Headers: Authorization: Bearer <token> Body (JSON): { "status": "completed" }

7. Delete Task DELETE https://fullstacktask-974k.onrender.com/api/tasks/<task_id> Headers: Authorization: Bearer <token>

Notes

// - Make sure your .env file is never uploaded to GitHub // - Use Postman or frontend to test APIs // - Frontend should include Authorization header: Bearer <token>
---

## Notes

// - Make sure your `.env` file is never uploaded to GitHub
// - Use Postman or frontend to test APIs
// - Frontend should include Authorization header: `Bearer <token>`

---


