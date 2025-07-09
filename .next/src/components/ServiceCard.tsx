'use client'

import { Monitor, Volume2, Lightbulb, Smartphone, Headphones, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ServiceCardProps {
  iconName: string
  title: string
  description: string
  features: string[]
  href: string
}

const iconMap = {
  Monitor,
  Volume2,
  Lightbulb,
  Smartphone,
  Headphones,
  Wrench,
}

const ServiceCard = ({ iconName, title, description, features, href }: ServiceCardProps) => {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Monitor
  return (
    <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-ng-blue transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-ng-blue/20">
      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-ng-blue/5 to-ng-red/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 space-y-4">
        {/* Ícone */}
        <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full group-hover:bg-ng-blue transition-colors duration-300">
          <Icon className="h-8 w-8 text-ng-blue group-hover:text-white transition-colors duration-300" />
        </div>

        {/* Título */}
        <h3 className="font-orbitron font-bold text-xl text-white group-hover:text-ng-blue transition-colors duration-300">
          {title}
        </h3>

        {/* Descrição */}
        <p className="font-montserrat text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Lista de características */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-ng-blue rounded-full"></div>
              <span className="font-montserrat text-sm text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Botão de ação */}
        <div className="pt-4">
          <Button 
            asChild
            variant="ghost"
            className="text-ng-blue hover:text-ng-red hover:bg-ng-blue/10 font-montserrat font-medium group/btn"
          >
            <Link href={href} className="flex items-center space-x-2">
              <span>Saiba Mais</span>
              <div className="w-0 h-0.5 bg-ng-blue group-hover/btn:w-4 transition-all duration-300"></div>
            </Link>
          </Button>
        </div>
      </div>

      {/* Elemento decorativo */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-ng-red rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
    </div>
  )
}

export default ServiceCard
