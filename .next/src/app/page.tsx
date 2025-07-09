import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import { Monitor, Volume2, Lightbulb, Smartphone, Headphones, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      iconName: 'Monitor',
      title: 'Painéis de LED',
      description: 'Tecnologia de ponta em displays LED para impacto visual máximo em seus eventos.',
      features: ['Painéis Flexíveis', 'Painéis Curvos', 'Borda Infinita', 'Alta Resolução'],
      href: '/servicos#paineis-led'
    },
    {
      iconName: 'Volume2',
      title: 'Sonorização',
      description: 'Sistemas de áudio profissionais para garantir qualidade sonora excepcional.',
      features: ['Som Cristalino', 'Cobertura Total', 'Equipamentos Premium', 'Técnicos Especializados'],
      href: '/servicos#sonorizacao'
    },
    {
      iconName: 'Lightbulb',
      title: 'Iluminação',
      description: 'Soluções de iluminação cênica e arquitetural para criar atmosferas únicas.',
      features: ['LED Profissional', 'Efeitos Especiais', 'Controle DMX', 'Design Personalizado'],
      href: '/servicos#iluminacao'
    },
    {
      iconName: 'Smartphone',
      title: 'Totens Interativos',
      description: 'Displays interativos para engajamento e informação em tempo real.',
      features: ['Touch Screen', 'Conteúdo Dinâmico', 'Integração Digital', 'Design Moderno'],
      href: '/servicos#totens'
    },
    {
      iconName: 'Headphones',
      title: 'Palestras Silenciosas',
      description: 'Tecnologia de transmissão sem fio para eventos simultâneos.',
      features: ['Múltiplos Canais', 'Qualidade HD', 'Fones Profissionais', 'Alcance Amplo'],
      href: '/servicos#palestras'
    },
    {
      iconName: 'Wrench',
      title: 'Assistência Técnica',
      description: 'Suporte técnico completo durante todo o evento.',
      features: ['Equipe Especializada', 'Suporte 24h', 'Manutenção Preventiva', 'Resposta Rápida'],
      href: '/servicos#assistencia'
    }
  ]

  const stats = [
    { number: '500+', label: 'Eventos Realizados' },
    { number: '10+', label: 'Anos de Experiência' },
    { number: '100+', label: 'Clientes Satisfeitos' },
    { number: '24/7', label: 'Suporte Técnico' }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Seção de Destaques */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white mb-4">
              Nossos <span className="text-ng-blue">Serviços</span>
            </h2>
            <p className="font-montserrat text-lg text-gray-400 max-w-2xl mx-auto">
              Soluções completas em audiovisual para transformar seus eventos em experiências memoráveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg"
              className="bg-ng-blue hover:bg-ng-red text-white font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="font-orbitron font-bold text-3xl md:text-4xl text-ng-blue group-hover:text-ng-red transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="font-montserrat text-gray-400 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sobre Resumida */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white">
                Sobre a <span className="text-ng-blue">NG Space</span>
              </h2>
              <p className="font-montserrat text-lg text-gray-300 leading-relaxed">
                Há mais de 10 anos no mercado, a NG Space é referência em soluções audiovisuais para eventos. 
                Nossa missão é transformar ideias em experiências visuais extraordinárias.
              </p>
              <p className="font-montserrat text-gray-400 leading-relaxed">
                Com uma equipe especializada e equipamentos de última geração, oferecemos desde painéis de LED 
                flexíveis até sistemas de sonorização profissional, garantindo que cada evento seja único e inesquecível.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-ng-blue hover:bg-ng-red text-white font-montserrat font-medium"
                >
                  <Link href="/sobre">Conheça Nossa História</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-ng-blue text-ng-blue hover:bg-ng-blue hover:text-white font-montserrat font-medium"
                >
                  <Link href="/portfolio">Ver Nossos Projetos</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-ng-blue/20 to-ng-red/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Monitor className="h-24 w-24 text-ng-blue mx-auto animate-float" />
                  <p className="font-orbitron font-bold text-xl text-white">
                    Tecnologia<br />
                    <span className="text-ng-blue">Espacial</span>
                  </p>
                </div>
              </div>
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-ng-red rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ng-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-gradient-to-r from-ng-blue/10 to-ng-red/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white">
              Pronto para criar algo <span className="text-ng-blue">extraordinário</span>?
            </h2>
            <p className="font-montserrat text-lg text-gray-300">
              Entre em contato conosco e descubra como podemos transformar seu próximo evento 
              em uma experiência visual inesquecível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-ng-blue hover:bg-ng-red text-white font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
              >
                <Link href="/contato">Solicitar Orçamento Gratuito</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/portfolio">Ver Nossos Cases</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
