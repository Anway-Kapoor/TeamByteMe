# Student Team Members Management Application

A full-stack web application that allows users to manage student profiles, assign them to teams, and perform essential CRUD operations. This project was developed as part of the SRM Full Stack Development assessment.

## 🔧 Tech Stack

### Frontend:
- React.js
- React Router DOM
- Axios
- CSS

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Body-Parser
- dotenv

### Tools & Platforms:
- Visual Studio Code
- MongoDB Atlas (Cloud Database)
- Git & GitHub
- Postman (for API testing)
- Google Chrome (for testing frontend)

---

## ✨ Features

- View all student members.
- Add new student members.
- Edit existing student member details.
- Delete student members.
- View detailed information of individual members.
- Seamless frontend-backend integration using RESTful APIs.

---

## 🚀 Live Demo

Since the project runs locally, access it using the following local URLs after setup:

- Home: [http://localhost:3000/](http://localhost:3000/)
- Add Member: [http://localhost:3000/add](http://localhost:3000/add)
- View Members: [http://localhost:3000/view](http://localhost:3000/view)
- Individual Member Views:
  - [Member 1](http://localhost:3000/member/6813c30dc4b170b02a1ba9ce)
  - [Member 2](http://localhost:3000/member/6813c36cc4b170b02a1ba9dc)
  - [Member 3](http://localhost:3000/member/6813c391c4b170b02a1ba9e4)

---

## ⚙️ Installation & Setup Instructions

### Prerequisites:
- Node.js and npm
- MongoDB Atlas account
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Anway-Kapoor/TeamByteMe.git

2. Backend Setup
cd backend
npm install

Create a .env file inside the backend directory with the following:
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000

npm start

The backend server should now run on: http://localhost:5000/

3. Frontend Setup
cd ../frontend
npm install
npm start

The frontend should now run on: http://localhost:3002/


