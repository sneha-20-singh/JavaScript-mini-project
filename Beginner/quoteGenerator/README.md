

# 📜 API Based Quote Generator

A simple and responsive **Quote Generator web application** that fetches random quotes from a public REST API and displays them dynamically using **HTML, CSS, and JavaScript**.

---

## 🚀 Features

- Fetches random quotes using a **REST API**
- Displays quote and author dynamically
- Error handling for API failures
- Clean and responsive UI
- One-click generation of new quotes
- Lightweight and fast

---

## 🛠️ Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling
- **JavaScript (ES6)** – Logic & API handling
- **Fetch API** – API requests

---

## 🌐 API Used

**DummyJSON Quotes API**

[https://dummyjson.com/quotes/random](https://dummyjson.com/quotes/random)

Sample API Response:
json
{
  "quote": "Life is what happens when you're busy making other plans.",
  "author": "John Lennon"
}
---

## ⚙️ How It Works

1. User clicks the **“New Quote”** button
2. JavaScript sends a request using `fetch()`
3. API returns quote data in JSON format
4. Quote and author are extracted
5. Data is displayed dynamically on the webpage
6. Errors are handled using `try...catch`

---

## 📁 Project Structure

quote-generator/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

## ▶️ How to Run the Project

### Using Live Server 

1. Open project in **VS Code**
2. Install **Live Server extension**
3. Right-click `index.html`
4. Click **Open with Live Server**

---

## 🧠 JavaScript Logic (Summary)

* Uses `async/await` for asynchronous API calls
* Parses JSON response using `.json()`
* Dynamically updates DOM using `innerHTML`
* Implements error handling for network issues

---

## 🎓 Use Case

* Final year mini project
* JavaScript practice project
* API integration demo
* Portfolio project

---

## 👩‍💻 Author

Sneha Singh

Beginner Web Developer
---

⭐ This project is created for learning and practice purposes.
