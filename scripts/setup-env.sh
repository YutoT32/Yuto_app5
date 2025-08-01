#!/bin/bash

echo "🔧 Setting up environment..."

# Check if .env file already exists
if [ -f .env ]; then
    echo "⚠️  .env file already exists."
    read -p "Do you want to overwrite it? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Setup cancelled."
        exit 1
    fi
fi

# Copy from template
echo "📋 Creating .env from .env.example..."
cp .env.example .env

# Generate encryption key
echo "🔐 Generating N8N_ENCRYPTION_KEY..."
ENCRYPTION_KEY=$(openssl rand -base64 32)

# Update .env file with generated key
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "s/N8N_ENCRYPTION_KEY=.*/N8N_ENCRYPTION_KEY=$ENCRYPTION_KEY/" .env
else
    # Linux
    sed -i "s/N8N_ENCRYPTION_KEY=.*/N8N_ENCRYPTION_KEY=$ENCRYPTION_KEY/" .env
fi

echo "✅ Environment setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Review and update .env file if needed"
echo "2. Run 'docker compose up -d' to start n8n"
echo "3. Access n8n at http://localhost:5678"