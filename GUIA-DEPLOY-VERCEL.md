# 🚀 Guia Completo: Deploy na Vercel com Automações

## 📋 **RESUMO DO QUE VOCÊ VAI FAZER:**

1. ✅ Criar conta no GitHub (se não tiver)
2. ✅ Fazer upload do código para o GitHub
3. ✅ Criar conta na Vercel
4. ✅ Conectar GitHub com Vercel
5. ✅ Configurar domínio personalizado
6. ✅ Testar automações

**💰 CUSTO TOTAL: ~R$ 50/ano** (apenas o domínio, hospedagem é gratuita!)

---

## 🎯 **PASSO 1: PREPARAR O GITHUB**

### 1.1 Criar conta no GitHub (se não tiver)
- Acesse: https://github.com
- Clique em "Sign up"
- Use seu email e crie uma senha forte

### 1.2 Criar repositório
- Clique no botão verde "New" ou "+"
- Nome do repositório: `megabeer-site`
- Marque como "Public" (gratuito)
- Clique em "Create repository"

### 1.3 Fazer upload dos arquivos

**OPÇÃO A - Interface Web (Mais Fácil):**
1. Na página do repositório, clique em "uploading an existing file"
2. Arraste TODOS os arquivos da pasta `megabeer-site` para o GitHub
3. Escreva uma mensagem: "Site da Mega Beer com automações"
4. Clique em "Commit changes"

**OPÇÃO B - Git (Se souber usar):**
```bash
git init
git add .
git commit -m "Site da Mega Beer com automações"
git remote add origin https://github.com/SEU_USUARIO/megabeer-site.git
git push -u origin main
```

---

## 🚀 **PASSO 2: DEPLOY NA VERCEL**

### 2.1 Criar conta na Vercel
- Acesse: https://vercel.com
- Clique em "Sign Up"
- **IMPORTANTE:** Escolha "Continue with GitHub"
- Autorize a Vercel a acessar seus repositórios

### 2.2 Importar projeto
- No dashboard da Vercel, clique em "New Project"
- Encontre o repositório `megabeer-site`
- Clique em "Import"

### 2.3 Configurar deploy
- **Framework Preset:** Vite
- **Root Directory:** deixe em branco
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- Clique em "Deploy"

### 2.4 Aguardar deploy
- O processo leva 2-3 minutos
- Você verá uma tela de "Congratulations!" quando terminar
- Anote a URL gerada (algo como: `megabeer-site-xxx.vercel.app`)

---

## 🌐 **PASSO 3: CONFIGURAR DOMÍNIO PERSONALIZADO**

### 3.1 Comprar domínio
**Opções recomendadas:**
- **Registro.br** (domínios .com.br) - ~R$ 40/ano
- **Namecheap** (domínios .com) - ~R$ 50/ano
- **GoDaddy** - ~R$ 60/ano

**Sugestões de domínio:**
- `megabeer.com.br`
- `megabeerdelivery.com.br`
- `distribuidoramegabeer.com.br`

### 3.2 Configurar DNS na Vercel
1. No dashboard da Vercel, clique no seu projeto
2. Vá em "Settings" → "Domains"
3. Digite seu domínio e clique "Add"
4. A Vercel vai mostrar os registros DNS necessários

### 3.3 Configurar no provedor do domínio
1. Acesse o painel do seu provedor de domínio
2. Vá em "DNS" ou "Gerenciar DNS"
3. Adicione os registros que a Vercel mostrou:
   - Tipo: `A` | Nome: `@` | Valor: `76.76.19.61`
   - Tipo: `CNAME` | Nome: `www` | Valor: `cname.vercel-dns.com`

### 3.4 Aguardar propagação
- Pode levar até 24 horas
- Teste acessando seu domínio

---

## 🤖 **PASSO 4: TESTAR AUTOMAÇÕES**

### 4.1 Testar API de promoções
- Acesse: `https://seudominio.com/api/promocoes`
- Deve retornar um JSON com as promoções

### 4.2 Testar no site
- Acesse seu site
- Role até a seção "Promoções da Semana"
- Deve mostrar as promoções automaticamente

### 4.3 Verificar logs
- No dashboard da Vercel, vá em "Functions"
- Clique em `/api/promocoes`
- Veja os logs de execução

---

## 🔧 **CONFIGURAÇÕES AVANÇADAS**

### Agendar Atualizações Automáticas

**Opção 1 - Cron Job Externo (Recomendado):**
Use um serviço como **cron-job.org**:
1. Cadastre-se em https://cron-job.org
2. Crie um job que acesse `https://seudominio.com/api/promocoes`
3. Configure para executar diariamente às 11:00

**Opção 2 - GitHub Actions:**
Crie `.github/workflows/update-promocoes.yml`:
```yaml
name: Atualizar Promoções
on:
  schedule:
    - cron: '0 11 * * *'  # 11:00 UTC diariamente
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - name: Chamar API de promoções
        run: curl https://seudominio.com/api/promocoes
```

---

## 📊 **MONITORAMENTO**

### Verificar se está funcionando:
1. **Site carregando:** Acesse seu domínio
2. **Promoções atualizando:** Verifique a seção de promoções
3. **API funcionando:** Acesse `/api/promocoes`
4. **Logs da Vercel:** Dashboard → Functions → Logs

### Em caso de problemas:
1. Verifique os logs na Vercel
2. Teste a API manualmente
3. Verifique se o site da Anota.ai está acessível

---

## 💡 **DICAS IMPORTANTES**

### ✅ **Vantagens da Vercel:**
- Hospedagem gratuita e rápida
- SSL automático (HTTPS)
- Deploy automático quando você atualizar o código
- Funções serverless incluídas
- CDN global

### ⚠️ **Limitações do plano gratuito:**
- 100GB de bandwidth/mês (mais que suficiente)
- 1000 execuções de função/mês
- Para mais, upgrade por ~$20/mês

### 🔄 **Atualizações futuras:**
- Qualquer mudança no GitHub atualiza automaticamente o site
- Para mudanças urgentes, use o dashboard da Vercel

---

## 📞 **SUPORTE**

### Se algo der errado:
1. **Logs da Vercel:** Dashboard → Functions → View Logs
2. **Status da Vercel:** https://vercel-status.com
3. **Documentação:** https://vercel.com/docs

### Contatos úteis:
- **Suporte Vercel:** https://vercel.com/help
- **Comunidade:** https://github.com/vercel/vercel/discussions

---

## 🎉 **RESULTADO FINAL**

Após seguir este guia, você terá:

✅ **Site profissional no ar** com seu domínio  
✅ **Promoções atualizando automaticamente**  
✅ **SSL/HTTPS configurado**  
✅ **Deploy automático** quando atualizar código  
✅ **Monitoramento e logs** para acompanhar  

**🚀 Seu site estará pronto para receber clientes e crescer!**

