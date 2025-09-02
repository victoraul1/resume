#!/bin/bash

# Deployment script for DigitalOcean server
# Run this on your server after cloning the repository

echo "🚀 Starting deployment..."

# Navigate to the resume directory
cd /var/www/resume

# Pull latest changes from GitHub
echo "📥 Pulling latest code from GitHub..."
git pull origin main

# Install/update dependencies
echo "📦 Installing dependencies..."
npm install

# Stop existing PM2 process
echo "⏹️  Stopping existing PM2 process..."
pm2 stop resume || true

# Start the application with PM2
echo "▶️  Starting application with PM2..."
pm2 start server.js --name resume

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Setup PM2 to start on system boot
echo "⚙️  Setting up auto-start on boot..."
pm2 startup systemd -u root --hp /root

echo "✅ Deployment complete!"
echo ""
echo "📝 Next steps:"
echo "1. Configure nginx if not already done:"
echo "   sudo nano /etc/nginx/sites-available/victorgalindo.com"
echo "2. Copy the nginx.conf content from the repository"
echo "3. Enable the site:"
echo "   sudo ln -s /etc/nginx/sites-available/victorgalindo.com /etc/nginx/sites-enabled/"
echo "4. Test nginx configuration:"
echo "   sudo nginx -t"
echo "5. Reload nginx:"
echo "   sudo systemctl reload nginx"
echo ""
echo "Your resume should now be accessible at http://victorgalindo.com"
echo "Default password for editing: 123456"