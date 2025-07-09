'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/portfolio', label: 'Portfólio' },
    { href: '/contato', label: 'Contato' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-montserrat text-white hover:text-ng-blue transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ng-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-ng-blue hover:bg-ng-red text-white font-montserrat font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
            >
              <Link href="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-ng-blue transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800">
            <nav className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-montserrat text-white hover:text-ng-blue transition-colors duration-300 py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-ng-blue hover:bg-ng-red text-white font-montserrat font-medium mt-4 w-full"
              >
                <Link href="/contato" onClick={() => setIsMenuOpen(false)}>
                  Solicitar Orçamento
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
