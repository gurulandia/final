// Sistema de promoções automáticas - Mega Beer
// Busca promoções da API da Vercel

document.addEventListener('DOMContentLoaded', function() {
    const promocoesContainer = document.getElementById('promocoes-container');
    if (!promocoesContainer) return;

    console.log('🔍 Carregando promoções...');

    // Função para carregar promoções da API
    async function carregarPromocoes() {
        try {
            // Buscar promoções da API da Vercel
            const response = await fetch('/api/promocoes');
            const data = await response.json();

            if (data.success && data.promocoes && data.promocoes.length > 0) {
                exibirPromocoes(data.promocoes);
                console.log(`✅ ${data.promocoes.length} promoções carregadas da API`);
            } else {
                // Fallback para promoções de exemplo
                console.log('⚠️ Usando promoções de exemplo');
                exibirPromocoesExemplo();
            }
        } catch (error) {
            console.error('❌ Erro ao carregar promoções:', error);
            // Fallback para promoções de exemplo
            exibirPromocoesExemplo();
        }
    }

    // Função para exibir promoções
    function exibirPromocoes(promocoes) {
        // Limpar container
        promocoesContainer.innerHTML = '';

        // Adicionar cada promoção
        promocoes.forEach(promocao => {
            const card = document.createElement('div');
            card.className = 'group hover:shadow-lg transition-shadow duration-300 border-2 border-yellow-200 bg-white rounded-lg p-6';
            
            card.innerHTML = `
                <div class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mb-4 inline-block">PROMOÇÃO</div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">${promocao.nome}</h4>
                <p class="text-gray-600 mb-4">Oferta especial por tempo limitado!</p>
                <div class="flex items-center justify-between">
                    <span class="text-2xl font-bold text-red-600">${promocao.preco}</span>
                    <button onclick="window.open('https://pedido.anota.ai/loja/nosso-drink-2249630?f=ms', '_blank')" 
                            class="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-semibold text-sm transition-colors">
                        Pedir Agora
                    </button>
                </div>
            `;
            
            promocoesContainer.appendChild(card);
        });
    }

    // Função para exibir promoções de exemplo (fallback)
    function exibirPromocoesExemplo() {
        const promocoesExemplo = [
            {
                nome: "10 Skol Beats GT Long Neck",
                preco: "R$ 49,90"
            },
            {
                nome: "10 Heineken Long Neck",
                preco: "R$ 59,90"
            },
            {
                nome: "1 Fardo HEINEKEN Latão",
                preco: "R$ 65,88"
            }
        ];

        exibirPromocoes(promocoesExemplo);
    }

    // Carregar promoções
    carregarPromocoes();

    // Atualizar promoções a cada 30 minutos
    setInterval(carregarPromocoes, 30 * 60 * 1000);
});

