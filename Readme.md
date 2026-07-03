# javascript backend projecj

# 🚀 JS Backend

A scalable backend application built with **Node.js**, **Express.js**, and **MongoDB**. This project provides RESTful APIs with authentication, database integration, and follows a clean, modular architecture for maintainability and scalability.

## ✨ Features

* 🔐 User Authentication & Authorization
* 🗄️ MongoDB Database Integration
* ⚡ RESTful API Architecture
* 🍪 JWT Authentication
* 🌐 CORS Support
* 📂 Modular Project Structure
* 🔒 Environment Variable Configuration
* 📦 Error Handling Middleware
* 📄 CRUD Operations

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Cookie Parser
* CORS
* dotenv

## 📁 Project Structure

```text
js-backend/
│── public/
│── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── db/
│   ├── app.js
│   └── index.js
│
├── .env
├── package.json
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/krishnasharma0101k/js-backend.git
```

### 2. Navigate to the project

```bash
cd js-backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=10d

CORS_ORIGIN=http://localhost:5173
```

### 5. Start the development server

```bash
npm run dev
```

## 🚀 API Endpoints

Example endpoints:

```http
POST   /api/v1/users/register
POST   /api/v1/users/login
POST   /api/v1/users/logout

GET    /api/v1/users/current-user
PATCH  /api/v1/users/update-account

GET    /api/v1/products
POST   /api/v1/products
PUT    /api/v1/products/:id
DELETE /api/v1/products/:id
```

> Replace these endpoints with your actual routes.

## 🔒 Authentication

This project uses **JWT (JSON Web Tokens)** for authentication.

* Access Token
* Refresh Token
* Protected Routes
* Password Hashing using bcrypt

## 📌 Scripts

```bash
npm run dev
npm start
```

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## 👨‍💻 Author

**Krishna Sharma**

GitHub: https://github.com/krishnasharma0101k

---

⭐ If you found this project helpful, consider giving it a star!
