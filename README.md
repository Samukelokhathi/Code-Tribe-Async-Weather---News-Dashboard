
# 🌤️ Async Weather & News Dashboard

<img src="https://socialify.git.ci/Samukelokhathi/Code-Tribe-Async-Weather---News-Dashboard/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Code-Tribe-Async-Weather---News-Dashboard" width="640" height="320" />

A TypeScript project designed to demonstrate asynchronous programming and the JavaScript event loop through a weather and news dashboard.

The project explores different asynchronous programming styles, including callbacks, promises, and async/await, while working with external APIs to retrieve weather information and news headlines.

This project was built as part of my CodeTribe learning journey to strengthen my understanding of JavaScript asynchronous operations, API communication, and backend programming concepts.

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Samukelokhathi/Code-Tribe-Async-Weather---News-Dashboard.git
```

### Navigate into the Project

```bash
cd Code-Tribe-Async-Weather---News-Dashboard
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file if your project requires API credentials.

Example:

```env
VISUAL_CROSSING_API_KEY=your_api_key_here
```

> Never commit API keys or other sensitive credentials to GitHub.

### Run the Project

Use the development script configured in your `package.json`.

```bash
npm run dev
```

> **Note:** Check your `package.json` for the exact available scripts and API configuration required by your implementation.

## ✨ Features

* 🌤️ Fetch weather information from an external API
* 📰 Fetch news headlines from a news API
* 🔄 Demonstrate callback-based asynchronous programming
* ⚡ Demonstrate Promises
* 🚀 Demonstrate async/await
* 🧠 Explore the JavaScript event loop
* 🌐 Work with API requests
* ⚠️ Practice error handling
* 🔗 Work with multiple asynchronous operations
* 📊 Process API responses
* 🧪 Test API functionality
* 📘 Use TypeScript for development

## 🔄 Asynchronous Programming

This project demonstrates three different approaches to handling asynchronous operations in JavaScript.

### 1. Callbacks

Callbacks allow a function to be passed into another function and executed after an asynchronous operation completes.

```text
Start Operation
      │
      ▼
Perform API Request
      │
      ▼
Callback Executes
      │
      ▼
Handle Response
```

### 2. Promises

Promises represent the eventual completion or failure of an asynchronous operation.

```text
Pending
   │
   ├── Fulfilled ✅
   │
   └── Rejected ❌
```

### 3. Async / Await

Async/await provides a way to write asynchronous code in a style that is easier to read and follow.

```text
Start Function
      │
      ▼
Await API Response
      │
      ▼
Receive Data
      │
      ▼
Handle Result
      │
      ▼
Catch Errors
```

## 🌐 API Integration

The dashboard is designed to work with external APIs to retrieve weather and news information.

### Weather API

The project uses Visual Crossing Weather API for weather data.

Weather information may include:

* 🌡️ Temperature
* 🌤️ Weather conditions
* 📍 Location information
* 📅 Forecast data

### News API

The project includes a news headline retrieval feature.

The exact news provider and available response fields depend on the API implemented in the source code.

## 🧠 JavaScript Event Loop

One of the main learning objectives of this project is understanding how JavaScript handles asynchronous operations.

```text
        JavaScript Runtime
               │
       ┌───────┴────────┐
       │                │
   Call Stack       Web APIs
       │                │
       └───────┬────────┘
               │
        Callback Queue
               │
               ▼
          Event Loop
               │
               ▼
          Call Stack
```

The event loop helps coordinate when asynchronous callbacks can be processed by the JavaScript runtime.

## 🛠️ Technologies Used

* TypeScript
* JavaScript
* Node.js
* Visual Crossing Weather API
* News API
* Fetch API
* Promises
* Async / Await
* Callbacks
* npm
* Git & GitHub

## 📚 What I Learned

During this project, I practiced:

* Understanding synchronous and asynchronous programming
* Working with callbacks
* Creating and handling Promises
* Using async/await
* Handling errors using try/catch
* Fetching data from external APIs
* Working with asynchronous API requests
* Understanding the JavaScript event loop
* Using TypeScript for asynchronous functions
* Structuring project files
* Managing API responses
* Improving my backend development knowledge
* Using Git and GitHub to manage my project

## 📁 Project Structure

```text
Code-Tribe-Async-Weather---News-Dashboard/
├── src/
│   ├── async.ts
│   ├── callback.ts
│   └── promise.ts
├── package.json
├── tsconfig.json
└── README.md
```

> Update this structure if your repository contains additional files or folders.

## ⚡ Async Operations Flow

```text
          USER REQUEST
                │
                ▼
       Fetch Weather Data
                │
                ▼
        Fetch News Data
                │
                ▼
       Process API Results
                │
                ▼
       Handle Errors
                │
                ▼
       Display Information
```

## 🎯 Project Goals

The main goals of this project are to:

* Strengthen my understanding of asynchronous JavaScript
* Learn how the event loop works
* Practice different asynchronous programming styles
* Work with external APIs
* Improve error handling
* Develop stronger TypeScript skills
* Build a foundation for backend development

## 📖 My Learning Journey

This project forms part of my transition from frontend development into backend development.

My current learning focus includes:

```text
JavaScript
    ↓
TypeScript
    ↓
Callbacks
    ↓
Promises
    ↓
Async / Await
    ↓
API Communication
    ↓
Node.js
    ↓
Backend Development
    ↓
Full-Stack Development 🚀
```

## 🧪 Testing

I practice testing API functionality and checking how asynchronous operations handle successful responses and errors.

Testing may include:

* API request handling
* Successful responses
* Failed requests
* Error handling
* Weather data retrieval
* News data retrieval

## 🔗 Project Links

* 🔗 **GitHub Repository:** https://github.com/Samukelokhathi/Code-Tribe-Async-Weather---News-Dashboard
* 🔗 **GitHub Profile:** https://github.com/Samukelokhathi

