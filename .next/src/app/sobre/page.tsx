import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Rocket, Target, Eye, Heart, Users, Award, Clock, Shield } from 'lucide-react'

export default function Sobre() {
  const timeline = [
    {
      year: '2014',
      title: 'Fundação da NG Space',
      description: 'Início das atividades com foco em soluções audiovisuais inovadoras.'
    },
    {
      year: '2016',
      title: 'Primeiro Grande Evento',
      description: 'Participação na Expo Center Norte com painéis de LED de última geração.'
    },
    {
      year: '2018',
      title: 'Expansão dos Serviços',
      description: 'Inclusão de sonorização profissional e iluminação cênica.'
    },
    {
      year: '2020',
      title: 'Inovação Digital',
      description: 'Lançamento dos totens interativos e palestras silenciosas.'
    },
    {
      year: '2022',
      title: 'Parceria Mercedes Benz',
      description: 'Projeto exclusivo para eventos corporativos de grande porte.'
    },
    {
      year: '2024',
      title: 'Liderança no Mercado',
      description: 'Reconhecimento como referência em soluções audiovisuais.'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Transformar eventos em experiências visuais extraordinárias através de tecnologia de ponta e criatividade.'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser a empresa líder em soluções audiovisuais, reconhecida pela inovação e excelência no atendimento.'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Inovação, qualidade, compromisso, transparência e paixão pelo que fazemos.'
    }
  ]

  const team = [
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais com mais de 10 anos de experiência no mercado audiovisual.'
    },
    {
      icon: Award,
      title: 'Certificações',
      description: 'Técnicos certificados pelos principais fabricantes de equipamentos.'
    },
    {
      icon: Clock,
      title: 'Disponibilidade',
      description: 'Suporte técnico 24/7 durante a realização dos eventos.'
    },
    {
      icon: Shield,
      title: 'Confiabilidade',
      description: 'Mais de 500 eventos realizados com 100% de satisfação dos clientes.'
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
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Rocket className="h-16 w-16 text-ng-blue animate-float" />
                <div className="absolute inset-0 bg-ng-blue/20 rounded-full blur-xl"></div>
              </div>
            </div>
            <h1 className="font-orbitron font-bold text-4xl md:text-6xl text-white">
              Sobre a <span className="text-ng-blue">NG Space</span>
            </h1>
            <p className="font-montserrat text-xl text-gray-300 leading-relaxed">
              Uma jornada de mais de 10 anos transformando eventos em experiências visuais extraordinárias
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white">
                Nossa <span className="text-ng-blue">História</span>
              </h2>
              <p className="font-montserrat text-lg text-gray-300 leading-relaxed">
                A NG Space nasceu em 2014 com o sonho de revolucionar o mercado de eventos através 
                da tecnologia audiovisual. Começamos como uma pequena empresa especializada em 
                painéis de LED e hoje somos referência nacional em soluções completas para eventos.
              </p>
              <p className="font-montserrat text-gray-400 leading-relaxed">
                Nossa trajetória é marcada pela constante busca por inovação e pela paixão em 
                superar expectativas. Cada projeto é uma oportunidade de criar algo único e 
                memorável, sempre com o compromisso de entregar excelência em cada detalhe.
              </p>
              <p className="font-montserrat text-gray-400 leading-relaxed">
                Hoje, com mais de 500 eventos realizados e uma equipe de especialistas, 
                continuamos nossa missão de transformar ideias em realidades visuais 
                extraordinárias, sempre explorando novos horizontes tecnológicos.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-ng-blue/20 to-ng-red/20 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="font-orbitron font-bold text-6xl text-ng-blue">10+</div>
                  <div className="font-montserrat text-xl text-white">Anos de Experiência</div>
                  <div className="font-orbitron font-bold text-4xl text-ng-red">500+</div>
                  <div className="font-montserrat text-lg text-white">Eventos Realizados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white mb-4">
              Nossos <span className="text-ng-blue">Princípios</span>
            </h2>
            <p className="font-montserrat text-lg text-gray-400 max-w-2xl mx-auto">
              Os valores que nos guiam em cada projeto e relacionamento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-6 p-8 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-ng-blue transition-all duration-300 group">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-ng-blue/20 rounded-full flex items-center justify-center group-hover:bg-ng-blue/30 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-ng-blue" />
                  </div>
                </div>
                <h3 className="font-orbitron font-bold text-xl text-white group-hover:text-ng-blue transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="font-montserrat text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linha do Tempo */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white mb-4">
              Nossa <span className="text-ng-blue">Trajetória</span>
            </h2>
            <p className="font-montserrat text-lg text-gray-400 max-w-2xl mx-auto">
              Marcos importantes da nossa jornada de crescimento e inovação
            </p>
          </div>

          <div className="relative">
            {/* Linha central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-ng-blue to-ng-red"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 hover:border-ng-blue transition-all duration-300 group">
                      <div className="font-orbitron font-bold text-2xl text-ng-blue mb-2 group-hover:text-ng-red transition-colors duration-300">
                        {item.year}
                      </div>
                      <h3 className="font-orbitron font-bold text-lg text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="font-montserrat text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Ponto na linha */}
                  <div className="relative z-10 w-4 h-4 bg-ng-blue rounded-full border-4 border-black"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white mb-4">
              Nossa <span className="text-ng-blue">Equipe</span>
            </h2>
            <p className="font-montserrat text-lg text-gray-400 max-w-2xl mx-auto">
              Profissionais especializados comprometidos com a excelência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((item, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-ng-blue transition-all duration-300 group">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-ng-blue/20 rounded-full flex items-center justify-center group-hover:bg-ng-blue/30 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-ng-blue" />
                  </div>
                </div>
                <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-ng-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-montserrat text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
