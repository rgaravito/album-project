import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LáminaGol - Colecciona Láminas del Mundial',
  description: 'Plataforma para coleccionar, intercambiar y comprar láminas adhesivas del álbum del Mundial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-blue-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold">LáminaGol</h1>
                </div>
                <nav className="hidden md:flex space-x-8">
                  <a href="/" className="hover:text-blue-200 transition-colors">Inicio</a>
                  <a href="/coleccion" className="hover:text-blue-200 transition-colors">Mi Colección</a>
                  <a href="/mercado" className="hover:text-blue-200 transition-colors">Mercado</a>
                  <a href="/intercambios" className="hover:text-blue-200 transition-colors">Intercambios</a>
                  <a href="/perfil" className="hover:text-blue-200 transition-colors">Perfil</a>
                </nav>
                <div className="flex items-center space-x-4">
                  <button className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-md transition-colors">
                    Iniciar Sesión
                  </button>
                  <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-md transition-colors">
                    Registrarse
                  </button>
                </div>
              </div>
            </div>
          </header>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <footer className="bg-gray-800 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">LáminaGol</h3>
                  <p className="text-gray-300">
                    La plataforma definitiva para coleccionar láminas del Mundial.
                    Intercambia, compra y vende con otros aficionados.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><a href="/coleccion" className="hover:text-white">Mi Colección</a></li>
                    <li><a href="/mercado" className="hover:text-white">Mercado</a></li>
                    <li><a href="/intercambios" className="hover:text-white">Intercambios</a></li>
                    <li><a href="/ayuda" className="hover:text-white">Ayuda</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                  <p className="text-gray-300">
                    ¿Tienes preguntas? Contáctanos en<br />
                    soporte@laminagol.com
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 LáminaGol. Todos los derechos reservados.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}