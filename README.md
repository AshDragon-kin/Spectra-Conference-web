# SPECTRA Conference Web Application

## Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Local Development](#local-development)
  - [Editing in GitHub](#editing-in-github)
  - [Using GitHub Codespaces](#using-github-codespaces)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Methodologies](#methodologies)
- [Full Project Documentation](#full-project-documentation)

---

## Project Overview
SPECTRA Conference is a modern, full-stack web application for managing and promoting an assistive technology conference. It features user authentication, admin management, a donation system with payment gateway integration, and a responsive, accessible UI.

---

## Getting Started

### Local Development

1. **Clone the repository:**
   ```sh
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the frontend development server:**
   ```sh
   npm run dev
   ```
4. **Start the backend server:**
   ```sh
   cd server
   npm install
   npm run dev
   ```

### Editing in GitHub
- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

### Using GitHub Codespaces
- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

---

## Technologies Used
- **Frontend:**
  - Vite
  - React (TypeScript)
  - shadcn-ui (UI components)
  - Tailwind CSS (utility-first CSS framework)
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - Nodemailer (for email verification)
  - Razorpay (for payment gateway integration)
- **Other:**
  - JWT (JSON Web Tokens) for authentication
  - dotenv for environment variable management

---

## API Endpoints
- **User Authentication:**
  - `POST /api/signup` — Register a new user (with email verification)
  - `POST /api/login` — User login
  - `GET /api/verify-email` — Email verification
- **Admin:**
  - `GET /api/admin/users` — List all users
  - `PUT /api/admin/users/:userId/block` — Block/unblock a user
  - `PUT /api/admin/users/:userId/star` — Star/unstar a user
- **Donations:**
  - `POST /api/create-order` — Create a Razorpay order for donations

---

## Methodologies
- **Component-based architecture:** All UI is built using reusable React components.
- **RESTful API design:** Backend endpoints follow REST principles for clarity and scalability.
- **Authentication & Authorization:** JWT-based authentication, with admin route protection on both frontend and backend.
- **Responsive & Accessible UI:** Built with Tailwind CSS and shadcn-ui for modern, accessible design.
- **Environment-based configuration:** Uses `.env` files for secrets and environment-specific settings.
- **Payment Integration:** Secure payment flow using Razorpay, with backend order creation and frontend checkout.

---

## Full Project Documentation

### How It Is Built
- The project is a full-stack web application with a React frontend and an Express/MongoDB backend.
- The frontend is bootstrapped with Vite for fast development and uses TypeScript for type safety.
- UI is styled with Tailwind CSS and shadcn-ui components for a modern, accessible look.
- The backend uses Express.js for routing, Mongoose for MongoDB data modeling, and JWT for authentication.
- Email verification is handled via Nodemailer.
- Donations are processed securely using Razorpay's payment gateway.

### Technologies Used
- **Frontend:** Vite, React, TypeScript, Tailwind CSS, shadcn-ui
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, Nodemailer.
- **Tooling:** dotenv, npm scripts, GitHub Codespaces

### APIs Used
- **Custom REST API:** For user authentication, admin management, and donation order creation.
- **Razorpay API:** For payment processing (order creation and checkout flow).
- **Nodemailer:** For sending verification emails.

### Methodologies
- **Separation of concerns:** Clear separation between frontend and backend logic.
- **Security:** Passwords are hashed, JWTs are used for session management, and CORS is configured for safe cross-origin requests.
- **Scalability:** RESTful API design and modular code structure make it easy to extend features.
- **Accessibility:** UI components and layouts are designed to be accessible and responsive.

### Project Structure
- `/src` — Frontend source code (React, UI, pages, components)
- `/server` — Backend source code (Express, MongoDB, API routes)
- `/public` — Static assets and HTML template

### Running the Project
1. Clone the repository and install dependencies for both frontend and backend.
2. Set up your `.env` files for both frontend and backend (see sample `.env` in `/server`).
3. Start the backend server (`npm run dev` in `/server`).
4. Start the frontend server (`npm run dev` in the root directory).
5. Access the app in your browser (default: `http://localhost:8080`).

### Contribution
- Fork the repo, create a branch, and submit a pull request for review.
- Please follow the code style and commit message conventions.

### License
This project is open source and available under the [MIT License](LICENSE).