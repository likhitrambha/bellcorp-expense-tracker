
💰 Bellcorp Personal Expense Tracker

A secure and scalable full-stack web application that allows users to manage daily financial transactions efficiently.
Users can register, log in, add expenses, filter transactions, and visualize spending insights through an interactive dashboard.

🔗 Project Links

🌐 Live Application:
https://bellcorp-expense-tracker-ecru.vercel.app/login

💻 GitHub Repository:
https://github.com/likhitrambha/bellcorp-expense-tracker.git

🎥 Project Demo Video:
https://drive.google.com/file/d/1hZLOn9eD7XN75LbcuwSJVAJ_Zpr__GR4/view

🚀 Technology Stack
Frontend

React.js

React Router

Axios

CSS / Dark Theme UI

Backend

Node.js

Express.js

RESTful API Architecture

Database

MongoDB Atlas

Mongoose

Authentication

JSON Web Tokens (JWT)

Bcrypt (Password Hashing)

🔐 Key Features

User Registration & Secure Login

Protected Routes with JWT Authentication

Add, Edit, and Delete Transactions

Filter Transactions by:

Type (Income / Expense)

Date Range

Pagination using “Load More” functionality

Dashboard with Chart-Based Analytics

Dark Theme User Interface

Responsive Design

📊 Dashboard Capabilities

Total Expense Calculation

Category-based Expense Breakdown

Visual Graph Representation

Financial Activity Tracking

📁 Project Structure
bellcorp-expense-tracker/
│
├── frontend/          # React Application
│
├── backend/           # Node + Express Server
│   ├── DB/
│   ├── Models/
│   ├── Routers/
│   └── config/
⚙️ Installation & Local Setup
1️⃣ Clone the Repository
git clone https://github.com/likhitrambha/bellcorp-expense-tracker.git
cd bellcorp-expense-tracker
2️⃣ Backend Setup
cd backend
npm install

Create a file:

backend/config/config.env

Add:

PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:

npm run dev

Backend runs on:

http://localhost:5000
3️⃣ Frontend Setup
cd frontend
npm install
npm start

Frontend runs on:

http://localhost:3000
🔌 API Endpoints
Authentication

POST /api/auth/register

POST /api/auth/login

Transactions

POST /api/v1/addTransaction

GET /api/v1/getTransaction

PUT /api/v1/updateTransaction

DELETE /api/v1/deleteTransaction

🌍 Deployment

Frontend deployed on Vercel

Backend deployed on Render

Database hosted on MongoDB Atlas

🎯 Project Objective

The goal of this project is to demonstrate practical implementation of:

Full-Stack Development

REST API Integration

Secure Authentication

Database Management

State Management

Scalable Architecture

Cloud Deployment

