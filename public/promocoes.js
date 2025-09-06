
// Atualizar promoções na página
document.addEventListener('DOMContentLoaded', function() {
    const promocoesContainer = document.getElementById('promocoes-container');
    if (!promocoesContainer) return;
    
    const promocoes = [
    {
        "nome": "10 Skol Beats GT Long Neck – R$ 49,90",
        "preco": "R$ 49,90",
        "texto_completo": "🔥 Promoção: 10 Skol Beats GT Long Neck – R$ 49,90 🔥"
    },
    {
        "nome": "10 Skol Beats SENSES Long Neck – R$ 49,90",
        "preco": "R$ 49,90",
        "texto_completo": "🔥 Promoção: 10 Skol Beats SENSES Long Neck – R$ 49,90 🔥"
    },
    {
        "nome": "10 Heineken Long Neck – R$ 59,90",
        "preco": "R$ 59,90",
        "texto_completo": "🔥 Promoção: 10 Heineken Long Neck – R$ 59,90 🔥"
    },
    {
        "nome": "1 Fardo HEINEKEN Latão – R$ 65,88 (unidade por R$ 5,49)",
        "preco": "R$ 65,88",
        "texto_completo": "🔥 Promoção: 1 Fardo HEINEKEN Latão – R$ 65,88 (unidade por R$ 5,49) 🔥"
    }
];
    
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
                <button onclick="window.open('https://pedido.anota.ai/', '_blank')" 
                        class="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-semibold">
                    Pedir Agora
                </button>
            </div>
        `;
        
        promocoesContainer.appendChild(card);
    });
    
    console.log('Promoções atualizadas:', promocoes.length);
});
