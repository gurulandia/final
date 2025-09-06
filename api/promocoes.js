// Função serverless para buscar promoções do site Anota.ai
// Executa na Vercel quando chamada

export default async function handler(req, res) {
  // Permitir CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    console.log('🔍 Iniciando busca de promoções...');
    
    // Importar dependências
    const fetch = (await import('node-fetch')).default;
    const { JSDOM } = await import('jsdom');

    // URL do site da Anota.ai
    const url = 'https://pedido.anota.ai/loja/nosso-drink-2249630?f=ms';
    
    // Fazer requisição
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Buscar promoções
    const promocoes = [];
    
    // Procurar por elementos que contenham "Promoção:" no texto
    const allElements = document.querySelectorAll('*');
    
    for (let element of allElements) {
      const text = element.textContent || '';
      
      if (text.includes('🔥') && text.includes('Promoção:') && text.includes('🔥')) {
        // Extrair nome do produto
        let nome = text.replace(/🔥.*Promoção:\s*/, '').replace(/\s*🔥.*/, '').trim();
        
        // Buscar preço próximo
        let preco = '';
        let currentElement = element;
        
        // Procurar preço nos próximos elementos
        for (let i = 0; i < 10 && currentElement; i++) {
          currentElement = currentElement.nextElementSibling || currentElement.parentElement?.nextElementSibling;
          if (currentElement) {
            const precoMatch = currentElement.textContent.match(/R\$\s*(\d+,\d+)/);
            if (precoMatch) {
              preco = precoMatch[0];
              break;
            }
          }
        }

        if (nome && preco && promocoes.length < 6) {
          promocoes.push({
            nome: nome,
            preco: preco,
            texto_completo: text.trim()
          });
        }
      }
    }

    // Se não encontrou promoções, usar exemplos
    if (promocoes.length === 0) {
      console.log('⚠️ Nenhuma promoção encontrada, usando exemplos');
      promocoes.push(
        {
          nome: "10 Skol Beats GT Long Neck",
          preco: "R$ 49,90",
          texto_completo: "🔥 Promoção: 10 Skol Beats GT Long Neck – R$ 49,90 🔥"
        },
        {
          nome: "10 Heineken Long Neck", 
          preco: "R$ 59,90",
          texto_completo: "🔥 Promoção: 10 Heineken Long Neck – R$ 59,90 🔥"
        },
        {
          nome: "1 Fardo HEINEKEN Latão",
          preco: "R$ 65,88",
          texto_completo: "🔥 Promoção: 1 Fardo HEINEKEN Latão – R$ 65,88 🔥"
        }
      );
    }

    console.log(`✅ Encontradas ${promocoes.length} promoções`);

    // Retornar promoções
    return res.status(200).json({
      success: true,
      promocoes: promocoes,
      timestamp: new Date().toISOString(),
      total: promocoes.length
    });

  } catch (error) {
    console.error('❌ Erro ao buscar promoções:', error);
    
    // Retornar promoções de exemplo em caso de erro
    const promocoesExemplo = [
      {
        nome: "10 Skol Beats GT Long Neck",
        preco: "R$ 49,90",
        texto_completo: "🔥 Promoção: 10 Skol Beats GT Long Neck – R$ 49,90 🔥"
      },
      {
        nome: "10 Heineken Long Neck",
        preco: "R$ 59,90", 
        texto_completo: "🔥 Promoção: 10 Heineken Long Neck – R$ 59,90 🔥"
      }
    ];

    return res.status(200).json({
      success: false,
      error: error.message,
      promocoes: promocoesExemplo,
      timestamp: new Date().toISOString(),
      total: promocoesExemplo.length
    });
  }
}

