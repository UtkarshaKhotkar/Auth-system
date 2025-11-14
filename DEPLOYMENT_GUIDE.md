# Deployment Guide

This guide will walk you through deploying your full-stack authentication app to production.

## Prerequisites

- GitHub account
- Vercel account (for frontend)
- Render or Railway account (for backend)
- Supabase or Neon account (for PostgreSQL database)

## Step 1: Set Up Database

### Option A: Supabase (Recommended)

1. Go to [supabase.com](https://supabase.com) and sign up
2. Create a new project
3. Wait for the database to be provisioned
4. Go to Project Settings > Database
5. Copy the "Connection string" (URI format)
6. Replace `[YOUR-PASSWORD]` with your actual database password
7. Save this connection string for later

### Option B: Neon

1. Go to [neon.tech](https://neon.tech) and sign up
2. Create a new project
3. Copy the connection string provided
4. Save this for later

## Step 2: Deploy Backend

### Using Render

1. **Create Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure Service**
   - Name: `auth-backend` (or your choice)
   - Region: Choose closest to you
   - Branch: `main`
   - Root Directory: `backend`
   - Runtime: `Node`
   - Build Command: `npm install && npx prisma generate && npm run build`
   - Start Command: `npm start`

4. **Set Environment Variables**
   Click "Advanced" and add:
   ```
   DATABASE_URL=<your-postgres-connection-string>
   JWT_SECRET=<generate-a-random-32-char-string>
   PORT=5000
   NODE_ENV=production
   FRONTEND_URL=https://your-app.vercel.app
   ```

   To generate a secure JWT_SECRET, run in terminal:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Copy your backend URL (e.g., `https://auth-backend.onrender.com`)

6. **Run Database Migrations**
   - Go to your service dashboard
   - Click "Shell" tab
   - Run: `npx prisma migrate deploy`

### Using Railway (Alternative)

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables (same as Render)
6. Railway will auto-detect and deploy

## Step 3: Deploy Frontend

### Using Vercel

1. **Create Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `frontend`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Set Environment Variables**
   Add the following:
   ```
   NEXT_PUBLIC_API_URL=<your-backend-url>
   ```
   Example: `https://auth-backend.onrender.com`

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Copy your frontend URL (e.g., `https://your-app.vercel.app`)

6. **Update Backend CORS**
   - Go back to Render/Railway
   - Update the `FRONTEND_URL` environment variable with your Vercel URL
   - Redeploy the backend

## Step 4: Test Your Deployment

1. Visit your frontend URL
2. Click "Sign Up"
3. Create a test account with User role
4. Log in with your credentials
5. Verify you can see the dashboard
6. Log out and create another account with Admin role
7. Verify the Admin role displays correctly

## Step 5: Update README

Update the README.md file with your deployed URLs:

```markdown
## 🔗 Deployed URLs

- **Frontend**: https://your-app.vercel.app
- **Backend**: https://auth-backend.onrender.com
```

## Troubleshooting

### Backend Issues

**Database Connection Error**
- Verify DATABASE_URL is correct
- Check if database is running
- Ensure IP whitelist includes 0.0.0.0/0 (for Render/Railway)

**JWT Error**
- Ensure JWT_SECRET is set and at least 32 characters
- Check if environment variables are saved

**Build Fails**
- Check build logs in Render/Railway dashboard
- Verify all dependencies are in package.json
- Try running `npm install && npm run build` locally

### Frontend Issues

**API Connection Error**
- Verify NEXT_PUBLIC_API_URL is correct
- Check if backend is running
- Open browser console for error details

**Build Fails**
- Check build logs in Vercel dashboard
- Verify all dependencies are in package.json
- Try running `npm run build` locally

**CORS Error**
- Ensure FRONTEND_URL is set correctly in backend
- Redeploy backend after updating CORS settings

### Database Migration Issues

If migrations fail:
1. Go to Render/Railway shell
2. Run: `npx prisma migrate reset` (WARNING: deletes all data)
3. Run: `npx prisma migrate deploy`

Or manually run migrations:
```bash
npx prisma migrate dev --name init
```

## Environment Variables Checklist

### Backend (.env)
- [ ] DATABASE_URL
- [ ] JWT_SECRET (min 32 characters)
- [ ] PORT (5000)
- [ ] NODE_ENV (production)
- [ ] FRONTEND_URL

### Frontend (.env.local)
- [ ] NEXT_PUBLIC_API_URL

## Post-Deployment

1. Test all features thoroughly
2. Monitor error logs in Render/Vercel dashboards
3. Set up custom domain (optional)
4. Enable HTTPS (automatic on Vercel/Render)
5. Set up monitoring/analytics (optional)

## Continuous Deployment

Both Vercel and Render support automatic deployments:
- Push to `main` branch → Automatic deployment
- Pull requests → Preview deployments
- Rollback available in dashboard

## Cost

All services used have free tiers:
- Supabase: Free tier (500MB database)
- Neon: Free tier (3GB storage)
- Render: Free tier (750 hours/month)
- Railway: Free tier ($5 credit/month)
- Vercel: Free tier (unlimited deployments)

## Support

If you encounter issues:
1. Check service status pages
2. Review deployment logs
3. Check environment variables
4. Test locally first
5. Consult service documentation

## Next Steps

After successful deployment:
- Add custom domain
- Set up SSL certificates (automatic)
- Configure monitoring
- Add analytics
- Implement additional features
- Set up CI/CD pipeline
