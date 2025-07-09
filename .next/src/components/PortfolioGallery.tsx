'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PortfolioItem {
  id: number
  title: string
  category: string
  client: string
  description: string
  image: string
  testimonial?: string
  services: string[]
}

interface PortfolioGalleryProps {
  items: PortfolioItem[]
}

const PortfolioGallery = ({ items }: PortfolioGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const categories = ['Todos', ...Array.from(new Set(items.map(item => item.category)))]

  const filteredItems = selectedCategory === 'Todos' 
    ? items 
    : items.filter(item => item.category === selectedCategory)

  const openLightbox = (item: PortfolioItem) => {
    setSelectedItem(item)
    setCurrentImageIndex(0)
  }

  const closeLightbox = () => {
    setSelectedItem(null)
  }

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev + 1) % 1) // Assumindo 1 imagem por item
    }
  }

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev - 1 + 1) % 1) // Assumindo 1 imagem por item
    }
  }

  return (
    <div className="space-y-8">
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className={`font-montserrat font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-ng-blue hover:bg-ng-red text-white'
                : 'border-ng-blue text-ng-blue hover:bg-ng-blue hover:text-white'
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-ng-blue transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => openLightbox(item)}
          >
            {/* Imagem */}
            <div className="aspect-video bg-gradient-to-br from-ng-blue/20 to-ng-red/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="font-orbitron font-bold text-2xl text-white">
                    {item.client}
                  </div>
                  <div className="font-montserrat text-ng-blue">
                    {item.category}
                  </div>
                </div>
              </div>
              
              {/* Overlay de hover */}
              <div className="absolute inset-0 bg-ng-blue/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <ExternalLink className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-ng-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-montserrat text-sm text-gray-400">
                  {item.client}
                </p>
              </div>

              <p className="font-montserrat text-gray-300 text-sm leading-relaxed line-clamp-3">
                {item.description}
              </p>

              {/* Serviços utilizados */}
              <div className="flex flex-wrap gap-2">
                {item.services.slice(0, 3).map((service, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-ng-blue/20 text-ng-blue text-xs font-montserrat rounded-full"
                  >
                    {service}
                  </span>
                ))}
                {item.services.length > 3 && (
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs font-montserrat rounded-full">
                    +{item.services.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-xl border border-gray-800">
            {/* Botão de fechar */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-ng-red transition-colors duration-300"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Conteúdo do lightbox */}
            <div className="p-8 space-y-6">
              {/* Imagem principal */}
              <div className="aspect-video bg-gradient-to-br from-ng-blue/20 to-ng-red/20 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="font-orbitron font-bold text-4xl text-white">
                      {selectedItem.client}
                    </div>
                    <div className="font-montserrat text-xl text-ng-blue">
                      {selectedItem.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* Informações do projeto */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h2 className="font-orbitron font-bold text-2xl text-white mb-2">
                      {selectedItem.title}
                    </h2>
                    <p className="font-montserrat text-ng-blue">
                      Cliente: {selectedItem.client}
                    </p>
                  </div>

                  <p className="font-montserrat text-gray-300 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  {selectedItem.testimonial && (
                    <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-ng-blue">
                      <p className="font-montserrat text-gray-300 italic">
                        "{selectedItem.testimonial}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="font-orbitron font-bold text-lg text-white">
                    Serviços Utilizados
                  </h3>
                  <div className="space-y-2">
                    {selectedItem.services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-ng-blue rounded-full"></div>
                        <span className="font-montserrat text-gray-300">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button 
                      asChild
                      className="bg-ng-blue hover:bg-ng-red text-white font-montserrat font-medium w-full"
                    >
                      <a href="/contato">Solicitar Orçamento Similar</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PortfolioGallery
