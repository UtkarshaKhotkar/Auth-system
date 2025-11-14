# Deployment Checklist

Use this checklist to ensure successful deployment of your role-based authentication app.

## 📋 Pre-Deployment

### Code Preparation
- [ ] All code committed to Git
- [ ] Repository pushed to GitHub
- [ ] .gitignore files in place
- [ ] No sensitive data in code
- [ ] README.md completed

### Environment Files
- [ ] backend/.env.example exists
- [ ] frontend/.env.example exists
- [ ] .env files NOT committed to Git

## 🗄️ Database Setup

### Supabase (Recommended)
- [ ] Account created at supabase.com
- [ ] New project created
- [ ] Database password saved securely
- [ ] Connection string copied
- [ ] Connection string format: `postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres`

### Alternative: Neon
- [ ] Account created at neon.tech
- [ ] New project created
- [ ] Connection string copied

## 🔧 Backend Deployment (Render)

### Account Setup
- [ ] Render account created
- [ ] GitHub connected to Render

### Service Configuration
- [ ] New Web Service created
- [ ] Repository connected
- [ ] Root directory set to `backend`
- [ ] Build command: `npm install && npx prisma generate && npm run build`
- [ ] Start command: `npm start`
- [ ] Node version: 18 or higher

### Environment Variables
- [ ] DATABASE_URL set (from Supabase/Neon)
- [ ] JWT_SECRET generated (min 32 characters)
- [ ] PORT set to 5000
- [ ] NODE_ENV set to production
- [ ] FRONTEND_URL set (will update after frontend deployment)

### Deployment
- [ ] Service deployed successfully
- [ ] Build logs checked for errors
- [ ] Backend URL copied (e.g., https://your-app.onrender.com)
- [ ] Health check endpoint working: `https://your-backend-url/health`

### Database Migrations
- [ ] Shell accessed in Render dashboard
- [ ] Command run: `npx prisma migrate deploy`
- [ ] Migrations completed successfully
- [ ] No error messages

## 🎨 Frontend Deployment (Vercel)

### Account Setup
- [ ] Vercel account created
- [ ] GitHub connected to Vercel

### Project Configuration
- [ ] Repository imported
- [ ] Framework preset: Next.js (auto-detected)
- [ ] Root directory set to `frontend`
- [ ] Build command: `npm run build` (default)
- [ ] Output directory: `.next` (default)

### Environment Variables
- [ ] NEXT_PUBLIC_API_URL set to backend URL
- [ ] Format: `https://your-backend.onrender.com` (no trailing slash)

### Deployment
- [ ] Project deployed successfully
- [ ] Build logs checked for errors
- [ ] Frontend URL copied (e.g., https://your-app.vercel.app)
- [ ] Site loads without errors

## 🔄 Post-Deployment Configuration

### Update Backend CORS
- [ ] Returned to Render dashboard
- [ ] FRONTEND_URL updated with Vercel URL
- [ ] Backend redeployed
- [ ] CORS working (no console errors)

### Update Documentation
- [ ] README.md updated with deployed URLs
- [ ] Frontend URL added
- [ ] Backend URL added
- [ ] Documentation reviewed

## ✅ Testing

### Backend API Testing
- [ ] Health endpoint: `GET https://your-backend-url/health`
- [ ] Returns: `{"status":"ok"}`

### Frontend Testing
- [ ] Home page loads
- [ ] Signup page accessible
- [ ] Login page accessible

### Authentication Flow
- [ ] Can create new USER account
- [ ] Receives success message
- [ ] Redirected to login
- [ ] Can log in with new account
- [ ] Redirected to dashboard
- [ ] Dashboard shows correct name
- [ ] Dashboard shows "USER" role
- [ ] Can log out
- [ ] Redirected to login

### Admin Role Testing
- [ ] Can create new ADMIN account
- [ ] Can log in as admin
- [ ] Dashboard shows "ADMIN" role
- [ ] Admin-specific UI displays (if applicable)

### Error Handling
- [ ] Cannot sign up with existing email
- [ ] Shows appropriate error message
- [ ] Cannot log in with wrong password
- [ ] Shows appropriate error message
- [ ] Cannot access dashboard without login
- [ ] Redirects to login page

### Security Testing
- [ ] Passwords not visible in network tab
- [ ] JWT token stored securely
- [ ] Protected routes require authentication
- [ ] Invalid tokens rejected

## 🔍 Monitoring

### Check Logs
- [ ] Render logs reviewed
- [ ] No critical errors
- [ ] Vercel logs reviewed
- [ ] No build warnings

### Performance
- [ ] Frontend loads quickly
- [ ] API responses fast
- [ ] No timeout errors

## 📱 Cross-Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browser

## 🎯 Final Verification

### Functionality
- [ ] All core features working
- [ ] No console errors
- [ ] No network errors
- [ ] Smooth user experience

### Documentation
- [ ] README.md complete
- [ ] Setup instructions clear
- [ ] Deployed URLs included
- [ ] Environment variables documented

### Repository
- [ ] All code pushed to GitHub
- [ ] No sensitive data exposed
- [ ] .gitignore working correctly
- [ ] Repository public (if required)

## 🚀 Submission Ready

- [ ] Frontend URL working
- [ ] Backend URL working
- [ ] GitHub repository accessible
- [ ] README.md comprehensive
- [ ] All features functional
- [ ] No critical bugs

## 📊 Optional Enhancements

If time permits:
- [ ] Custom domain configured
- [ ] SSL certificate verified
- [ ] Analytics added
- [ ] Error monitoring set up
- [ ] Performance optimized
- [ ] Additional features implemented

## 🎉 Deployment Complete!

Once all items are checked:
1. Test the entire flow one more time
2. Share your deployed URLs
3. Submit your GitHub repository
4. Celebrate! 🎊

---

## 🆘 Troubleshooting Reference

### Backend Won't Deploy
1. Check build logs in Render
2. Verify all dependencies in package.json
3. Ensure DATABASE_URL is correct
4. Try deploying from a clean branch

### Frontend Won't Deploy
1. Check build logs in Vercel
2. Verify NEXT_PUBLIC_API_URL is set
3. Ensure all dependencies in package.json
4. Try clearing cache and redeploying

### Database Connection Fails
1. Verify DATABASE_URL format
2. Check database is running
3. Ensure IP whitelist includes 0.0.0.0/0
4. Test connection locally first

### CORS Errors
1. Verify FRONTEND_URL in backend
2. Check NEXT_PUBLIC_API_URL in frontend
3. Ensure no trailing slashes
4. Redeploy backend after changes

### Authentication Not Working
1. Check JWT_SECRET is set
2. Verify token storage in browser
3. Check network tab for API calls
4. Review backend logs for errors

---

**Remember**: Take your time with each step. It's better to deploy correctly than quickly!
