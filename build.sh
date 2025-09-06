#!/bin/bash

# Script de build personalizado para forçar uso do npm na Vercel
echo "🔧 Forçando uso do npm..."

# Remover qualquer arquivo do pnpm que possa existir
rm -f pnpm-lock.yaml
rm -rf .pnpm-store
rm -rf node_modules/.pnpm

# Garantir que o npm está sendo usado
echo "📦 Instalando dependências com npm..."
npm install --legacy-peer-deps

echo "🏗️ Fazendo build..."
npm run build

echo "✅ Build concluído com sucesso!"

