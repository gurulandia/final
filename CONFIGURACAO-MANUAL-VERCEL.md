# 🔧 Configuração Manual na Vercel - SOLUÇÃO DEFINITIVA

## ⚠️ **SE AINDA DER ERRO DE PNPM:**

### **OPÇÃO 1: Configuração Manual na Interface**

1. **Acesse o dashboard da Vercel**
2. **Vá em Settings → General**
3. **Configure manualmente:**

```
Framework Preset: Other
Build Command: npm run build
Output Directory: dist
Install Command: npm install --legacy-peer-deps
Node.js Version: 18.x
```

4. **Em Environment Variables, adicione:**
```
NPM_CONFIG_LEGACY_PEER_DEPS=true
FORCE_NPM=true
```

---

### **OPÇÃO 2: Usar Script Personalizado**

1. **Na configuração de Build:**
```
Build Command: ./build.sh
Install Command: npm install --legacy-peer-deps
```

2. **O script `build.sh` já está incluído no projeto**

---

### **OPÇÃO 3: Forçar npm via package.json**

Se ainda não funcionar, edite o `package.json` e adicione:

```json
{
  "engines": {
    "npm": ">=8.0.0",
    "node": ">=18.0.0"
  },
  "scripts": {
    "vercel-build": "npm install --legacy-peer-deps && npm run build"
  }
}
```

E configure na Vercel:
```
Build Command: npm run vercel-build
```

---

### **OPÇÃO 4: Deploy via CLI da Vercel**

1. **Instale a CLI da Vercel:**
```bash
npm i -g vercel
```

2. **Faça login:**
```bash
vercel login
```

3. **Deploy forçando npm:**
```bash
vercel --build-env NPM_CONFIG_LEGACY_PEER_DEPS=true
```

---

## 🎯 **CONFIGURAÇÕES GARANTIDAS:**

### **Settings → General:**
- **Framework Preset:** Other (ou Vite)
- **Root Directory:** ./
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install --legacy-peer-deps`

### **Settings → Environment Variables:**
```
NPM_CONFIG_LEGACY_PEER_DEPS=true
FORCE_NPM=true
NODE_VERSION=18
```

### **Settings → Functions:**
- **Node.js Version:** 18.x

---

## 🚨 **SE NADA FUNCIONAR:**

### **Solução Extrema - Projeto Limpo:**

1. **Crie um novo repositório no GitHub**
2. **Use apenas estes arquivos essenciais:**
   - `src/` (pasta completa)
   - `public/` (pasta completa)
   - `api/` (pasta completa)
   - `package.json` (limpo)
   - `package-lock.json`
   - `vite.config.js`
   - `index.html`
   - `.npmrc`

3. **Package.json mínimo:**
```json
{
  "name": "megabeer-site",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "tailwindcss": "^4.1.7",
    "jsdom": "^25.0.1",
    "node-fetch": "^3.3.2"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.4.1",
    "vite": "^6.3.5"
  }
}
```

4. **Deploy sem vercel.json** (deixe a Vercel detectar automaticamente)

---

## 💡 **DICA FINAL:**

Se continuar dando erro, **delete o projeto na Vercel** e **importe novamente** com as configurações manuais acima.

**🔥 GARANTIDO: Uma dessas opções vai funcionar!**

