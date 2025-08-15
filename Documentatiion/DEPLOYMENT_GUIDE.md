# Portfolio Deployment Guide

## Vercel Deployment Steps

### Prerequisites
1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Connect your GitHub account to Vercel
3. Push your portfolio code to a GitHub repository

### Step 1: Prepare for Deployment
Your project is already configured with:
- ✅ `package.json` with proper build scripts
- ✅ Vite configuration for production builds
- ✅ Express server setup for both development and production
- ✅ Static file serving configuration

### Step 2: Create Vercel Configuration
Create `vercel.json` in your project root:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "client/**/*",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    },
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/client/dist/$1"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### Step 3: Update Build Configuration
Your current build script in `package.json` should work:
```json
{
  "scripts": {
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist"
  }
}
```

### Step 4: Deploy to Vercel

#### Option A: GitHub Integration (Recommended)
1. Push your code to GitHub repository
2. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click "Deploy"

#### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? chinmay-portfolio (or your choice)
# - Directory? ./
# - Want to override settings? No
```

### Step 5: Environment Variables (if needed)
If you add email services later, set environment variables in Vercel:
1. Go to your project dashboard on Vercel
2. Click "Settings" tab
3. Click "Environment Variables"
4. Add any required variables

### Step 6: Custom Domain (Optional)
1. Purchase a domain (e.g., chinmaykarthikeya.com)
2. In Vercel dashboard, go to your project
3. Click "Domains" tab
4. Add your custom domain
5. Update DNS settings as instructed by Vercel

## Expected Results
After deployment:
- ✅ Your portfolio will be live at a `.vercel.app` URL
- ✅ Contact form will work with local storage
- ✅ All sections will be responsive and functional
- ✅ Professional domain for job applications

## Alternative: Replit Deployment
Your portfolio can also be deployed directly on Replit:
1. Click "Deploy" button in Replit
2. Choose "Autoscale Deployment"
3. Get a stable `.replit.app` domain
4. Email services may work better with deployed domains

## Post-Deployment Checklist
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Verify mobile responsiveness
- [ ] Check loading speeds
- [ ] Test on different browsers
- [ ] Update resume download link
- [ ] Share portfolio URL with recruiters

Your portfolio is production-ready and will help you attract data analyst opportunities!