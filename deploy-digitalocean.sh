#!/bin/bash
#
# DigitalOcean Droplet Deployment Script for SageStone Inc
# This script automates the deployment process on a DigitalOcean Droplet
#
# Usage: ./deploy-digitalocean.sh
#

set -e

echo "🚀 Starting SageStone Inc Deployment on DigitalOcean Droplet"
echo "============================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
  echo -e "${RED}❌ Please run as root (use sudo)${NC}"
  exit 1
fi

# Configuration
APP_DIR="/var/www/sagestone"
DOMAIN=""
EMAIL=""

# Ask for domain and email if not set
read -p "Enter your domain name (e.g., example.com): " DOMAIN
read -p "Enter your email for SSL certificate: " EMAIL

if [ -z "$DOMAIN" ] || [ -z "$EMAIL" ]; then
    echo -e "${RED}❌ Domain and email are required${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Configuration set${NC}"

# Update system
echo -e "\n${YELLOW}📦 Updating system packages...${NC}"
apt update && apt upgrade -y

# Install Node.js
echo -e "\n${YELLOW}📦 Installing Node.js...${NC}"
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
    apt install -y nodejs
    echo -e "${GREEN}✓ Node.js installed: $(node --version)${NC}"
else
    echo -e "${GREEN}✓ Node.js already installed: $(node --version)${NC}"
fi

# Install Nginx
echo -e "\n${YELLOW}📦 Installing Nginx...${NC}"
if ! command -v nginx &> /dev/null; then
    apt install -y nginx
    echo -e "${GREEN}✓ Nginx installed${NC}"
else
    echo -e "${GREEN}✓ Nginx already installed${NC}"
fi

# Install Git
echo -e "\n${YELLOW}📦 Installing Git...${NC}"
if ! command -v git &> /dev/null; then
    apt install -y git
    echo -e "${GREEN}✓ Git installed${NC}"
else
    echo -e "${GREEN}✓ Git already installed${NC}"
fi

# Clone or update repository
echo -e "\n${YELLOW}📥 Setting up application...${NC}"
if [ -d "$APP_DIR" ]; then
    echo -e "${YELLOW}Directory exists, pulling latest changes...${NC}"
    cd "$APP_DIR"
    git pull origin main
else
    mkdir -p "$APP_DIR"
    cd "$APP_DIR"
    git clone https://github.com/jesscura/SageStone-Company.git .
fi

echo -e "${GREEN}✓ Repository ready${NC}"

# Install dependencies and build
echo -e "\n${YELLOW}🔨 Building application...${NC}"
npm install
npm run build
echo -e "${GREEN}✓ Application built successfully${NC}"

# Configure Nginx
echo -e "\n${YELLOW}⚙️  Configuring Nginx...${NC}"
cat > /etc/nginx/sites-available/sagestone << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    root $APP_DIR/build;
    index index.html;
    
    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    location / {
        try_files \$uri \$uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}
EOF

# Enable site
ln -sf /etc/nginx/sites-available/sagestone /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
if nginx -t; then
    echo -e "${GREEN}✓ Nginx configuration valid${NC}"
    systemctl reload nginx
else
    echo -e "${RED}❌ Nginx configuration error${NC}"
    exit 1
fi

# Configure firewall
echo -e "\n${YELLOW}🔥 Configuring firewall...${NC}"
ufw allow 'Nginx Full'
ufw allow OpenSSH
ufw --force enable
echo -e "${GREEN}✓ Firewall configured${NC}"

# Install and configure SSL
echo -e "\n${YELLOW}🔒 Setting up SSL certificate...${NC}"
if ! command -v certbot &> /dev/null; then
    apt install -y certbot python3-certbot-nginx
fi

certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos --email "$EMAIL" --redirect

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ SSL certificate installed${NC}"
else
    echo -e "${YELLOW}⚠️  SSL setup failed or already configured${NC}"
fi

# Create update script
echo -e "\n${YELLOW}📝 Creating update script...${NC}"
cat > "$APP_DIR/update.sh" << 'EOFUPDATE'
#!/bin/bash
cd /var/www/sagestone
git pull origin main
npm install
npm run build
systemctl reload nginx
echo "✓ Application updated successfully"
EOFUPDATE

chmod +x "$APP_DIR/update.sh"
echo -e "${GREEN}✓ Update script created at $APP_DIR/update.sh${NC}"

# Final status
echo -e "\n${GREEN}============================================================${NC}"
echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo -e "${GREEN}============================================================${NC}"
echo ""
echo -e "Your application is now live at:"
echo -e "  ${GREEN}https://$DOMAIN${NC}"
echo ""
echo -e "To update the application in the future:"
echo -e "  ${YELLOW}cd $APP_DIR && ./update.sh${NC}"
echo ""
echo -e "Nginx configuration: /etc/nginx/sites-available/sagestone"
echo -e "Application directory: $APP_DIR"
echo ""
echo -e "${GREEN}Happy deploying! 🚀${NC}"
