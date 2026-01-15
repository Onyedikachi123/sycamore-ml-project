#!/bin/bash
set -e

# Backend Setup Script
# Handles Python 3.11 + LightGBM/OpenMP requirements on macOS

echo "========================================"
echo " Sycamore Backend Setup"
echo "========================================"

# Check for Python 3.11
PYTHON_CMD="python3.11"
if ! command -v $PYTHON_CMD &> /dev/null; then
    # Fallback check for python3 if it is 3.11
    if command -v python3 &> /dev/null && python3 --version | grep -q "3.11"; then
        PYTHON_CMD="python3"
    else
        echo "❌ Error: Python 3.11 is required but not found."
        echo "   Please run: brew install python@3.11"
        exit 1
    fi
fi

echo "✅ Using $($PYTHON_CMD --version)"

# Check for libomp (required for LightGBM)
if [ ! -d "/opt/homebrew/opt/libomp" ]; then
    echo "⚠️  libomp not found. It is required for LightGBM."
    echo "   Running: brew install libomp"
    brew install libomp
fi

cd backend

# Create venv if needed
if [ ! -d "venv" ]; then
    echo "🔨 Creating virtual environment..."
    $PYTHON_CMD -m venv venv
else
    echo "✅ venv already exists."
fi

# Activate
source venv/bin/activate

# Install requirements with flags
echo "📦 Installing dependencies (with OpenMP flags)..."
export CFLAGS="-Xpreprocessor -fopenmp -I/opt/homebrew/opt/libomp/include"
export LDFLAGS="-L/opt/homebrew/opt/libomp/lib -lomp"

# Upgrade pip first
pip install --upgrade pip

if pip install -r requirements.txt; then
    echo "========================================"
    echo "✅ Setup Complete!"
    echo "   To start the server:"
    echo "   cd backend && source venv/bin/activate"
    echo "   uvicorn app.main:app --reload"
    echo "========================================"
else
    echo "❌ Installation failed."
    exit 1
fi
