# Role-Based Authentication App

A full-stack web application with role-based authentication featuring User and Admin roles. Built with Next.js, Express, PostgreSQL, and JWT authentication.

## 🚀 Features

- User registration with role selection (User or Admin)
- Secure login with JWT authentication
- Password hashing with bcrypt
- Protected dashboard with role-specific display
- Responsive UI with TailwindCSS
- TypeScript for type safety
- Form validation with Zod and React Hook Form

## 🛠️ Technology Stack

### Backend
- Node.js with Express
- TypeScript
- PostgreSQL with Prisma ORM
- bcrypt for password hashing
- jsonwebtoken for JWT authentication
- express-validator for request validation

### Frontend
- Next.js 14 with App Router
- TypeScript
- TailwindCSS for styling
- Axios for API requests
- React Hook Form + Zod for form validation
- Context API for state management

## 📋 Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (or use Supabase/Neon free tier)
- Git

## 🔧 Local Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <repo-name>
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env and add your database URL and JWT secret
# DATABASE_URL="postgresql://user:password@localhost:5432/authdb"
# JWT_SECRET="your-super-secret-jwt-key-min-32-characters-long"

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Edit .env.local and set the API URL
# NEXT_PUBLIC_API_URL=http://localhost:5000

# Start development server
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🌐 Deployment

### Backend Deployment (Render/Railway)

1. Create a PostgreSQL database on Supabase or Neon
2. Create a new Web Service on Render or Railway
3. Connect your GitHub repository
4. Set environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `JWT_SECRET`: A secure random string (min 32 characters)
   - `PORT`: 5000
   - `NODE_ENV`: production
   - `FRONTEND_URL`: Your deployed frontend URL

5. Build command: `npm install && npx prisma generate && npm run build`
6. Start command: `npm start`
7. After deployment, run migrations: `npx prisma migrate deploy`

### Frontend Deployment (Vercel)

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Set the root directory to `frontend`
4. Set environment variable:
   - `NEXT_PUBLIC_API_URL`: Your deployed backend URL

5. Deploy!

## 📚 API Endpoints

### POST /auth/signup
Create a new user account

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "USER"
}
```

**Response:** `201 Created`
```json
{
  "message": "User created successfully",
  "user": {
    "id": "...",
    "email": "john@example.com",
    "name": "John Doe",
    "role": "USER"
  }
}
```

### POST /auth/login
Authenticate a user

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:** `200 OK`
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "email": "john@example.com",
    "name": "John Doe",
    "role": "USER"
  }
}
```

### GET /auth/me
Get current user information (requires authentication)

**Headers:**
```
Authorization: Bearer <token>
```

**Response:** `200 OK`
```json
{
  "user": {
    "id": "...",
    "email": "john@example.com",
    "name": "John Doe",
    "role": "USER"
  }
}
```

## 🔐 Security Features

- Passwords hashed with bcrypt (10 salt rounds)
- JWT tokens with 7-day expiration
- Protected routes with authentication middleware
- Input validation on both client and server
- CORS configuration
- Environment variables for sensitive data

## 📁 Project Structure

```
.
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── types/
│   │   ├── utils/
│   │   └── index.ts
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── lib/
│   │   └── types/
│   └── package.json
│
└── README.md
```

## 🧪 Testing

To test the application:

1. Sign up with a new account (choose User or Admin role)
2. Log in with your credentials
3. Access the dashboard to see your role-specific information
4. Try logging out and logging back in
5. Test with both User and Admin roles to see the differences

## 📝 License

This project is open source and available under the MIT License.

## 🔗 Deployed URLs

- **Frontend**: [Add your Vercel URL here]
- **Backend**: [Add your Render/Railway URL here]
