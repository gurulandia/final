#!/usr/bin/env python3
"""
Script para buscar promoções do site Anota.ai e atualizar o site da Mega Beer
Executa diariamente às 11:00 via cron job
"""

import requests
from bs4 import BeautifulSoup
import json
import re
from datetime import datetime
import os
import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

def buscar_promocoes():
    """Busca as promoções da seção PROMOÇÃO DA SEMANA do site Anota.ai"""
    
    url = "https://pedido.anota.ai/loja/nosso-drink-2249630?f=ms"
    
    # Configurar o Selenium
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    
    driver = None  # Inicializar driver como None
    try:
        # Usar webdriver-manager para gerenciar o driver
        service = Service(ChromeDriverManager().install())
        driver = webdriver.Chrome(service=service, options=chrome_options)
        
        # Fazer requisição para o site
        driver.get(url)
        
        # Esperar o JavaScript carregar - 10 segundos é um começo
        print("Aguardando o carregamento da página (10 segundos)...")
        time.sleep(10)
        
        # Pegar o HTML renderizado
        html_content = driver.page_source

        # Parse do HTML
        soup = BeautifulSoup(html_content, 'html.parser')
        
        promocoes = []
        
        # Buscar seção de promoções
        # Procurar por elementos que contenham "Promoção:" no texto
        promocao_elements = soup.find_all(string=re.compile(r'🔥.*Promoção:.*🔥'))
        
        for element in promocao_elements[:6]:  # Limitar a 6 promoções
            # Extrair informações da promoção
            texto_promocao = element.strip()
            
            # Buscar o preço associado
            parent = element.parent
            preco_element = None
            
            # Procurar por preço nos elementos próximos
            for sibling in parent.find_next_siblings():
                preco_match = re.search(r'R\$\s*(\d+,\d+)', sibling.get_text())
                if preco_match:
                    preco_element = preco_match.group(0)
                    break
            
            if not preco_element:
                # Tentar buscar no próprio elemento pai
                preco_match = re.search(r'R\$\s*(\d+,\d+)', parent.get_text())
                if preco_match:
                    preco_element = preco_match.group(0)
            
            # Extrair nome do produto (remover emojis e "Promoção:")
            nome_produto = re.sub(r'🔥.*Promoção:\s*', '', texto_promocao)
            nome_produto = re.sub(r'\s*🔥.*', '', nome_produto)
            nome_produto = nome_produto.strip()
            
            if nome_produto and preco_element:
                promocoes.append({
                    'nome': nome_produto,
                    'preco': preco_element,
                    'texto_completo': texto_promocao
                })
        
        return promocoes
        
    except Exception as e:
        print(f"Erro ao buscar promoções: {e}")
        return []
    finally:
        if driver:
            driver.quit()

def gerar_json_promocoes(promocoes):
    """Gera uma string JSON com as promoções."""
    if not promocoes:
        # Retorna um array JSON vazio se não houver promoções
        return json.dumps([], indent=4)
    
    # Converte a lista de promoções para JSON
    return json.dumps(promocoes, ensure_ascii=False, indent=4)

def salvar_promocoes(promocoes):
    """Salva as promoções em arquivo JSON."""
    
    json_content = gerar_json_promocoes(promocoes)
    
    # Salvar no diretório public do site com o nome promocoes.json
    json_file_path = os.path.join(os.path.dirname(__file__), 'public', 'promocoes.json')
    
    try:
        with open(json_file_path, 'w', encoding='utf-8') as f:
            f.write(json_content)
        
        print(f"Promoções salvas em: {json_file_path}")
        return True
        
    except Exception as e:
        print(f"Erro ao salvar promoções: {e}")
        return False

def main():
    """Função principal"""
    print(f"[{datetime.now()}] Iniciando busca de promoções...")
    
    # Buscar promoções
    promocoes = buscar_promocoes()
    
    if promocoes:
        print(f"Encontradas {len(promocoes)} promoções:")
        for i, promo in enumerate(promocoes, 1):
            print(f"  {i}. {promo['nome']} - {promo['preco']}")
        
        # Salvar promoções
        if salvar_promocoes(promocoes):
            print("Promocoes atualizadas com sucesso!")
        else:
            print("Erro ao salvar promocoes")
    else:
        print("Nenhuma promocao encontrada")
    
    print(f"[{datetime.now()}] Processo concluído")

if __name__ == "__main__":
    main()
