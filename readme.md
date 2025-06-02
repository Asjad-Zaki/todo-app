# 📝 MERN Todo App

A full-stack Todo application built with **MongoDB**, **Express**, **React**, and **Node.js**.

---

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Asjad-Zaki/todo-app.git
   ```

2. **Install dependencies**

   - **Frontend**
     ```bash
     cd frontend
     npm install
     ```

   - **Backend**
     ```bash
     cd ../backend
     npm install
     ```

---

## ⚙️ Configuration

1. **Create a `.env` file in the `backend` directory:**

   ```env
   MONGO_URI=Your mongodb URI
   GMAIL_USERNAME=your gmail address
   GMAIL_PASSWORD=password created inside 'App Password' section under google accounts setting
   PORT=8000
   JWT_SECRET=a random secret key eg. thisisasecretkey
   ```

---

## 🏃‍♂️ Run the App

- **Start the backend server**
  ```bash
  cd backend
  nodemon server
  ```

- **Start the frontend app**
  ```bash
  cd ../frontend
  npm start
  ```

---

## 📚 Features

- User authentication (register/login)
- Add, edit, and delete todos
- Mark todos as completed
- Email notifications (via Gmail)
- Responsive UI

---

## 🛠️ Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT
- **Email:** Nodemailer (Gmail)

---

## 💡 Notes

- For Gmail integration, enable [App Passwords](https://myaccount.google.com/apppasswords) in your Google Account.
- Make sure MongoDB URI does **not** include a port if using `mongodb+srv://`.

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).

---

> Made with ❤️ by [Asjad Zaki](https://github.com/Asjad-Zaki)
