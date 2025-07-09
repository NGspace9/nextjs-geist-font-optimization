import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin, Clock, MessageCircle, Headphones } from 'lucide-react'

export default function Contato() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 99999-9999',
      description: 'Atendimento comercial',
      action: 'tel:+5511999999999'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@ngspace.com.br',
      description: 'Resposta em até 2 horas',
      action: 'mailto:contato@ngspace.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'São Paulo, SP',
      description: 'Atendemos todo o Brasil',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg - Sex: 8h às 18h',
      description: 'Suporte 24h em eventos',
      action: '#'
    }
  ]

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Atendimento rápido via WhatsApp',
      action: 'https://wa.me/5511999999999',
      color: 'text-green-500'
    },
    {
      icon: Headphones,
      title: 'Suporte Técnico',
      description: 'Emergências durante eventos',
      action: 'tel:+5511999999999',
      color: 'text-ng-red'
    }
  ]

  const faqs = [
    {
      question: 'Qual o prazo para receber um orçamento?',
      answer: 'Enviamos orçamentos detalhados em até 24 horas após o recebimento da solicitação.'
    },
    {
      question: 'Vocês atendem em todo o Brasil?',
      answer: 'Sim, atendemos em todo território nacional. Para eventos fora de São Paulo, incluímos custos de deslocamento.'
    },
    {
      question: 'É possível agendar uma visita técnica?',
      answer: 'Sim, oferecemos visitas técnicas gratuitas para eventos de grande porte ou projetos complexos.'
    },
    {
      question: 'Vocês oferecem suporte durante o evento?',
      answer: 'Sim, nossa equipe técnica permanece no local durante todo o evento garantindo funcionamento perfeito.'
    },
    {
      question: 'Qual o prazo mínimo para contratação?',
      answer: 'Recomendamos pelo menos 15 dias de antecedência, mas atendemos emergências quando possível.'
    },
    {
      question: 'Vocês trabalham com locação ou venda?',
      answer: 'Trabalhamos principalmente com locação de equipamentos, mas também oferecemos venda para clientes corporativos.'
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
              Entre em <span className="text-ng-blue">Contato</span>
            </h1>
            <p className="font-montserrat text-xl text-gray-300 leading-relaxed">
              Vamos transformar seu próximo evento em uma experiência extraordinária
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.action}
                className="group bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-ng-blue transition-all duration-300 transform hover:scale-105 text-center space-y-4"
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-ng-blue/20 rounded-full flex items-center justify-center group-hover:bg-ng-blue/30 transition-colors duration-300">
                    <contact.icon className="h-8 w-8 text-ng-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-ng-blue transition-colors duration-300">
                    {contact.title}
                  </h3>
                  <p className="font-montserrat font-medium text-gray-300 mt-2">
                    {contact.info}
                  </p>
                  <p className="font-montserrat text-sm text-gray-400 mt-1">
                    {contact.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Canais de Suporte */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => (
              <a
                key={index}
                href={channel.action}
                className="group bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-ng-blue transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-ng-blue/20 transition-colors duration-300">
                    <channel.icon className={`h-8 w-8 ${channel.color} group-hover:text-ng-blue transition-colors duration-300`} />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold text-xl text-white group-hover:text-ng-blue transition-colors duration-300">
                      {channel.title}
                    </h3>
                    <p className="font-montserrat text-gray-400">
                      {channel.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <div className="mb-8">
                <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white mb-4">
                  Solicite seu <span className="text-ng-blue">Orçamento</span>
                </h2>
                <p className="font-montserrat text-lg text-gray-400">
                  Preencha o formulário abaixo e receba um orçamento personalizado em até 24 horas.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Informações Adicionais */}
            <div className="space-y-8">
              {/* Por que escolher a NG Space */}
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
                <h3 className="font-orbitron font-bold text-2xl text-white mb-6">
                  Por que escolher a <span className="text-ng-blue">NG Space</span>?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ng-blue rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-montserrat font-medium text-white">Experiência Comprovada</h4>
                      <p className="font-montserrat text-sm text-gray-400">Mais de 10 anos no mercado e 500+ eventos realizados</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ng-blue rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-montserrat font-medium text-white">Tecnologia de Ponta</h4>
                      <p className="font-montserrat text-sm text-gray-400">Equipamentos de última geração e soluções inovadoras</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ng-blue rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-montserrat font-medium text-white">Suporte Completo</h4>
                      <p className="font-montserrat text-sm text-gray-400">Equipe técnica especializada disponível 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ng-blue rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-montserrat font-medium text-white">Atendimento Personalizado</h4>
                      <p className="font-montserrat text-sm text-gray-400">Soluções sob medida para cada tipo de evento</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processo de Atendimento */}
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
                <h3 className="font-orbitron font-bold text-2xl text-white mb-6">
                  Como <span className="text-ng-blue">Funciona</span>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-ng-blue rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-montserrat font-medium text-white">Solicitação</h4>
                      <p className="font-montserrat text-sm text-gray-400">Envie sua solicitação pelo formulário ou WhatsApp</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-ng-blue rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-montserrat font-medium text-white">Análise</h4>
                      <p className="font-montserrat text-sm text-gray-400">Nossa equipe analisa suas necessidades</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-ng-blue rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-montserrat font-medium text-white">Proposta</h4>
                      <p className="font-montserrat text-sm text-gray-400">Enviamos orçamento detalhado em até 24h</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-ng-blue rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-montserrat font-medium text-white">Execução</h4>
                      <p className="font-montserrat text-sm text-gray-400">Realizamos seu evento com excelência</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white mb-4">
              Perguntas <span className="text-ng-blue">Frequentes</span>
            </h2>
            <p className="font-montserrat text-lg text-gray-400 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços e processos
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-gray-900/50 rounded-xl border border-gray-800 hover:border-ng-blue transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-montserrat font-medium text-white group-hover:text-ng-blue transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="w-6 h-6 bg-ng-blue/20 rounded-full flex items-center justify-center group-hover:bg-ng-blue/30 transition-colors duration-300">
                    <span className="text-ng-blue text-sm">+</span>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="font-montserrat text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa (Placeholder) */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white mb-4">
              Nossa <span className="text-ng-blue">Localização</span>
            </h2>
            <p className="font-montserrat text-lg text-gray-400">
              Estamos localizados em São Paulo, mas atendemos todo o Brasil
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 text-center">
            <div className="aspect-video bg-gradient-to-br from-ng-blue/10 to-ng-red/10 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-16 w-16 text-ng-blue mx-auto" />
                <div>
                  <h3 className="font-orbitron font-bold text-2xl text-white">São Paulo, SP</h3>
                  <p className="font-montserrat text-gray-400">Atendemos todo o território nacional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
