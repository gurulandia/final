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
    """Busca os 12 primeiros itens do cardápio, incluindo imagens."""
    
    url = "https://pedido.anota.ai/loja/nosso-drink-2249630?f=ms"
    
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    
    driver = None
    try:
        service = Service(ChromeDriverManager().install())
        driver = webdriver.Chrome(service=service, options=chrome_options)
        
        driver.get(url)
        print("Aguardando o carregamento da página (10 segundos)...")
        time.sleep(10)
        
        html_content = driver.page_source

        soup = BeautifulSoup(html_content, 'html.parser')
        
        promocoes = []
        
        item_cards = soup.find_all('div', class_='item-card')[:12] # Pega os 12 primeiros
        print(f"Encontrados {len(item_cards)} itens no total (limitado a 12).")
        
        for card in item_cards:
            nome_element = card.find('h3', class_='title')
            preco_element = card.find('p', class_='price-value')
            img_element = card.find('img') # Encontra a tag de imagem

            if nome_element and preco_element:
                nome = nome_element.get_text(strip=True)
                preco = preco_element.get_text(strip=True).replace("R$\xa0", "R$ ")
                imagem = img_element['src'] if img_element and 'src' in img_element.attrs else None

                promocoes.append({
                    'nome': nome.strip(),
                    'preco': preco,
                    'imagem': imagem
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
        return json.dumps([], indent=4)
    return json.dumps(promocoes, ensure_ascii=False, indent=4)

def salvar_promocoes(promocoes):
    """Salva as promoções em arquivo JSON."""
    json_content = gerar_json_promocoes(promocoes)
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
    promocoes = buscar_promocoes()
    
    if promocoes:
        print(f"Encontradas {len(promocoes)} promoções:")
        for i, promo in enumerate(promocoes, 1):
            try:
                print(f"  {i}. {promo['nome']} - {promo['preco']}")
            except UnicodeEncodeError:
                nome_safe = promo['nome'].encode('ascii', 'ignore').decode('ascii')
                preco_safe = promo['preco'].encode('ascii', 'ignore').decode('ascii')
                print(f"  {i}. {nome_safe} - {preco_safe}")
        
        if salvar_promocoes(promocoes):
            print("Promocoes atualizadas com sucesso!")
        else:
            print("Erro ao salvar promocoes")
    else:
        print("Nenhuma promocao encontrada")
    
    print(f"[{datetime.now()}] Processo concluído")

if __name__ == "__main__":
    main()