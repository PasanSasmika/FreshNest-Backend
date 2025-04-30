# 🧼 FreshNest – Backend

This is the **backend server** for **FreshNest**, a modern Cleaning Service Management System. Built using **Node.js**, **Express**, and **MongoDB**, it provides RESTful APIs for handling customer bookings and cleaning service types.

🔗 **Live Demo (Frontend):** [https://fresh-nest-frontend.vercel.app](https://fresh-nest-frontend.vercel.app/)  
🔗 **Frontend Repository:** [https://github.com/PasanSasmika/FreshNest-Frontend](https://github.com/PasanSasmika/FreshNest-Frontend)

⚙️ *Note: Backend is hosted on Render. It may take a few seconds to respond due to cold starts.*

---

## 📦 Tech Stack

- **Backend Framework:** Node.js + Express
- **Database:** MongoDB (via Mongoose)
- **Hosting:** Render
- **CORS Enabled**: Yes

---


## 🚀 Getting Started (Local Setup)

### 1. Clone the repository
```bash
git clone https://github.com/PasanSasmika/FreshNest-Backend.git
cd FreshNest-Backend
2. Install dependencies

npm install
3. Create a .env file
You need to create your own .env file in the root directory with the following content:

env
MONGO_URL=your_mongodb_connection_string
SECRET=your_secret_key
Replace your_mongodb_connection_string with your actual MongoDB URI.
Replace your_secret_key with a secure secret for token signing (used for authentication if applicable).

4. Start the development server

npm start
Server will be running at: http://localhost:5000

✅ Features
RESTful APIs for full CRUD operations

MongoDB with Mongoose integration

Secure environment variable usage

CORS support for frontend-backend communication

Admin and customer functionality support

👨‍💻 Author
Developed by: Pasan Sasmika
Frontend Repo: https://github.com/PasanSasmika/FreshNest-Frontend
GitHub: https://github.com/PasanSasmika

