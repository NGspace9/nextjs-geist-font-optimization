import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NG Space - Soluções Audiovisuais para Eventos',
  description: 'Um universo de possibilidades visuais. Soluções audiovisuais para eventos inesquecíveis com painéis de LED, sonorização e iluminação profissional.',
  keywords: 'painéis LED, sonorização, iluminação, eventos, audiovisual, NG Space',
  authors: [{ name: 'NG Space' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen bg-black text-white font-montserrat antialiased">
        {children}
      </body>
    </html>
  )
}
