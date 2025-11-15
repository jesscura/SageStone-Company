# Deployment Guide for SageStone Inc

This guide covers deploying the SageStone Inc React application to DigitalOcean and SharedHosting platforms.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Building the Application](#building-the-application)
- [DigitalOcean Deployment](#digitalocean-deployment)
  - [Option 1: DigitalOcean App Platform (Recommended)](#option-1-digitalocean-app-platform-recommended)
  - [Option 2: DigitalOcean Droplet with Nginx](#option-2-digitalocean-droplet-with-nginx)
- [SharedHosting Deployment (cPanel)](#sharedhosting-deployment-cpanel)
- [Environment Configuration](#environment-configuration)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:
- Node.js (v18 or higher) installed locally
- Git installed
- Access to your deployment platform (DigitalOcean account or SharedHosting credentials)
- Repository access to SageStone-Company

## Building the Application

1. Clone the repository:
```bash
git clone https://github.com/jesscura/SageStone-Company.git
cd SageStone-Company
```

2. Install dependencies:
```bash
npm install
```

3. Build the production bundle:
```bash
npm run build
```

The build output will be in the `build/` directory.

---

## DigitalOcean Deployment

### Option 1: DigitalOcean App Platform (Recommended)

**Best for:** Quick deployment with automatic scaling, CI/CD, and minimal configuration.

#### Steps:

1. **Login to DigitalOcean**
   - Go to [DigitalOcean](https://cloud.digitalocean.com/)
   - Navigate to Apps → Create App

2. **Connect Repository**
   - Select "GitHub" as the source
   - Authorize DigitalOcean to access your repository
   - Select `jesscura/SageStone-Company` repository
   - Choose the branch to deploy (main or production)

3. **Configure Build Settings**
   - **Name:** SageStone-Company
   - **Region:** Choose closest to your users
   - **Branch:** main (or your preferred branch)
   - **Autodeploy:** Enable for automatic deployments on push
   
4. **Build Configuration**
   ```yaml
   # App Platform will auto-detect, but you can customize:
   build_command: npm run build
   run_command: npm start
   http_port: 8080
   ```
   
   **Note:** The `npm start` command serves the built static files on port 8080, which is required for health checks.

5. **Environment Variables** (if needed)
   - Add any required environment variables in the App Platform dashboard
   - Variables starting with `VITE_` will be available in your app

6. **Review and Deploy**
   - Review the configuration
   - Click "Create Resources"
   - Wait for the build and deployment to complete (usually 3-5 minutes)

7. **Access Your Application**
   - Your app will be available at: `https://your-app-name.ondigitalocean.app`
   - You can configure a custom domain in the Settings tab

#### Estimated Cost:
- Basic Plan: $5/month (512MB RAM, 1 vCPU)
- Pro Plan: $12/month (1GB RAM, 1 vCPU)

---

### Option 2: DigitalOcean Droplet with Nginx

**Best for:** Full control over server configuration and potentially lower costs for multiple apps.

#### Steps:

1. **Create a Droplet**
   ```
   - OS: Ubuntu 22.04 LTS
   - Size: Basic ($6/month - 1GB RAM)
   - Region: Choose closest to your users
   - Authentication: SSH keys (recommended)
   ```

2. **Connect to Your Droplet**
   ```bash
   ssh root@your_droplet_ip
   ```

3. **Install Node.js and Nginx**
   ```bash
   # Update system
   apt update && apt upgrade -y
   
   # Install Node.js 18.x
   curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
   apt install -y nodejs
   
   # Install Nginx
   apt install -y nginx
   
   # Install Git
   apt install -y git
   ```

4. **Clone and Build Your Application**
   ```bash
   # Create app directory
   mkdir -p /var/www/sagestone
   cd /var/www/sagestone
   
   # Clone repository
   git clone https://github.com/jesscura/SageStone-Company.git .
   
   # Install dependencies and build
   npm install
   npm run build
   ```

5. **Configure Nginx**
   ```bash
   # Create Nginx configuration
   nano /etc/nginx/sites-available/sagestone
   ```
   
   Add the following configuration:
   ```nginx
   server {
       listen 80;
       server_name your_domain.com www.your_domain.com;
       
       root /var/www/sagestone/build;
       index index.html;
       
       # Enable gzip compression
       gzip on;
       gzip_vary on;
       gzip_min_length 1024;
       gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       # Cache static assets
       location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

6. **Enable the Site**
   ```bash
   # Create symbolic link
   ln -s /etc/nginx/sites-available/sagestone /etc/nginx/sites-enabled/
   
   # Test Nginx configuration
   nginx -t
   
   # Reload Nginx
   systemctl reload nginx
   ```

7. **Configure Firewall**
   ```bash
   ufw allow 'Nginx Full'
   ufw allow OpenSSH
   ufw enable
   ```

8. **Setup SSL with Let's Encrypt (Recommended)**
   ```bash
   # Install Certbot
   apt install -y certbot python3-certbot-nginx
   
   # Obtain SSL certificate
   certbot --nginx -d your_domain.com -d www.your_domain.com
   
   # Auto-renewal is configured automatically
   ```

9. **Setup Automatic Updates (Optional)**
   ```bash
   # Create update script
   cat > /var/www/sagestone/update.sh << 'EOF'
   #!/bin/bash
   cd /var/www/sagestone
   git pull origin main
   npm install
   npm run build
   systemctl reload nginx
   EOF
   
   chmod +x /var/www/sagestone/update.sh
   ```

#### Estimated Cost:
- Droplet: $6/month (1GB RAM, 1 vCPU, 25GB SSD)

---

## SharedHosting Deployment (cPanel)

**Best for:** Budget-friendly hosting with familiar cPanel interface.

### Prerequisites for SharedHosting:
- cPanel hosting account
- SSH access (optional but recommended)
- File Manager or FTP access

### Deployment Steps:

#### Method 1: Using cPanel File Manager (Easiest)

1. **Build Locally**
   ```bash
   # On your local machine
   npm install
   npm run build
   ```

2. **Compress Build Folder**
   ```bash
   cd build
   zip -r sagestone-build.zip *
   ```

3. **Upload to cPanel**
   - Login to cPanel
   - Navigate to **File Manager**
   - Go to `public_html` (or your domain's root directory)
   - Upload `sagestone-build.zip`
   - Extract the zip file
   - Delete the zip file after extraction

4. **Configure .htaccess**
   - The `.htaccess` file should already be included in your build
   - If not, create `.htaccess` in `public_html` with the following content:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     
     # Handle React Router
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   
   # Enable gzip compression
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/plain
     AddOutputFilterByType DEFLATE text/html
     AddOutputFilterByType DEFLATE text/xml
     AddOutputFilterByType DEFLATE text/css
     AddOutputFilterByType DEFLATE application/xml
     AddOutputFilterByType DEFLATE application/xhtml+xml
     AddOutputFilterByType DEFLATE application/rss+xml
     AddOutputFilterByType DEFLATE application/javascript
     AddOutputFilterByType DEFLATE application/x-javascript
   </IfModule>
   
   # Browser caching
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/gif "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

#### Method 2: Using SSH (Advanced)

1. **Connect via SSH**
   ```bash
   ssh username@your-domain.com
   ```

2. **Navigate to Web Root**
   ```bash
   cd public_html
   ```

3. **Option A: Clone and Build on Server** (if Node.js is available)
   ```bash
   git clone https://github.com/jesscura/SageStone-Company.git temp-build
   cd temp-build
   npm install
   npm run build
   mv build/* ../
   cd ..
   rm -rf temp-build
   ```

4. **Option B: Upload Pre-built Files**
   ```bash
   # On local machine, build and upload via SCP
   npm run build
   scp -r build/* username@your-domain.com:public_html/
   ```

#### Method 3: Using FTP

1. **Build Locally**
   ```bash
   npm install
   npm run build
   ```

2. **Connect via FTP**
   - Use an FTP client (FileZilla, Cyberduck, etc.)
   - Connect to your hosting server
   - Navigate to `public_html` or your domain root

3. **Upload Files**
   - Upload all files from the `build/` directory
   - Ensure `.htaccess` is uploaded (enable "Show hidden files" in your FTP client)

### Verifying SharedHosting Deployment

1. Visit your domain in a browser
2. Check that the application loads correctly
3. Test navigation between pages (React Router should work with .htaccess)
4. Open browser DevTools and check for any 404 errors

#### Estimated Cost:
- Shared Hosting: $3-10/month (varies by provider)

---

## Environment Configuration

If your application requires environment variables:

1. **Local Development**
   Create `.env.local`:
   ```env
   VITE_API_URL=https://api.example.com
   VITE_APP_NAME=SageStone Inc
   ```

2. **DigitalOcean App Platform**
   - Add environment variables in the App Platform dashboard
   - Settings → Environment Variables

3. **DigitalOcean Droplet**
   - Create `.env` file before building
   - Or set environment variables in the build script

4. **SharedHosting**
   - Build locally with appropriate `.env` file
   - Environment variables are compiled into the build

**Note:** Only variables prefixed with `VITE_` are exposed to the client.

---

## Troubleshooting

### Common Issues

#### 1. Blank Page After Deployment
- **Cause:** Incorrect base URL or asset paths
- **Solution:** 
  - Check `vite.config.ts` base path
  - Verify all assets are uploaded
  - Check browser console for errors

#### 2. 404 on Refresh (SharedHosting)
- **Cause:** Missing or incorrect `.htaccess` configuration
- **Solution:** 
  - Ensure `.htaccess` is in the root directory
  - Verify `mod_rewrite` is enabled on your host

#### 3. Assets Not Loading
- **Cause:** CORS or incorrect paths
- **Solution:**
  - Verify asset paths in build output
  - Check server MIME types configuration

#### 4. Health Check Failures on DigitalOcean App Platform
- **Cause:** App not responding on the expected port (8080)
- **Solution:**
  - Ensure `run_command` is set to `npm start` in App Platform settings
  - Verify the build completed successfully
  - Check that `serve` package is installed (should be automatic with `npm install`)
  - The `npm start` command serves static files on port 8080 for health checks

#### 5. Build Fails on DigitalOcean
- **Cause:** Insufficient memory or dependencies issue
- **Solution:**
  - Increase App Platform plan size
  - Check build logs for specific errors
  - Verify package.json dependencies

#### 6. Slow Loading on SharedHosting
- **Cause:** Unoptimized assets or no compression
- **Solution:**
  - Enable gzip compression in `.htaccess`
  - Optimize images before building
  - Enable browser caching

### Getting Help

- **Documentation:** Check Vite and React documentation
- **DigitalOcean:** Community forums and support tickets
- **SharedHosting:** Contact your hosting provider's support

---

## Update and Maintenance

### DigitalOcean App Platform
- Push to connected branch for automatic deployment
- Or manually trigger deployment from dashboard

### DigitalOcean Droplet
```bash
cd /var/www/sagestone
./update.sh
```

### SharedHosting
- Rebuild locally
- Re-upload files via cPanel, FTP, or SSH

---

## Security Recommendations

1. **Use HTTPS:** Always deploy with SSL/TLS certificates
2. **Keep Dependencies Updated:** Regularly run `npm audit` and update packages
3. **Secure Environment Variables:** Never commit sensitive data to the repository
4. **Regular Backups:** Set up automated backups of your deployment
5. **Monitor Logs:** Regularly check server and application logs

---

## Performance Optimization

1. **Enable Compression:** Use gzip or brotli compression
2. **Cache Static Assets:** Set appropriate cache headers
3. **CDN:** Consider using a CDN for global distribution
4. **Optimize Images:** Compress images before deployment
5. **Code Splitting:** Vite handles this automatically, but verify in production

---

## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [DigitalOcean Documentation](https://docs.digitalocean.com/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt](https://letsencrypt.org/)

---

**Last Updated:** November 2025
