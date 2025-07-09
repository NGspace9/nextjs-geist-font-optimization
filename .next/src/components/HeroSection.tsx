'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  const fullText = 'Um universo de possibilidades visuais'

  useEffect(() => {
    if (isTyping && currentText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else if (currentText.length === fullText.length) {
      setIsTyping(false)
    }
  }, [currentText, isTyping, fullText])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com efeito nebulosa */}
      <div className="absolute inset-0 nebula-bg"></div>
      <div className="absolute inset-0 space-pattern opacity-30"></div>
      
      {/* Elementos flutuantes */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-ng-blue rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-ng-red rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-ng-blue rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }}></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo principal */}
          <div className="flex justify-center mb-12 mt-4">
            <div className="relative">
              <img 
                src="/logo final sem o fundo.png" 
                alt="NG Space Logo" 
                className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 animate-float mx-auto"
              />
              <div className="absolute inset-0 bg-ng-blue/20 rounded-full blur-2xl animate-pulse-glow"></div>
            </div>
          </div>

          {/* Título principal com efeito de digitação */}
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            {currentText}
            <span className="animate-pulse text-ng-blue">|</span>
          </h1>


          {/* Descrição adicional */}
          <p className="font-montserrat text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Painéis de LED para todos os formatos, interatividade e imersão para transformar seus eventos em expêriencias estraordinárias.
          
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              asChild
              size="lg"
              className="bg-ng-blue hover:bg-ng-red text-white font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse-glow group"
            >
              <Link href="/contato" className="flex items-center space-x-2">
                <span>Solicitar Orçamento</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>

            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <Link href="/portfolio" className="flex items-center space-x-2">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Ver Portfólio</span>
              </Link>
            </Button>
          </div>

          {/* Indicadores de scroll */}
          <div className="pt-16">
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <span className="font-montserrat text-sm text-gray-400">Explore nossos serviços</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-ng-blue rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default HeroSection
