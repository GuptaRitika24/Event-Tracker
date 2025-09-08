# 🗓️ Mini Event Tracker (Local Setup)

This is a **Mini Event Tracker** web application that allows users to **register, login, create events, and view them (all/upcoming/past)**.  
It also provides **sharable public event links**.

⚠️ **Note**: This setup guide is for running the project **locally** on your system.  
The project is not deployed on any server or cloud service.

---

## 🚀 Features
- User authentication (Register/Login with JWT)
- Create, view, and manage events
- Filter events: **All / Upcoming / Past**
- Shareable event links (public view without login)
- Modern styled frontend (React + CSS)
- Secure backend APIs (Node.js + Express + JWT)
- MongoDB database for data storage

---

## 🛠️ Tech Stack
### Frontend:
- React.js (React Router, Context API)
- Axios for API calls
- CSS for styling

### Backend:
- Node.js + Express
- JWT for authentication
- MongoDB + Mongoose for database

---
## 📂 Project Structure


Event-Tracker/
│── backend/ # Express.js + MongoDB API
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── server.js # Backend entry point
│ └── .env # Local environment variables
│
│── frontend/ # React.js client
│ ├── src/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── style/
│ │ └── App.js
│ 

## ⚙️ Setup Instructions (Local)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/mini-event-tracker.git
cd Event-Tracker


2. Backend Setup (Express + MongoDB)

Go into backend folder:

cd backend


Install dependencies:

npm install
npm install express mongoose bcryptjs jsonwebtoken cors dotenv
npm install nodemon --save-dev

Create a .env file inside backend/ with:

PORT=5000
MONGO_URI=mongodb://localhost:27017/event-tracker

Start backend server:

npm start

Backend will run on http://localhost:5000

3. Frontend

Use React:
npx create-react-app .
# or for Next.js
npx create-next-app .

Install axios or fetch for API calls:

npm install axios react-router-dom


4️⃣ Open in Browser

Frontend: http://localhost:3000

Backend API: http://localhost:5000/api

👨‍💻 Usage Flow

Register a new user (/register)

Login (/login) → JWT token stored in context

Go to Dashboard → Create Events

Filter: All / Upcoming / Past

Copy Share Event Link → Opens event in public view

✅ Example Screenshots

🔑 Login / Register Page

📋 Dashboard with Event List

🎉 Event Card with Share Link(with Local url)

Event CRUD APIs

POST /events → Create event

GET /events → List all user events

GET /events/:id → Get event details (protected)

GET /events/upcoming → Filter upcoming events

GET /events/past → Filter past events

Optional: /events/share/:shareId → Public access

Frontend Pages

Auth Pages

Register page → call /auth/register

Login page → call /auth/login and store JWT in localStorage

Dashboard

Display list of user events

Filter buttons: Upcoming / Past

“Create Event” button

Event Form

Fields: Title, Date & Time, Location, Description

On submit → POST /events with JWT

Event Detail Page

Show event info

Optional: public share link view

📝 Notes

This is a local system setup only, not deployed online.

Make sure MongoDB is running locally before starting backend.

Both frontend (3000) and backend (5000) must be running together.

👤 Author

Developed by Ritika Gupta 🚀
