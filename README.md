# Onboardy

## 📋 Description

A simple onboarding system for companies to validate and collect their information.

---

## 🚀 Technologies

### Backend

- **Node.js** - JavaScript Runtime
- **Express.js** - Minimalist web framework
- **JWT (jsonwebtoken)** - Authentication and authorization
- **Morgan** - HTTP request logger middleware
- **dotenv** - Environment variable management

### Frontend

- **React 19** - UI Library
- **Vite** - Build tool and dev server
- **HeroUI** - Modern and accessible UI components
- **React Router DOM** - Routing
- **React Hook Form** - Form management
- **Tailwind CSS** - CSS utilities
- **Phosphor Icons** - Icon library

### Development Tools

- **pnpm** - Monorepo package manager
- **ESLint** - JavaScript linter
- **Prettier** - Code formatter

---

## 📦 Prerequisites

Before installing Onboardy, make sure you have:

- **Node.js** >= 20.x
- **pnpm** >= 8.x

---

## 🔧 Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/yeomfa/onboardy.git
cd onboardy
```

### 2. Install dependencies

```bash
# Install all monorepo dependencies (backend and frontend)
pnpm install
```

### 3. Configure environment variables

#### Backend

Create a `.env` file in `apps/backend/`:

```env
PORT=3000
NODE_ENV=development
JWT_SECRET=your_secret_key_here
```

### 4. Start application

```bash
pnpm dev
# Server will be available at http://localhost:3000
# Application will be available at http://localhost:5173
```

---

## 👤 Author

**Omar Fandiño**  
📧 [omaryesidfa@gmail.com](mailto:omaryesidfa@gmail.com)  
🌐 [yeomfa.me](https://yeomfa.me)
