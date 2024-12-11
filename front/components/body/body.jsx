import React from "react";

const Body = () => {
  return (
    <main className=" text-gray-800">
      {/* Sección de Introducción */}
      <section className=" text-black py-[100px]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Bienvenidos a Mi Sitio Web
          </h1>
          <p className="text-lg">
            Aquí encontrarás los mejores servicios y productos adaptados a tus
            necesidades.
          </p>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Servicio 1</h3>
              <p className="text-gray-600">
                Descripción breve del servicio 1. Adaptado a tus necesidades.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Servicio 2</h3>
              <p className="text-gray-600">
                Descripción breve del servicio 2. Calidad garantizada.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Servicio 3</h3>
              <p className="text-gray-600">
                Descripción breve del servicio 3. Resultados excepcionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Galería */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Trabajos Realizados
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Galería 1"
                className="w-full"
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Galería 2"
                className="w-full"
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Galería 3"
                className="w-full"
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Galería 4"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Body;
