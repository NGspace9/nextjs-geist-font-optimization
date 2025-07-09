import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Monitor, Volume2, Lightbulb, Smartphone, Headphones, Wrench, Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Servicos() {
  const services = [
    {
      id: 'paineis-led',
      icon: Monitor,
      title: 'Painéis de LED',
      subtitle: 'Tecnologia visual de última geração',
      description: 'Oferecemos a mais avançada tecnologia em painéis de LED para criar experiências visuais impactantes. Nossos displays proporcionam cores vibrantes, alta resolução e flexibilidade total para qualquer tipo de evento.',
      features: [
        'Painéis LED Flexíveis - Adaptáveis a qualquer formato',
        'Painéis LED Curvos - Para designs inovadores',
        'Tecnologia Borda Infinita - Imagem contínua sem interrupções',
        'Alta Resolução 4K/8K - Qualidade cinematográfica',
        'Controle Remoto - Gerenciamento em tempo real',
        'Instalação Profissional - Equipe especializada'
      ],
      applications: [
        'Eventos Corporativos',
        'Feiras e Exposições',
        'Shows e Concerts',
        'Lançamentos de Produtos',
        'Conferências',
        'Casamentos e Festas'
      ],
      highlight: 'Mais de 1000m² de painéis LED disponíveis'
    },
    {
      id: 'sonorizacao',
      icon: Volume2,
      title: 'Sonorização',
      subtitle: 'Áudio cristalino para todos os ambientes',
      description: 'Sistemas de sonorização profissional que garantem qualidade sonora excepcional em qualquer ambiente. Desde pequenos eventos até grandes produções, oferecemos soluções completas em áudio.',
      features: [
        'Sistemas Line Array - Cobertura uniforme',
        'Microfones Sem Fio - Liberdade total de movimento',
        'Mesa de Som Digital - Controle preciso',
        'Processamento de Áudio - Qualidade profissional',
        'Monitoramento - Retorno perfeito para palestrantes',
        'Gravação Digital - Registro do evento'
      ],
      applications: [
        'Palestras e Seminários',
        'Shows Musicais',
        'Eventos Corporativos',
        'Cerimônias',
        'Teatros',
        'Igrejas'
      ],
      highlight: 'Cobertura para até 10.000 pessoas'
    },
    {
      id: 'iluminacao',
      icon: Lightbulb,
      title: 'Iluminação',
      subtitle: 'Criando atmosferas únicas',
      description: 'Soluções completas em iluminação cênica e arquitetural para criar a atmosfera perfeita. Utilizamos tecnologia LED de última geração com controle DMX para efeitos personalizados.',
      features: [
        'Iluminação LED RGB - Milhões de cores',
        'Moving Lights - Efeitos dinâmicos',
        'Controle DMX - Programação personalizada',
        'Iluminação Arquitetural - Destaque para espaços',
        'Efeitos Especiais - Lasers e strobes',
        'Design Luminotécnico - Projeto personalizado'
      ],
      applications: [
        'Eventos Sociais',
        'Lançamentos',
        'Fashion Shows',
        'Arquitetura',
        'Cenografia',
        'Ambientação'
      ],
      highlight: 'Mais de 500 refletores LED disponíveis'
    },
    {
      id: 'totens',
      icon: Smartphone,
      title: 'Totens Interativos',
      subtitle: 'Engajamento digital inovador',
      description: 'Displays interativos de última geração para engajamento e informação em tempo real. Perfeitos para recepção, cadastros, apresentações e interação com o público.',
      features: [
        'Telas Touch Screen - Interface intuitiva',
        'Conteúdo Dinâmico - Atualizações em tempo real',
        'Design Moderno - Estética premium',
        'Integração Digital - Conectividade total',
        'Software Personalizado - Soluções sob medida',
        'Suporte Técnico - Acompanhamento completo'
      ],
      applications: [
        'Recepção de Eventos',
        'Feiras Comerciais',
        'Museus e Exposições',
        'Shoppings',
        'Hotéis',
        'Aeroportos'
      ],
      highlight: 'Totens de 32" a 86" disponíveis'
    },
    {
      id: 'palestras',
      icon: Headphones,
      title: 'Palestras Silenciosas',
      subtitle: 'Múltiplos eventos simultâneos',
      description: 'Tecnologia de transmissão sem fio que permite múltiplas palestras simultâneas no mesmo espaço. Ideal para eventos com programação paralela e ambientes com restrições acústicas.',
      features: [
        'Múltiplos Canais - Até 8 palestras simultâneas',
        'Fones Profissionais - Conforto e qualidade',
        'Transmissão HD - Áudio cristalino',
        'Alcance Amplo - Cobertura total do evento',
        'Bateria Longa Duração - Até 12 horas',
        'Controle Individual - Volume personalizado'
      ],
      applications: [
        'Congressos Médicos',
        'Eventos Multilíngues',
        'Feiras Educacionais',
        'Workshops',
        'Seminários',
        'Treinamentos'
      ],
      highlight: 'Até 1000 fones simultâneos'
    },
    {
      id: 'assistencia',
      icon: Wrench,
      title: 'Assistência Técnica',
      subtitle: 'Suporte completo 24/7',
      description: 'Equipe técnica especializada disponível 24 horas durante todo o evento. Garantimos funcionamento perfeito de todos os equipamentos com manutenção preventiva e suporte imediato.',
      features: [
        'Equipe Especializada - Técnicos certificados',
        'Suporte 24/7 - Disponibilidade total',
        'Manutenção Preventiva - Evitando problemas',
        'Resposta Rápida - Solução imediata',
        'Backup de Equipamentos - Segurança total',
        'Relatório Técnico - Documentação completa'
      ],
      applications: [
        'Eventos de Longa Duração',
        'Transmissões ao Vivo',
        'Eventos Críticos',
        'Produções Complexas',
        'Eventos Internacionais',
        'Gravações'
      ],
      highlight: 'Tempo de resposta inferior a 5 minutos'
    }
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
              Nossos <span className="text-ng-blue">Serviços</span>
            </h1>
            <p className="font-montserrat text-xl text-gray-300 leading-relaxed">
              Soluções completas em audiovisual para transformar seus eventos em experiências extraordinárias
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Conteúdo */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-ng-blue/20 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-ng-blue" />
                    </div>
                    <div>
                      <h2 className="font-orbitron font-bold text-3xl text-white">
                        {service.title}
                      </h2>
                      <p className="font-montserrat text-ng-blue">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="font-montserrat text-lg text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Destaque */}
                  <div className="bg-ng-blue/10 border border-ng-blue/30 rounded-lg p-4 flex items-center space-x-3">
                    <Star className="h-5 w-5 text-ng-blue" />
                    <span className="font-montserrat font-medium text-ng-blue">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Características */}
                  <div>
                    <h3 className="font-orbitron font-bold text-xl text-white mb-4">
                      Características
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-ng-blue mt-0.5 flex-shrink-0" />
                          <span className="font-montserrat text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    asChild
                    className="bg-ng-blue hover:bg-ng-red text-white font-montserrat font-medium"
                  >
                    <Link href="/contato">Solicitar Orçamento</Link>
                  </Button>
                </div>

                {/* Aplicações */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
                    <h3 className="font-orbitron font-bold text-xl text-white mb-6">
                      Aplicações
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {service.applications.map((application, appIndex) => (
                        <div key={appIndex} className="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-ng-blue/10 hover:border-ng-blue border border-transparent transition-all duration-300">
                          <span className="font-montserrat text-gray-300 text-sm">
                            {application}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-ng-blue/10 to-ng-red/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white">
              Precisa de uma <span className="text-ng-blue">solução personalizada</span>?
            </h2>
            <p className="font-montserrat text-lg text-gray-300">
              Nossa equipe está pronta para desenvolver a solução perfeita para seu evento. 
              Entre em contato e receba um orçamento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-ng-blue hover:bg-ng-red text-white font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
              >
                <Link href="/contato">Solicitar Orçamento</Link>
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
