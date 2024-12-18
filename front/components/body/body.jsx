import React from "react";
import Image from "next/image";

const Body = () => {
  return (
    <main className=" text-gray-800">
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/+56945188434"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <img src="/whatsapp.svg" alt="WhatsApp" width={50} height={50} />
      </a>
      {/* Sección de Quiénes Somos */}
      <section id="quienes-somos" className="text-black py-[100px]">
        <div className="container mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Quiénes Somos</h1>
            <p className="text-lg mb-6">
              En <strong>De Perros y Paola</strong>, somos un equipo apasionado
              por el bienestar animal. Nos dedicamos a brindar servicios de
              educación canina, socialización y modificación de conducta,
              siempre con el objetivo de fortalecer la relación entre tú y tu
              compañero peludo.
            </p>
            <p className="text-lg mb-6">
              Con años de experiencia, Paola Poblete, nuestra entrenadora
              profesional, utiliza métodos basados en el refuerzo positivo para
              enseñar a los perros de manera amable, respetuosa y efectiva.
              Creemos en la importancia de una comunicación clara y empática
              entre el perro y su dueño para lograr una convivencia armoniosa.
            </p>
            <p className="text-lg">
              Nos enorgullece ofrecer un enfoque personalizado, adaptado a las
              necesidades individuales de cada perro, porque sabemos que cada
              uno es único. Ya sea que estés buscando mejorar el comportamiento
              de tu mascota o fortalecer su socialización, estamos aquí para
              ayudarte.
            </p>
          </div>
          <div className="md:w-1/2 md:px-28 transform transition-transform duration-300 hover:scale-105 ">
            <Image
              src="/quienes-somos-1.png"
              alt="Quiénes Somos"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section id="servicios" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-[#f58f9a] mb-4">
                🐾 Comunicación Efectiva con tu Perro
              </h3>
              <p className="text-gray-600">
                La comunicación efectiva es clave para establecer una relación
                sólida y armónica con tu perro. A través de técnicas de
                adiestramiento basadas en el refuerzo positivo, aprenderás cómo
                entender mejor las necesidades de tu mascota y cómo enseñarle
                comportamientos adecuados. Este servicio te ayudará a fortalecer
                el vínculo con tu compañero canino, promoviendo una convivencia
                más tranquila y satisfactoria. Ya sea que tengas un cachorro o
                un perro adulto, nuestro enfoque personalizado se adapta a sus
                necesidades y características particulares, asegurando una
                comunicación clara y efectiva.
              </p>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-[#f58f9a] mb-4">
                🐶 Socialización
              </h3>
              <p className="text-gray-600">
                La socialización es fundamental para el desarrollo emocional y
                psicológico de tu perro. Nuestro servicio está diseñado para
                fomentar interacciones saludables, tanto con otros perros como
                con personas, ayudando a tu mascota a sentirse más cómoda y
                segura en diversos entornos sociales. A través de sesiones
                guiadas, tu perro aprenderá a reaccionar adecuadamente ante
                nuevas situaciones, reduciendo comportamientos temerosos o
                agresivos. Además, las interacciones positivas con otros perros
                fortalecen su capacidad para adaptarse a diferentes contextos,
                mejorando su bienestar general y su capacidad de convivencia.
                Este servicio es ideal para cachorros, perros adultos o aquellos
                que necesiten mejorar su comportamiento social.
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-[#f58f9a] mb-4">
                🐕‍🦺 Modificación de Conducta
              </h3>
              <p className="text-gray-600">
                Si tu perro presenta comportamientos no deseados, como ladridos
                excesivos, masticado destructivo, saltos sobre las personas o
                actitudes agresivas, nuestro servicio de modificación de
                conducta está diseñado para corregir esos problemas de manera
                efectiva. Utilizamos técnicas de adiestramiento basadas en el
                refuerzo positivo, enfocándonos en la eliminación de
                comportamientos negativos y la enseñanza de alternativas más
                adecuadas. Cada perro es único, por lo que nuestro enfoque se
                adapta a las necesidades específicas de tu mascota, asegurando
                resultados duraderos. A través de sesiones personalizadas,
                aprenderás cómo gestionar y redirigir comportamientos
                indeseados, mejorando la convivencia en el hogar y asegurando
                que tu perro sea más equilibrado y obediente.
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
