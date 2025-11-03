# 🍽️ Fastor React.js Assignment

## 🧠 Overview
This project was developed as part of the **Final Round - React.js Developer** assignment for **Fastor**.  
It is a responsive, modern web application built using **React + Vite + Tailwind CSS**, focusing on a clean UI and functional interactivity.

---

## 🚀 Features

### 🔐 Authentication
- **Login Page:** Users enter their mobile number to proceed.
- **OTP Verification:** Verify with a static OTP → `123456`.

### 🍴 Restaurant Discovery
- **Restaurant List:** Displays a list of restaurants using a mock REST API.
- **Restaurant Details:** Clicking on a restaurant opens a detail page.

### 🖼️ Image Superimposing & Sharing
- Displays the restaurant image in the center.
- Superimposes the **Fastor logo** at the center.
- Allows users to **share the generated image** using the browser’s share API.
- *(Bonus Feature)* Users can **drag and reposition the logo** anywhere on the restaurant image.

---

## 🧩 Tech Stack

| Category | Tools Used |
|-----------|-------------|
| **Frontend Framework** | React (Vite) |
| **Styling** | Tailwind CSS |
| **Routing** | React Router DOM |
| **Image Handling** | HTML Canvas API |
| **Mock API** | Local mock data (Simulated REST API) |

---

## 📁 Folder Structure

fastor-app/
│
├── public/
│ └── fastor-logo.png # Fastor logo for overlay
│
├── src/
│ ├── api/
│ │ ├── mockData.js # Mock restaurant data
│ │ └── apiService.js # Fetch functions (simulated)
│ │
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── InputField.jsx
│ │ └── RestaurantCard.jsx
│ │
│ ├── pages/
│ │ ├── Login.jsx # Login with mobile number
│ │ ├── Otp.jsx # OTP verification (123456)
│ │ ├── RestaurantList.jsx # List of restaurants
│ │ └── RestaurantDetail.jsx # Image superimposing & share
│ │
│ ├── App.jsx # Main routes
│ ├── main.jsx # React root render
│ └── index.css # Tailwind import & base styles
│
├── tailwind.config.js
├── package.json
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/fastor-app.git
cd fastor-app

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev


Application will start at → http://localhost:5173

🧾 Credentials for Testing
Field	Value
Mobile Number	Any valid 10-digit number
OTP	123456
📱 Bonus Features

Fully Progressive Web App (PWA) ready.

Dynamic Logo Repositioning — drag & move the Fastor logo.

Web Share API integration — share generated images directly from the browser.

Modern Tailwind + React design with smooth transitions.

🎨 Screens (Preview)