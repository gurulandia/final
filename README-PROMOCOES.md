# 🔥 Sistema de Promoções Automáticas - Mega Beer

## 📋 Resumo das Atualizações Realizadas

### ✅ Atualizações Concluídas:

1. **Nova Logo Oficial** - Substituída a logo genérica pela logo oficial da Mega Beer
2. **Foto Real da Fachada** - Adicionada foto real da loja na seção "Sobre nós"
3. **Texto "Sobre Nós" Atualizado** - História personalizada desde 2022
4. **Informações de Entrega Removidas** - Removido "raio de 8km" e "região de Justinópolis"
5. **Seção de Promoções** - Nova seção "🔥 Promoções da Semana" na página inicial
6. **Sistema Automático** - Script para buscar promoções do site Anota.ai

---

## 🤖 Sistema de Promoções Automáticas

### Como Funciona:

O sistema foi desenvolvido para buscar automaticamente as promoções da seção "PROMOÇÃO DA SEMANA" do site da Anota.ai e exibi-las na página inicial do site da Mega Beer.

### Arquivos Criados:

1. **`promocoes-scraper.py`** - Script Python que busca as promoções
2. **`public/promocoes.js`** - Arquivo JavaScript que exibe as promoções no site
3. **`setup-cron.sh`** - Script para configurar execução automática
4. **`README-PROMOCOES.md`** - Esta documentação

---

## 🚀 Como Configurar a Execução Automática

### Passo 1: Configurar o Cron Job

Execute o script de configuração:

```bash
cd /caminho/para/megabeer-site
./setup-cron.sh
```

Isso irá:
- Configurar execução diária às 11:00
- Criar logs de execução
- Verificar se tudo está funcionando

### Passo 2: Verificar Configuração

Para ver se o cron job foi criado:

```bash
crontab -l
```

Você deve ver uma linha como:
```
0 11 * * * cd /caminho/para/megabeer-site && python3 promocoes-scraper.py >> /caminho/para/megabeer-site/promocoes.log 2>&1
```

---

## 🧪 Como Testar Manualmente

### Executar o Script de Promoções:

```bash
cd /caminho/para/megabeer-site
python3 promocoes-scraper.py
```

### Ver Logs de Execução:

```bash
tail -f promocoes.log
```

---

## 📁 Estrutura dos Arquivos

```
megabeer-site/
├── promocoes-scraper.py      # Script principal
├── setup-cron.sh            # Configuração do cron
├── public/
│   └── promocoes.js          # JavaScript para o site
├── promocoes.log             # Logs de execução
└── README-PROMOCOES.md       # Esta documentação
```

---

## 🔧 Como o Sistema Funciona

### 1. Busca Automática (11:00 diariamente)
- O script `promocoes-scraper.py` acessa o site da Anota.ai
- Busca por produtos na seção "PROMOÇÃO DA SEMANA"
- Extrai nome do produto e preço

### 2. Atualização do Site
- Gera código JavaScript com as promoções encontradas
- Salva em `public/promocoes.js`
- O site carrega automaticamente as novas promoções

### 3. Exibição no Site
- Seção "🔥 Promoções da Semana" na página inicial
- Cards com badge "PROMOÇÃO" em vermelho
- Botão "Pedir Agora" que leva para a Anota.ai

---

## 🛠️ Personalização

### Alterar Horário de Execução

Para alterar o horário (exemplo: 14:30):

```bash
crontab -e
```

Altere a linha para:
```
30 14 * * * cd /caminho/para/megabeer-site && python3 promocoes-scraper.py >> /caminho/para/megabeer-site/promocoes.log 2>&1
```

### Alterar Número de Promoções

No arquivo `promocoes-scraper.py`, linha 37:
```python
for element in promocao_elements[:6]:  # Altere o número 6
```

---

## 🐛 Solução de Problemas

### Promoções não aparecem no site:
1. Verificar se o cron job está ativo: `crontab -l`
2. Verificar logs: `tail -f promocoes.log`
3. Testar manualmente: `python3 promocoes-scraper.py`

### Script não encontra promoções:
1. Verificar se o site da Anota.ai está acessível
2. Verificar se a estrutura do site mudou
3. Verificar logs de erro

### Cron job não executa:
1. Verificar se o cron service está rodando: `sudo service cron status`
2. Verificar permissões dos arquivos: `chmod +x promocoes-scraper.py`

---

## 📞 Suporte

Para dúvidas ou problemas:
1. Verificar os logs em `promocoes.log`
2. Testar execução manual do script
3. Verificar se todas as dependências estão instaladas:
   ```bash
   pip3 install requests beautifulsoup4
   ```

---

## 🎯 Próximos Passos Sugeridos

1. **Monitoramento**: Configurar alertas se o script falhar
2. **Backup**: Fazer backup das promoções em caso de falha
3. **Melhorias**: Adicionar mais informações das promoções (imagens, descrições)
4. **Analytics**: Rastrear cliques nos botões "Pedir Agora"

---

**✨ Sistema criado para automatizar e otimizar a exibição de promoções da Mega Beer!**

