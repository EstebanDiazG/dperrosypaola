import React from "react";
import Image from "next/image";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Body = () => {
  const videos = [
    "https://www.instagram.com/p/CHblqvlgZl1/",
    "https://www.instagram.com/p/CGIJnC3JTPN/",
    "https://www.instagram.com/p/CGIJ_2VppiI/",
    "https://www.instagram.com/p/Bxh6SWLF7C2/",
  ];

  const dogTrainingTips = [
    {
      title: "Entrenamiento básico de obediencia",
      description:
        'Los perros deben aprender comandos básicos como "sentado", "quieto" y "aquí". Estos comandos ayudan a establecer una buena comunicación con tu perro y mejorar su comportamiento.',
      icon: (
        <img
          src="/perrosvg/dog1.svg"
          alt="Icono de perro"
          className="w-12 h-12 text-black"
        />
      ),
    },
    {
      title: "Socialización con otros perros",
      description:
        "Es importante socializar a los perros desde una edad temprana. Esto les enseña a comportarse con otros perros y personas, reduciendo la agresión y el miedo.",
      icon: (
        <img
          src="/perrosvg/dog2.svg"
          alt="Icono de perro"
          className="w-12 h-12 text-black"
        />
      ),
    },
    {
      title: "Rutina de ejercicio",
      description:
        "Los perros necesitan ejercicio diario. Esto puede incluir caminatas, juegos o correr. El ejercicio regular no solo mejora la salud física, sino que también ayuda a mantener el equilibrio emocional de tu perro.",
      icon: (
        <img
          src="/perrosvg/dog3.svg"
          alt="Icono de perro"
          className="w-12 h-12 text-black"
        />
      ),
    },
    {
      title: "Entrenamiento con refuerzos positivos",
      description:
        "El refuerzo positivo es una técnica muy efectiva en el entrenamiento de perros. Se basa en recompensar el buen comportamiento en lugar de castigar el malo.",
      icon: (
        <img
          src="/perrosvg/dog4.svg"
          alt="Icono de perro"
          className="w-12 h-12 text-black"
        />
      ),
    },
    {
      title: "Cuidado de la higiene dental",
      description:
        "El cuidado dental es esencial para la salud de tu perro. Los perros pueden desarrollar enfermedades dentales si no se cepillan los dientes regularmente.",
      icon: (
        <img
          src="/perrosvg/dog5.svg"
          alt="Icono de perro"
          className="w-12 h-12 text-black"
        />
      ),
    },
    {
      title: "Evitar sobrealimentación",
      description:
        "La sobrealimentación puede llevar a la obesidad, lo que pone a tu perro en riesgo de muchas enfermedades. Mantén un control adecuado de la dieta y las porciones de comida.",
      icon: (
        <img
          src="/perrosvg/dog6.svg"
          alt="Icono de perro"
          className="w-12 h-12 text-black"
        />
      ),
    },
  ];

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

      <section id="bienvenida" className="relative text-white ">
        <div
          className="relative w-full h-[700px] bg-cover bg-center p-4 flex items-center justify-center"
          style={{
            backgroundImage: "url('/perrobanner.jpg')",
            backgroundPosition: "center top",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center py-20">
            <h1 className="text-4xl font-bold">
              Bienvenido a De Perros y Paola
            </h1>
            <p className="text-xl mt-4">
              La educación canina que tu perro merece
            </p>
          </div>
        </div>
      </section>

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
                🐾 Comunicación Efectiva
              </h3>
              <p className="text-gray-600 text-center">
                Fortalece el vínculo con tu perro mediante técnicas de
                adiestramiento basadas en refuerzo positivo. Aprende a entender
                sus necesidades, enseñarle buenos comportamientos y disfrutar de
                una convivencia armónica. Nuestro enfoque personalizado se
                adapta a cachorros y perros adultos, promoviendo una
                comunicación clara y efectiva.
              </p>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-[#f58f9a] mb-4">
                🐶 Socialización
              </h3>
              <p className="text-gray-600 text-center">
                Fomenta el bienestar emocional de tu perro con nuestro servicio
                de socialización. Ayudamos a tu mascota a interactuar de forma
                positiva con perros y personas, reduciendo miedos o
                comportamientos agresivos. Ideal para cachorros y perros
                adultos, nuestras sesiones guiadas mejoran su adaptación a
                distintos entornos y fortalecen su capacidad de convivencia.
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-[#f58f9a] mb-4">
                🐕‍🦺 Modificación de Conducta
              </h3>
              <p className="text-gray-600 text-center">
                Corrige comportamientos no deseados de tu perro, como ladridos
                excesivos o saltos, con nuestro servicio de modificación de
                conducta. Usamos técnicas de refuerzo positivo adaptadas a sus
                necesidades, enseñando alternativas adecuadas para resultados
                duraderos. Mejora la convivencia con sesiones personalizadas que
                fomentan un perro equilibrado y obediente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Trabajos realizados */}
      <section id="trabajos" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Trabajos Realizados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="flex justify-center">
                <iframe
                  src={`${video}embed/`}
                  className="rounded-lg shadow-lg"
                  width="400"
                  height="400"
                  frameBorder="0"
                  allowFullScreen
                  title={`Instagram Video ${index + 1}`}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seccion ¿Sabias que?*/}
      <section id="sabias-que" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-8">¿Sabías que?</h2>
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full"
          >
            {dogTrainingTips.map((tip, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="bg-white p-6 w-[70%] md:w-[80%] mx-auto  rounded-lg shadow-lg hover:shadow-xl transition-shadow md:h-80 flex flex-col">
                  <div className="flex justify-center mb-4">{tip.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-base text-gray-700">{tip.description}</p>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev absolute left-4 "></div>
            <div className="swiper-button-next absolute right-4"></div>
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default Body;
