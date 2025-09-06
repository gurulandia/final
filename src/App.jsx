import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Phone, 
  MapPin, 
  Clock, 
  Truck, 
  Store, 
  Instagram, 
  Menu, 
  X,
  MessageCircle,
  Wine,
  Beer,
  Martini,
  Coffee
} from 'lucide-react'
import './App.css'

// Importar imagens
import heroImage from './assets/cDTF0HRVaIFk.jpg'
import beerBottleImage from './assets/aUdQapnu4n1d.png'
import beerGlassImage from './assets/sBtz6HQJOh5D.jpg'
import storeImage from './assets/fachada-megabeer.jpg'
import logoImage from './assets/Logo1APNG.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // WhatsApp link
  const whatsappLink = "https://wa.me/5531997378237?text=Olá! Gostaria de fazer um pedido."
  const cardapioLink = "https://app.anota.ai/m/KEJSHG-6w"

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logoImage} alt="Mega Beer Logo" className="w-12 h-12 object-contain" />
              <div>
                <h1 className="text-2xl font-bold text-black">Mega Beer</h1>
                <p className="text-xs text-gray-600">Distribuidora de Bebidas</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-yellow-600 transition-colors">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-yellow-600 transition-colors">Sobre</a>
              <a href="#produtos" className="text-gray-700 hover:text-yellow-600 transition-colors">Produtos</a>
              <a href="#servicos" className="text-gray-700 hover:text-yellow-600 transition-colors">Serviços</a>
              <a href="#contato" className="text-gray-700 hover:text-yellow-600 transition-colors">Contato</a>
            </nav>

            {/* Contact Info & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4 text-yellow-600" />
                  <span className="text-gray-700">(31) 99737-8237</span>
                </div>
                <Button 
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 mt-4">
                <a href="#home" className="text-gray-700 hover:text-yellow-600 transition-colors">Início</a>
                <a href="#sobre" className="text-gray-700 hover:text-yellow-600 transition-colors">Sobre</a>
                <a href="#produtos" className="text-gray-700 hover:text-yellow-600 transition-colors">Produtos</a>
                <a href="#servicos" className="text-gray-700 hover:text-yellow-600 transition-colors">Serviços</a>
                <a href="#contato" className="text-gray-700 hover:text-yellow-600 transition-colors">Contato</a>
                <div className="flex items-center space-x-2 text-sm pt-2">
                  <Phone className="w-4 h-4 text-yellow-600" />
                  <span className="text-gray-700">(31) 99737-8237</span>
                </div>
                <Button 
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="bg-green-500 hover:bg-green-600 text-white w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Suas bebidas favoritas,
            <span className="block text-yellow-400">sempre geladas</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fazer Pedido
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open(cardapioLink, '_blank')}
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
            >
              Ver Cardápio
            </Button>
          </div>
          <div className="mt-8">
            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
              <Truck className="w-4 h-4 mr-2" />
              Delivery grátis acima de R$ 50
            </Badge>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Sobre nós 🍻</h3>
              <div className="text-lg text-gray-600 max-w-4xl mx-auto space-y-4">
                <p>
                  Fundada em 2022, nossa distribuidora nasceu com um único propósito: levar bons momentos até você! 🎉
                </p>
                <p>
                  Mais do que vender bebidas, acreditamos que cada garrafa carrega histórias, encontros e sorrisos.
                </p>
                <p>
                  Começamos pequenos, com muita garra e paixão pelo que fazemos, e hoje seguimos crescendo lado a lado com nossos clientes e parceiros. Aqui, qualidade, agilidade e preço justo não são promessa, são compromisso!
                </p>
                <p>
                  Seja para o churrasco de domingo, aquela festa surpresa, ou até para abastecer seu negócio, pode contar com a gente. Afinal, nada melhor do que brindar a vida com quem faz parte dela! 🥂✨
                </p>
                <p className="font-semibold text-yellow-600">
                  Distribuidora Mega Beer – desde 2022 abastecendo momentos especiais!
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={storeImage} 
                  alt="Fachada Mega Beer" 
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  Por que escolher a Mega Beer?
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Beer className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Bebidas Sempre Geladas</h5>
                      <p className="text-gray-600">Mantemos todos os nossos produtos na temperatura ideal para seu consumo.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Truck className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Entrega Rápida</h5>
                      <p className="text-gray-600">Delivery rápido para sua comodidade.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Wine className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Variedade Completa</h5>
                      <p className="text-gray-600">Cervejas, vinhos, destilados e bebidas sem álcool das melhores marcas.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Atendimento Personalizado</h5>
                      <p className="text-gray-600">Equipe dedicada para atender suas necessidades com excelência.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promoções */}
      <section id="promocoes" className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">🔥 Promoções da Semana</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofertas especiais que você não pode perder! Produtos selecionados com preços imperdíveis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="promocoes-container">
              {/* As promoções serão carregadas aqui dinamicamente */}
              <Card className="group hover:shadow-lg transition-shadow duration-300 border-2 border-yellow-200">
                <CardContent className="p-6">
                  <Badge className="bg-red-500 text-white mb-4">PROMOÇÃO</Badge>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Carregando promoções...</h4>
                  <p className="text-gray-600 mb-4">Aguarde enquanto buscamos as melhores ofertas para você!</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">Em breve</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                onClick={() => window.open(cardapioLink, '_blank')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4"
              >
                Ver Todas as Promoções
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossos Produtos</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Uma seleção completa das melhores bebidas, sempre com qualidade garantida.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                    <Beer className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Cervejas</h4>
                  <p className="text-gray-600 mb-4">Nacionais, importadas e artesanais. Sempre geladas e fresquinhas.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Brahma, Skol, Antarctica</li>
                    <li>• Heineken, Corona, Stella</li>
                    <li>• Cervejas artesanais</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                    <Wine className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Vinhos</h4>
                  <p className="text-gray-600 mb-4">Tintos, brancos, rosés e espumantes para todas as ocasiões.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Vinhos nacionais</li>
                    <li>• Vinhos importados</li>
                    <li>• Espumantes e champagnes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                    <Martini className="w-8 h-8 text-amber-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Destilados</h4>
                  <p className="text-gray-600 mb-4">Whisky, vodka, cachaça, gin e muito mais das melhores marcas.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Whisky e bourbon</li>
                    <li>• Vodka e gin</li>
                    <li>• Cachaças premium</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <Coffee className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Sem Álcool</h4>
                  <p className="text-gray-600 mb-4">Refrigerantes, águas, sucos e energéticos para refrescar.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Coca-Cola, Pepsi, Guaraná</li>
                    <li>• Águas e sucos naturais</li>
                    <li>• Red Bull e energéticos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                onClick={() => window.open(cardapioLink, '_blank')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Ver Cardápio Completo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos a melhor experiência em compra de bebidas, do pedido à entrega.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Truck className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Delivery</h4>
                  <p className="text-gray-600 mb-6">
                    Entrega rápida em até 30 minutos para toda região de Justinópolis e Ribeirão das Neves.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>• Raio de entrega: 8km</p>
                    <p>• Entrega grátis acima de R$ 50</p>
                    <p>• Pagamento na entrega ou PIX</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Store className="w-10 h-10 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Retirada na Loja</h4>
                  <p className="text-gray-600 mb-6">
                    Retire seu pedido diretamente em nossa loja com desconto especial.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>• 5% de desconto na retirada</p>
                    <p>• Pedido pronto em 15 minutos</p>
                    <p>• Estacionamento gratuito</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-yellow-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Horários</h4>
                  <p className="text-gray-600 mb-6">
                    Funcionamos todos os dias com horários estendidos para sua comodidade.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>• Seg-Qui: 09:00 às 00:00</p>
                    <p>• Sex-Sáb: 09:00 às 02:00</p>
                    <p>• Domingo: 09:00 às 22:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estamos sempre prontos para atender você. Entre em contato conosco!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-8">Informações de Contato</h4>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Endereço</h5>
                      <p className="text-gray-600">
                        Av. Denise Cristina da Rocha, 2315<br />
                        Justinópolis, Ribeirão das Neves - MG
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Telefone / WhatsApp</h5>
                      <p className="text-gray-600">(31) 99737-8237</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Instagram</h5>
                      <a 
                        href="https://www.instagram.com/megabeerbh/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-700 transition-colors"
                      >
                        @megabeerbh
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h5>
                      <div className="text-gray-600 space-y-1">
                        <p>Segunda a Quinta: 09:00 às 00:00</p>
                        <p>Sexta e Sábado: 09:00 às 02:00</p>
                        <p>Domingo: 09:00 às 22:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <Button 
                    onClick={() => window.open(whatsappLink, '_blank')}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </Button>
                  <Button 
                    onClick={() => window.open(cardapioLink, '_blank')}
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                    size="lg"
                  >
                    Ver Cardápio Completo
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-8">Localização</h4>
                <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Mapa da Localização</p>
                    <p className="text-sm">Av. Denise Cristina da Rocha, 2315</p>
                    <p className="text-sm">Justinópolis, Ribeirão das Neves - MG</p>
                    <p className="text-xs mt-2 text-yellow-600">Área de entrega: 8km de raio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Beer className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">Mega Beer</h5>
                    <p className="text-xs text-gray-400">Distribuidora de Bebidas</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Suas bebidas favoritas, sempre geladas. Entregamos qualidade e frescor em Justinópolis e região.
                </p>
              </div>

              <div>
                <h6 className="font-semibold mb-4">Links Rápidos</h6>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#home" className="hover:text-yellow-400 transition-colors">Início</a></li>
                  <li><a href="#sobre" className="hover:text-yellow-400 transition-colors">Sobre</a></li>
                  <li><a href="#produtos" className="hover:text-yellow-400 transition-colors">Produtos</a></li>
                  <li><a href="#servicos" className="hover:text-yellow-400 transition-colors">Serviços</a></li>
                  <li><a href="#contato" className="hover:text-yellow-400 transition-colors">Contato</a></li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold mb-4">Contato</h6>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>(31) 99737-8237</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Justinópolis, Ribeirão das Neves</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Instagram className="w-4 h-4" />
                    <a href="https://www.instagram.com/megabeerbh/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                      @megabeerbh
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold mb-4">Horários</h6>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Seg-Qui: 09:00 às 00:00</li>
                  <li>Sex-Sáb: 09:00 às 02:00</li>
                  <li>Domingo: 09:00 às 22:00</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 Mega Beer - Distribuidora de Bebidas. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => window.open(whatsappLink, '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}

export default App

