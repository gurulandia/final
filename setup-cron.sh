#!/bin/bash

# Script para configurar o cron job que atualiza as promoções diariamente às 11:00

echo "🔧 Configurando cron job para atualização automática de promoções..."

# Diretório do projeto
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PYTHON_SCRIPT="$PROJECT_DIR/promocoes-scraper.py"

# Verificar se o script Python existe
if [ ! -f "$PYTHON_SCRIPT" ]; then
    echo "❌ Erro: Script promocoes-scraper.py não encontrado em $PYTHON_SCRIPT"
    exit 1
fi

# Tornar o script Python executável
chmod +x "$PYTHON_SCRIPT"

# Criar entrada do cron job
CRON_JOB="0 11 * * * cd $PROJECT_DIR && python3 $PYTHON_SCRIPT >> $PROJECT_DIR/promocoes.log 2>&1"

# Verificar se o cron job já existe
if crontab -l 2>/dev/null | grep -q "promocoes-scraper.py"; then
    echo "⚠️ Cron job já existe. Removendo entrada antiga..."
    crontab -l 2>/dev/null | grep -v "promocoes-scraper.py" | crontab -
fi

# Adicionar novo cron job
echo "📅 Adicionando cron job: Execução diária às 11:00"
(crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -

# Verificar se foi adicionado com sucesso
if crontab -l 2>/dev/null | grep -q "promocoes-scraper.py"; then
    echo "✅ Cron job configurado com sucesso!"
    echo ""
    echo "📋 Detalhes da configuração:"
    echo "   • Horário: Todos os dias às 11:00"
    echo "   • Script: $PYTHON_SCRIPT"
    echo "   • Log: $PROJECT_DIR/promocoes.log"
    echo ""
    echo "🔍 Para verificar os cron jobs ativos:"
    echo "   crontab -l"
    echo ""
    echo "📝 Para ver os logs de execução:"
    echo "   tail -f $PROJECT_DIR/promocoes.log"
    echo ""
    echo "🧪 Para testar o script manualmente:"
    echo "   cd $PROJECT_DIR && python3 promocoes-scraper.py"
else
    echo "❌ Erro ao configurar cron job"
    exit 1
fi

echo ""
echo "🎉 Configuração concluída! As promoções serão atualizadas automaticamente todos os dias às 11:00."

