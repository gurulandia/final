# 🔧 Solução de Problemas - Deploy Vercel

## ❌ **ERROS COMUNS E SOLUÇÕES**

### 1. **"The `functions` property cannot be used in conjunction with the `builds` property"**

**✅ SOLUÇÃO:** Arquivo `vercel.json` corrigido!
- O novo arquivo já está no projeto corrigido
- A Vercel detecta automaticamente as funções na pasta `api/`

### 2. **"npm error ERESOLVE unable to resolve dependency tree"**

**✅ SOLUÇÕES APLICADAS:**
- Package.json simplificado com apenas dependências essenciais
- Arquivo `.npmrc` criado com `legacy-peer-deps=true`
- Conflitos de versão do date-fns resolvidos

### 3. **"Can't resolve 'tw-animate-css'"**

**✅ SOLUÇÃO:** Importação removida do App.css
- Animações agora são definidas diretamente no CSS
- Build funciona sem dependências externas desnecessárias

### 4. **"Build failed" ou "Command failed"**

**✅ SOLUÇÕES:**
```bash
# No dashboard da Vercel, configure:
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### 5. **"Module not found" para node-fetch ou jsdom**

**✅ SOLUÇÃO:** Dependências já adicionadas no `package.json`
- Se ainda der erro, vá em Settings → Environment Variables
- Adicione: `NODE_VERSION` = `18`

### 6. **API /api/promocoes retorna erro 500**

**✅ SOLUÇÕES:**
1. Verifique os logs: Dashboard → Functions → View Logs
2. Teste a URL da Anota.ai manualmente
3. A API tem fallback para promoções de exemplo

### 7. **Site carrega mas promoções não aparecem**

**✅ SOLUÇÕES:**
1. Abra o console do navegador (F12)
2. Verifique se há erros JavaScript
3. Teste a API: `https://seusite.com/api/promocoes`

### 8. **Domínio não funciona após configurar DNS**

**✅ SOLUÇÕES:**
1. Aguarde até 24h para propagação
2. Teste com: https://dnschecker.org
3. Verifique se os registros DNS estão corretos

---

## 🚀 **CONFIGURAÇÕES RECOMENDADAS NA VERCEL**

### **Build Settings:**
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### **Environment Variables (se necessário):**
- `NODE_VERSION`: `18`

---

## 📊 **COMO VERIFICAR SE ESTÁ FUNCIONANDO**

### ✅ **Checklist de Funcionamento:**

1. **Site carrega:** ✅ Acesse seu domínio
2. **HTTPS ativo:** ✅ Deve mostrar cadeado verde
3. **API funciona:** ✅ Acesse `/api/promocoes`
4. **Promoções aparecem:** ✅ Seção "Promoções da Semana"
5. **Botões funcionam:** ✅ WhatsApp e "Pedir Agora"

### 🔍 **Como testar a API:**
```
https://seusite.com/api/promocoes
```

**Resposta esperada:**
```json
{
  "success": true,
  "promocoes": [...],
  "timestamp": "2025-01-01T12:00:00.000Z",
  "total": 3
}
```

---

## 🆘 **SE NADA FUNCIONAR**

### **Opção 1: Deploy Simples (sem automações)**
1. Remova a pasta `api/`
2. Remova o arquivo `vercel.json`
3. Faça deploy novamente
4. Site funcionará sem promoções automáticas

### **Opção 2: Usar template da Vercel**
1. Na Vercel, clique "Browse All Templates"
2. Escolha "Vite" ou "React"
3. Substitua os arquivos pelos do projeto

### **Opção 3: Suporte da Vercel**
- Discord: https://vercel.com/discord
- Documentação: https://vercel.com/docs
- Status: https://vercel-status.com

---

## 💡 **DICAS IMPORTANTES**

### ✅ **Para evitar problemas:**
1. **Sempre use o arquivo ZIP corrigido**
2. **Não edite o `vercel.json` manualmente**
3. **Aguarde o build completar antes de testar**
4. **Use HTTPS sempre** (nunca HTTP)

### ⚠️ **Limitações do plano gratuito:**
- 100GB bandwidth/mês
- 1000 execuções de função/mês
- 10 segundos timeout por função

### 🔄 **Para atualizações futuras:**
1. Edite os arquivos no GitHub
2. Vercel faz deploy automático
3. Aguarde 2-3 minutos para propagação

---

## 📞 **CONTATOS DE EMERGÊNCIA**

Se precisar de ajuda urgente:
1. **Logs da Vercel:** Dashboard → Functions → Logs
2. **Status da Vercel:** https://vercel-status.com
3. **Comunidade:** https://github.com/vercel/vercel/discussions

**🎯 Com essas soluções, 99% dos problemas são resolvidos!**

