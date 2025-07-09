import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Rocket } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/sobre', label: 'Sobre' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/portfolio', label: 'Portfólio' },
    { href: '/contato', label: 'Contato' },
  ]

  const services = [
    'Painéis de LED',
    'Sonorização',
    'Iluminação',
    'Totens Interativos',
    'Palestras Silenciosas',
    'Assistência Técnica',
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/logo final sem o fundo.png" 
                  alt="NG Space Logo" 
                  className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ng-blue/10 rounded-full blur-lg group-hover:bg-ng-red/10 transition-colors duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-orbitron font-bold text-xl text-white">
                  NG <span className="text-ng-blue group-hover:text-ng-red transition-colors duration-300">SPACE</span>
                </span>
                <span className="font-montserrat text-xs text-gray-400 -mt-1">AUDIOVISUAL</span>
              </div>
            </Link>
            <p className="text-gray-400 font-montserrat text-sm leading-relaxed">
              Um universo de possibilidades visuais. Soluções audiovisuais para eventos inesquecíveis.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-ng-blue hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-bold text-lg text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-ng-blue transition-colors duration-300 font-montserrat"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-bold text-lg text-white">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 font-montserrat text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-bold text-lg text-white">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-ng-blue" />
                <span className="text-gray-400 font-montserrat text-sm">
                  (11) 99999-9999
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-ng-blue" />
                <span className="text-gray-400 font-montserrat text-sm">
                  contato@ngspace.com.br
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-ng-blue mt-0.5" />
                <span className="text-gray-400 font-montserrat text-sm">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-montserrat text-sm">
              © {currentYear} NG Space. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacidade"
                className="text-gray-400 hover:text-ng-blue transition-colors duration-300 font-montserrat text-sm"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-gray-400 hover:text-ng-blue transition-colors duration-300 font-montserrat text-sm"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
