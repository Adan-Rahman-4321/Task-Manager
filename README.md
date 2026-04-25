# Task Manager Web App

A full-stack Task Manager website built for the Web Technologies CSC-251 University Assignment.

**Student:** Adan  
**Roll No:** 1006  
**University:** PMAS Arid Agriculture University Rawalpindi

## 🚀 Tech Stack

*   **Backend:** Node.js + Express.js
*   **Database:** MongoDB Atlas (Mongoose)
*   **Frontend:** HTML5 + Bootstrap 5 + Vanilla JavaScript
*   **Deployment:** Render.com

## 📑 API Routes Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/tasks` | Get all tasks (sorted by newest first) |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/:id` | Update a task's status by ID |
| `DELETE` | `/api/tasks/:id` | Delete a task by ID |

## 🛠️ Deployment Steps

1.  **Push code to GitHub:** Create a new repository and push all files (ensure `node_modules` and `.env` are in `.gitignore`).
2.  **Go to Render.com:** Sign in and click **New Web Service**.
3.  **Connect Repo:** Connect your GitHub account and select the repository.
4.  **Configure Build:**
    *   Build Command: `npm install`
    *   Start Command: `node server.js`
5.  **Environment Variables:** Add `MONGO_URI` with your MongoDB Atlas connection string.
6.  **Deploy:** Click **Create Web Service** and wait for the build to finish.

## 📝 Short Report

**Learning resources used:**
*   Node.js official docs (nodejs.org)
*   Express.js official docs (expressjs.com)
*   MongoDB Atlas docs
*   YouTube tutorials for REST API best practices
*   Bootstrap 5 docs for UI components

## ⚙️ How to Run Locally

1.  Clone the repository.
2.  Run `npm install` to install dependencies.
3.  Create a `.env` file with `MONGO_URI` and `PORT`.
4.  Run `npm run dev` to start the development server.
