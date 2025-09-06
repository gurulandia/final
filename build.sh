#!/bin/bash

echo "🔧 Iniciando processo de build personalizado..."

# 1. Instalar dependências do Python
echo "🐍 Instalando dependências do Python..."
pip install -r requirements.txt

# 2. Executar o scraper para obter as promoções mais recentes
echo "🔍 Executando scraper de promoções..."
python promocoes-scraper.py

# 3. Instalar dependências do Node.js
echo "📦 Instalando dependências do Node.js com npm..."
npm install --legacy-peer-deps

# 4. Fazer o build do frontend
echo "🏗️ Fazendo build do frontend com Vite..."
npm run build

echo "✅ Build concluído com sucesso!"