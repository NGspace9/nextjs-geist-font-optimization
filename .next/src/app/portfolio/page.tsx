import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PortfolioGallery from '@/components/PortfolioGallery'
import { Briefcase, Award, Users, TrendingUp } from 'lucide-react'

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Lançamento Novo Modelo Mercedes-Benz',
      category: 'Corporativo',
      client: 'Mercedes-Benz',
      description: 'Evento de lançamento do novo modelo com painéis de LED curvos de 200m², sonorização premium e iluminação cênica sincronizada. O projeto incluiu transmissão ao vivo para 15 países e experiência imersiva para 500 convidados VIP.',
      image: '/portfolio/mercedes.jpg',
      testimonial: 'A NG Space superou todas as expectativas. O evento foi um marco na história da Mercedes-Benz Brasil.',
      services: ['Painéis de LED Curvos', 'Sonorização Premium', 'Iluminação Cênica', 'Transmissão ao Vivo', 'Assistência Técnica 24h']
    },
    {
      id: 2,
      title: 'Expo Latbus - Feira Internacional',
      category: 'Feira',
      client: 'Latbus Expo',
      description: 'Cobertura completa da maior feira de transporte da América Latina com 15 estandes equipados com painéis de LED, totens interativos e sistema de som ambiente. Atendimento a mais de 50.000 visitantes durante 4 dias.',
      image: '/portfolio/latbus.jpg',
      testimonial: 'Parceria fundamental para o sucesso da feira. Tecnologia de ponta e suporte impecável.',
      services: ['Painéis de LED', 'Totens Interativos', 'Som Ambiente', 'Iluminação Arquitetural', 'Suporte Técnico']
    },
    {
      id: 3,
      title: 'Festival de Música Eletrônica',
      category: 'Show',
      client: 'Electronic Fest',
      description: 'Main stage com painéis de LED de 300m², sistema de som line array para 20.000 pessoas e show de luzes sincronizado. Evento de 12 horas com múltiplos DJs internacionais e efeitos visuais espetaculares.',
      image: '/portfolio/festival.jpg',
      testimonial: 'A produção visual foi o diferencial do festival. Público ficou impressionado com a qualidade.',
      services: ['Painéis de LED Gigantes', 'Line Array', 'Moving Lights', 'Efeitos Especiais', 'Controle DMX']
    },
    {
      id: 4,
      title: 'Congresso Médico Internacional',
      category: 'Corporativo',
      client: 'CBHPM',
      description: 'Evento científico com 8 salas simultâneas equipadas com palestras silenciosas, painéis informativos e sistema de tradução simultânea. Atendimento a 2.000 médicos durante 3 dias com transmissão online.',
      image: '/portfolio/congresso.jpg',
      testimonial: 'Tecnologia essencial para o sucesso do congresso. Qualidade técnica excepcional.',
      services: ['Palestras Silenciosas', 'Tradução Simultânea', 'Painéis Informativos', 'Transmissão Online', 'Suporte Multilíngue']
    },
    {
      id: 5,
      title: 'Expo Center Norte - Automação',
      category: 'Feira',
      client: 'Expo Center Norte',
      description: 'Feira de automação industrial com 50 estandes equipados, central de comando integrada e sistema de comunicação unificado. Projeto incluiu painéis interativos e demonstrações ao vivo de produtos.',
      image: '/portfolio/automacao.jpg',
      testimonial: 'Infraestrutura tecnológica que permitiu demonstrações perfeitas dos produtos.',
      services: ['Painéis Interativos', 'Sistema Integrado', 'Demonstrações ao Vivo', 'Comunicação Unificada', 'Controle Central']
    },
    {
      id: 6,
      title: 'Fashion Week São Paulo',
      category: 'Show',
      client: 'SPFW',
      description: 'Passarela principal com iluminação cênica de última geração, painéis de LED como backdrop e sonorização premium. Evento transmitido ao vivo para o mundo todo com qualidade broadcast.',
      image: '/portfolio/fashion.jpg',
      testimonial: 'A iluminação e cenografia elevaram o nível da São Paulo Fashion Week.',
      services: ['Iluminação Cênica', 'Painéis de LED Backdrop', 'Sonorização Premium', 'Transmissão Broadcast', 'Cenografia Digital']
    },
    {
      id: 7,
      title: 'Lançamento Startup Fintech',
      category: 'Corporativo',
      client: 'FinTech Brasil',
      description: 'Evento de lançamento com hologramas, realidade aumentada e painéis interativos. Experiência imersiva para investidores e mídia especializada com demonstrações tecnológicas ao vivo.',
      image: '/portfolio/fintech.jpg',
      testimonial: 'Inovação tecnológica que impressionou investidores e mídia. Evento memorável.',
      services: ['Hologramas', 'Realidade Aumentada', 'Painéis Interativos', 'Demonstrações ao Vivo', 'Experiência Imersiva']
    },
    {
      id: 8,
      title: 'Casamento de Luxo',
      category: 'Social',
      client: 'Família Silva',
      description: 'Cerimônia e festa com iluminação romântica personalizada, painéis de LED com vídeos do casal e sonorização discreta. Ambiente transformado com projeções arquiteturais e efeitos especiais.',
      image: '/portfolio/casamento.jpg',
      testimonial: 'Realizaram o sonho da nossa filha. Cada detalhe foi perfeito e emocionante.',
      services: ['Iluminação Romântica', 'Vídeos Personalizados', 'Projeções Arquiteturais', 'Sonorização Discreta', 'Efeitos Especiais']
    },
    {
      id: 9,
      title: 'Summit de Tecnologia',
      category: 'Corporativo',
      client: 'Tech Summit',
      description: 'Conferência de tecnologia com 5.000 participantes, múltiplas salas com transmissão simultânea e networking interativo. Painéis de LED informativos e sistema de votação em tempo real.',
      image: '/portfolio/tech-summit.jpg',
      testimonial: 'Infraestrutura tecnológica que permitiu uma experiência única aos participantes.',
      services: ['Transmissão Simultânea', 'Networking Interativo', 'Painéis Informativos', 'Votação em Tempo Real', 'Múltiplas Salas']
    }
  ]

  const stats = [
    {
      icon: Briefcase,
      number: '500+',
      label: 'Projetos Realizados',
      description: 'Eventos de todos os portes e segmentos'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Prêmios Recebidos',
      description: 'Reconhecimento pela excelência'
    },
    {
      icon: Users,
      number: '2M+',
      label: 'Pessoas Impactadas',
      description: 'Audiência total dos eventos'
    },
    {
      icon: TrendingUp,
      number: '98%',
      label: 'Satisfação dos Clientes',
      description: 'Índice de recomendação'
    }
  ]

  const clients = [
    'Mercedes-Benz', 'Latbus Expo', 'Expo Center Norte', 'SPFW', 'CBHPM',
    'Electronic Fest', 'FinTech Brasil', 'Tech Summit', 'Fashion Week',
    'Congresso Médico', 'Automação Expo', 'Startup Brasil'
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 space-pattern opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-orbitron font-bold text-4xl md:text-6xl text-white">
              Nosso <span className="text-ng-blue">Portfólio</span>
            </h1>
            <p className="font-montserrat text-xl text-gray-300 leading-relaxed">
              Conheça alguns dos projetos que transformaram eventos em experiências extraordinárias
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-ng-blue transition-all duration-300 group">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-ng-blue/20 rounded-full flex items-center justify-center group-hover:bg-ng-blue/30 transition-colors duration-300">
                    <stat.icon className="h-8 w-8 text-ng-blue" />
                  </div>
                </div>
                <div className="font-orbitron font-bold text-3xl text-ng-blue group-hover:text-ng-red transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="font-montserrat font-medium text-white">
                  {stat.label}
                </div>
                <div className="font-montserrat text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de Projetos */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white mb-4">
              Projetos em <span className="text-ng-blue">Destaque</span>
            </h2>
            <p className="font-montserrat text-lg text-gray-400 max-w-2xl mx-auto">
              Cada projeto é único e desenvolvido com tecnologia de ponta para superar expectativas
            </p>
          </div>

          <PortfolioGallery items={portfolioItems} />
        </div>
      </section>

      {/* Clientes */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white mb-4">
              Clientes que <span className="text-ng-blue">Confiam</span>
            </h2>
            <p className="font-montserrat text-lg text-gray-400 max-w-2xl mx-auto">
              Empresas e organizações que escolheram a NG Space para seus eventos mais importantes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-ng-blue transition-all duration-300 group">
                <div className="text-center">
                  <div className="font-montserrat font-medium text-gray-300 group-hover:text-ng-blue transition-colors duration-300">
                    {client}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white mb-4">
              O que nossos <span className="text-ng-blue">clientes dizem</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.filter(item => item.testimonial).slice(0, 3).map((item, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-ng-blue transition-all duration-300">
                <div className="space-y-4">
                  <div className="text-4xl text-ng-blue">"</div>
                  <p className="font-montserrat text-gray-300 leading-relaxed italic">
                    {item.testimonial}
                  </p>
                  <div className="border-t border-gray-800 pt-4">
                    <div className="font-montserrat font-medium text-white">
                      {item.client}
                    </div>
                    <div className="font-montserrat text-sm text-gray-400">
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
