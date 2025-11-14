# Quick Start Guide

Follow these steps to get your app running locally and deployed.

## 🚀 Quick Local Setup (5 minutes)

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Set Up Database

**Option A: Use Supabase (Easiest)**
1. Go to https://supabase.com and create a free account
2. Create a new project
3. Copy the connection string from Settings > Database
4. Create `.env` file in backend folder:

```bash
# backend/.env
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT].supabase.co:5432/postgres"
JWT_SECRET="your-super-secret-jwt-key-at-least-32-characters-long-please"
PORT=5000
NODE_ENV=development
FRONTEND_URL="http://localhost:3000"
```

**Option B: Use Local PostgreSQL**
```bash
# backend/.env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/authdb"
JWT_SECRET="your-super-secret-jwt-key-at-least-32-characters-long-please"
PORT=5000
NODE_ENV=development
FRONTEND_URL="http://localhost:3000"
```

### 3. Run Database Migrations

```bash
# Still in backend folder
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Start Backend

```bash
npm run dev
```

Backend should now be running on http://localhost:5000

### 5. Install Frontend Dependencies

Open a new terminal:

```bash
cd frontend
npm install
```

### 6. Configure Frontend

Create `.env.local` file in frontend folder:

```bash
# frontend/.env.local
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 7. Start Frontend

```bash
npm run dev
```

Frontend should now be running on http://localhost:3000

### 8. Test the App

1. Open http://localhost:3000
2. Click "Sign Up"
3. Create an account (try both User and Admin roles)
4. Log in
5. View your dashboard

## 🌐 Deploy to Production (15 minutes)

### Prerequisites
- GitHub account
- Push your code to GitHub first

### Step 1: Deploy Database (2 min)
1. Go to https://supabase.com
2. Create new project
3. Copy connection string

### Step 2: Deploy Backend to Render (5 min)
1. Go to https://render.com
2. Sign up with GitHub
3. New Web Service → Connect your repo
4. Settings:
   - Root Directory: `backend`
   - Build: `npm install && npx prisma generate && npm run build`
   - Start: `npm start`
5. Add environment variables:
   ```
   DATABASE_URL=<from-supabase>
   JWT_SECRET=<generate-random-32-chars>
   PORT=5000
   NODE_ENV=production
   FRONTEND_URL=https://your-app.vercel.app
   ```
6. Deploy and copy your backend URL

### Step 3: Deploy Frontend to Vercel (5 min)
1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Settings:
   - Root Directory: `frontend`
5. Add environment variable:
   ```
   NEXT_PUBLIC_API_URL=<your-render-backend-url>
   ```
6. Deploy and copy your frontend URL

### Step 4: Update Backend CORS (2 min)
1. Go back to Render
2. Update `FRONTEND_URL` with your Vercel URL
3. Redeploy

### Step 5: Run Migrations (1 min)
1. In Render dashboard, go to Shell
2. Run: `npx prisma migrate deploy`

## ✅ Verification Checklist

- [ ] Backend running locally on port 5000
- [ ] Frontend running locally on port 3000
- [ ] Can sign up new user
- [ ] Can log in
- [ ] Dashboard shows user info
- [ ] Can log out
- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] Production signup works
- [ ] Production login works
- [ ] Production dashboard works

## 🐛 Common Issues

**"Cannot connect to database"**
- Check DATABASE_URL is correct
- Verify database is running
- Check firewall/network settings

**"JWT_SECRET not defined"**
- Make sure .env file exists
- Check JWT_SECRET is set
- Restart the server

**"CORS error"**
- Verify FRONTEND_URL in backend .env
- Check NEXT_PUBLIC_API_URL in frontend .env.local
- Restart both servers

**"Module not found"**
- Run `npm install` in the correct directory
- Delete node_modules and reinstall
- Check you're in the right folder (backend or frontend)

## 📝 Next Steps

After successful deployment:
1. Update README.md with your deployed URLs
2. Test all features in production
3. Share your GitHub repo link
4. Add custom domain (optional)
5. Set up monitoring (optional)

## 🆘 Need Help?

1. Check the full DEPLOYMENT_GUIDE.md
2. Review error logs in terminal
3. Check browser console for frontend errors
4. Verify all environment variables are set
5. Make sure you're using Node.js 18+

## 🎉 Success!

If everything works, you should have:
- ✅ Working local development environment
- ✅ Deployed backend on Render
- ✅ Deployed frontend on Vercel
- ✅ Full authentication flow working
- ✅ Role-based access control

Congratulations! Your full-stack app is live! 🚀
