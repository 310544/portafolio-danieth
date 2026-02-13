export default function Home() {
  return (
    <main className="bg-[#0f172a] text-white min-h-screen scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-[#0f172a]/90 backdrop-blur-md z-50">
        <div className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">Danieth.dev</h1>

          <ul className="hidden md:flex gap-8 text-gray-300">
            <li>
              <a href="#inicio" className="hover:text-white transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#tecnologias" className="hover:text-white transition">
                Tecnologías
              </a>
            </li>
            <li>
              <a href="#proyectos" className="hover:text-white transition">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-white transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" className="text-center pt-40 px-6">
        <img
          src="/perfil.jpg"
          alt="perfil"
          className="w-40 h-40 rounded-full border-4 border-blue-500 mx-auto mb-6"
        />

        <h2 className="text-5xl font-bold mb-4">
          Danieth Julian Puentes
        </h2>

        <p className="text-xl text-gray-400 mb-6">
          Desarrollador Backend & Web
        </p>

        <a
          href="#proyectos"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition inline-block"
        >
          Ver Proyectos
        </a>
      </section>

      {/* ACERCA DE MÍ */}
      <section className="mt-28 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">
          Acerca de mí
        </h3>

        <p className="text-gray-400 leading-relaxed mb-6">
          Soy desarrollador de software enfocado en el área Backend y frontend desarrollo web,
          con experiencia en la creación de aplicaciones funcionales, estructuradas y escalables.
          Me especializo en el uso de tecnologías como JavaScript, TypeScript, Node.js, Next.js
          y bases de datos relacionales y no relacionales.
        </p>

        <p className="text-gray-400 leading-relaxed mb-6">
          Me caracterizo por ser una persona responsable, comprometida y orientada a resultados.
          Disfruto trabajar en equipo, asumir retos técnicos y aportar soluciones eficientes
          que generen valor real en cada proyecto.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Actualmente continúo fortaleciendo mis habilidades en arquitectura backend,
          computación en la nube y buenas prácticas de desarrollo.
        </p>
      </section>

      {/* TECNOLOGÍAS */}
      <section id="tecnologias" className="mt-28 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">
          Tecnologías
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {[
            { name: "JavaScript", url: "javascript/javascript-original.svg" },
            { name: "TypeScript", url: "typescript/typescript-original.svg" },
            { name: "Node.js", url: "nodejs/nodejs-original.svg" },
            { name: "Next.js", url: "nextjs/nextjs-original.svg" },
            { name: "MongoDB", url: "mongodb/mongodb-original.svg" },
            { name: "MySQL", url: "mysql/mysql-original.svg" },
            { name: "PostgreSQL", url: "postgresql/postgresql-original.svg" },
            { name: "GitHub", url: "github/github-original.svg" },
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl hover:scale-105 transition"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.url}`}
                className="w-16 mx-auto mb-4"
              />
              <p>{tech.name}</p>
            </div>
          ))}

        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="mt-28 px-6 max-w-6xl mx-auto pb-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          Proyectos
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#1e293b] rounded-xl overflow-hidden hover:scale-105 transition">
            <img src="/tienda-ecoshop.jpg" alt="EcoShop" className="w-full" />
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Tienda EcoShop</h4>
              <p className="text-gray-400 mb-4">
                Aplicación web diseñada para comercialización de productos de manera rápida, segura y eficiente.
              </p>
              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                Ver Proyecto
              </button>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-xl overflow-hidden hover:scale-105 transition">
            <img src="villavicencio.jpeg" alt="Tienda Online" className="w-full" />
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">pagina de Turismo villavicencio</h4>
              <p className="text-gray-400 mb-4">
                pagina web muestra mejores lugares turisticos de villavicencio.
              </p>
              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                Ver Proyecto
              </button>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-xl overflow-hidden hover:scale-105 transition">
            <img src="zapatillas.png" alt="Sistema Administrativo" className="w-full" />
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">pagina de venta de zapatillas</h4>
              <p className="text-gray-400 mb-4">
                simulacro de pagina de venta de zapatillas.
              </p>
              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                Ver Proyecto
              </button>
            </div>
          </div>

                 <div className="bg-[#1e293b] rounded-xl overflow-hidden hover:scale-105 transition">
            <img src="pixabay.jpeg" alt="Tienda Online" className="w-full" />
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">buscador de imagenes </h4>
              <p className="text-gray-400 mb-4">
                buscador de imagenes en 4D y mejor calidad.
              </p>
              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                Ver Proyecto
              </button>
            </div>
          </div>


        </div>
      </section>
      {/* CONTACTO */}
<section
  id="contacto"
  className="mt-32 px-6 max-w-4xl mx-auto pb-24"
>
  <h3 className="text-4xl font-bold text-center mb-4">
    Contacto
  </h3>

  <p className="text-gray-400 text-center mb-12">
    ¿Tienes un proyecto en mente? Hablemos.
  </p>

  <div className="bg-[#1e293b]/70 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/10">

    <form className="space-y-8">

      {/* Nombre */}
      <div>
        <label className="block mb-2 text-gray-300">Nombre</label>
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full bg-[#0f172a] border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none p-4 rounded-xl transition"
        />
      </div>

      {/* Correo */}
      <div>
        <label className="block mb-2 text-gray-300">Correo electrónico</label>
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          className="w-full bg-[#0f172a] border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none p-4 rounded-xl transition"
        />
      </div>

      {/* Mensaje */}
      <div>
        <label className="block mb-2 text-gray-300">Mensaje</label>
        <textarea
          rows={5}
          placeholder="Escribe tu mensaje aquí..."
          className="w-full bg-[#0f172a] border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none p-4 rounded-xl transition resize-none"
        />
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="w-full py-4 rounded-xl font-semibold text-lg 
        bg-gradient-to-r from-blue-600 to-indigo-600 
        hover:from-blue-500 hover:to-indigo-500 
        transition-all duration-300 shadow-lg hover:shadow-blue-500/40"
      >
        Enviar mensaje 🚀
      </button>

    </form>
  </div>
</section>


    </main>
  );
}