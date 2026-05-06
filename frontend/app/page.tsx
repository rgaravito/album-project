import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          ¡Bienvenido a LáminaGol!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          La plataforma definitiva para coleccionar, intercambiar y comprar láminas adhesivas del álbum del Mundial
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/registro"
            className="bg-green-500 hover:bg-green-400 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Comenzar a Coleccionar
          </Link>
          <Link
            href="/explorar"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Explorar Láminas
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Mi Colección</h3>
          <p className="text-gray-600">
            Organiza y administra todas tus láminas del Mundial en un solo lugar.
            Rastrea las que tienes y las que te faltan.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Intercambios</h3>
          <p className="text-gray-600">
            Conecta con otros coleccionistas para intercambiar las láminas que necesitas.
            Encuentra trueques justos y divertidos.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Mercado</h3>
          <p className="text-gray-600">
            Compra y vende láminas en nuestro marketplace seguro.
            Encuentra las piezas que te faltan a precios justos.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-8">Estadísticas de la Comunidad</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">15,420</div>
            <div className="text-gray-600">Coleccionistas Activos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">89,543</div>
            <div className="text-gray-600">Láminas Intercambiadas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">2,341</div>
            <div className="text-gray-600">Transacciones Hoy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">98%</div>
            <div className="text-gray-600">Satisfacción</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">¿Listo para completar tu álbum?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Únete a miles de coleccionistas que ya están completando sus álbumes del Mundial con LáminaGol.
        </p>
        <Link
          href="/registro"
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
        >
          Crear Mi Cuenta Gratuita
        </Link>
      </section>
    </div>
  )
}