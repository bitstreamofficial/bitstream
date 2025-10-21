# Deployment Checklist

## Pre-Deployment Checklist

### ✅ Code Quality

- [x] All TypeScript errors fixed
- [x] ESLint warnings resolved
- [x] Tests passing
- [x] Code formatted with Prettier
- [x] No console.errors in production code

### ✅ Security

- [x] Environment variables validation added
- [x] Password hashing implemented (bcryptjs)
- [x] Rate limiting on API routes
- [x] Security headers configured
- [x] CORS properly configured
- [x] Input sanitization implemented
- [ ] Security audit completed
- [ ] Dependencies updated and checked for vulnerabilities

### ✅ Environment Configuration

- [x] .env.example file created
- [ ] Production environment variables configured
- [ ] NEXTAUTH_SECRET generated (use: `openssl rand -base64 32`)
- [ ] Production database setup (MongoDB Atlas)
- [ ] SendGrid API key configured (if using email)
- [ ] Cloudinary credentials configured (if using images)

### 📋 Database

- [ ] Production MongoDB database created
- [ ] Database indexes created
- [ ] Database backup strategy configured
- [ ] Connection pooling optimized
- [ ] Database migrations tested

### 📋 Performance

- [ ] Image optimization configured
- [ ] Static assets optimized
- [ ] Bundle size checked
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals optimized

### 📋 Monitoring & Analytics

- [ ] Error tracking configured (e.g., Sentry)
- [ ] Analytics configured (e.g., Google Analytics, Vercel Analytics)
- [ ] Logging system setup
- [ ] Uptime monitoring configured

### 📋 SEO & Meta

- [ ] Meta tags added to all pages
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] Open Graph images added
- [ ] Favicon and app icons configured

### 📋 Documentation

- [ ] README.md updated
- [ ] API documentation written
- [ ] Deployment instructions documented
- [ ] Environment variables documented

## Deployment Steps

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI** (optional)

   ```bash
   npm i -g vercel
   ```

2. **Connect Repository**
   - Push code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add all variables from `.env.example`
   - Generate a secure NEXTAUTH_SECRET:
     ```bash
     openssl rand -base64 32
     ```

4. **Deploy**
   ```bash
   vercel --prod
   ```
   Or push to main branch for automatic deployment

### Option 2: Docker Deployment

1. **Create Dockerfile**

   ```dockerfile
   FROM node:18-alpine AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   FROM node:18-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next/standalone ./
   COPY --from=builder /app/.next/static ./.next/static
   EXPOSE 3000
   CMD ["node", "server.js"]
   ```

2. **Build and Run**
   ```bash
   docker build -t bitstream .
   docker run -p 3000:3000 --env-file .env.production bitstream
   ```

### Option 3: Traditional VPS (DigitalOcean, AWS, etc.)

1. **Setup Server**

   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y

   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Install PM2
   sudo npm install -g pm2
   ```

2. **Deploy Application**

   ```bash
   # Clone repository
   git clone <your-repo-url>
   cd bitstream

   # Install dependencies
   npm ci

   # Build application
   npm run build

   # Start with PM2
   pm2 start npm --name "bitstream" -- start
   pm2 save
   pm2 startup
   ```

3. **Setup Nginx (reverse proxy)**

   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

## Post-Deployment

### Verification

- [ ] Application loads successfully
- [ ] All pages accessible
- [ ] Forms working correctly
- [ ] API endpoints responding
- [ ] Database connection working
- [ ] Email sending working
- [ ] Images uploading/displaying correctly
- [ ] Authentication working
- [ ] Mobile responsive
- [ ] SSL certificate valid

### Monitoring Setup

- [ ] Setup error alerts
- [ ] Configure uptime monitoring
- [ ] Setup performance monitoring
- [ ] Configure log aggregation

### Backup Strategy

- [ ] Database automated backups
- [ ] Code repository backups
- [ ] Asset backups (images, files)
- [ ] Disaster recovery plan documented

## Environment Variables for Production

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bitstream?retryWrites=true&w=majority

# Authentication
NEXTAUTH_SECRET=<generate-with-openssl-rand-base64-32>
NEXTAUTH_URL=https://yourdomain.com

# Email
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
FROM_EMAIL=noreply@yourdomain.com

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD=your-cloud-name
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=xxxxxxxxxxxxx
CLOUDINARY_API_SECRET=xxxxxxxxxxxxx

# App
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NODE_ENV=production
```

## Rollback Plan

If deployment fails:

1. **Vercel**: Revert to previous deployment in dashboard
2. **Docker**: Keep previous image tagged
3. **VPS**: Keep previous build in separate directory

```bash
# PM2 rollback example
pm2 stop bitstream
cd /path/to/previous-version
pm2 start npm --name "bitstream" -- start
```

## Support & Troubleshooting

### Common Issues

1. **Build fails**: Check Node.js version (requires 18+)
2. **Database connection fails**: Verify MongoDB URI and IP whitelist
3. **NextAuth errors**: Ensure NEXTAUTH_SECRET is set and unique
4. **Images not loading**: Check Cloudinary configuration

### Getting Help

- Check application logs
- Review error tracking dashboard
- Contact support: official.bitstream@gmail.com
