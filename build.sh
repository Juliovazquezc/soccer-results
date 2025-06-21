#!/bin/bash

# Build and deploy script for OBS Football Overlay

echo "🏗️  Building OBS Football Overlay..."

# Install dependencies
npm install

# Build the project
npm run build

echo "✅ Build complete!"
echo ""
echo "📁 Built files are in the 'dist' folder"
echo "🌐 You can serve the 'dist' folder using any web server"
echo ""
echo "📺 For OBS Studio:"
echo "   1. Add a Browser Source"
echo "   2. Set URL to: http://localhost:3000 (or your server URL)"
echo "   3. Set Width: 1920, Height: 1080"
echo "   4. Check 'Shutdown source when not visible'"
echo ""
echo "🎉 Happy streaming!"
