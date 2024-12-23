import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#3c363b] text-white py-6">
      <div className="container mx-auto px-4">
        {/* Sección superior con enlaces y logo */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-4 mb-4">
          <div className="mb-4 md:mb-0">
            <Image
              src="/footer.png"
              alt="Footer Image"
              width={150}
              height={100}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-10">
            <div>
              <h3 className="text-lg font-semibold">Servicios</h3>
              <p>🐾 Comunicación efectiva con tu perro</p>
              <p>🐾 Socialización</p>
              <p>🐾 Modificación de la conducta</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Educadora</h3>
              <p>Paola Poblete</p>
              <p>Educadora Canina</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Atención</h3>
              <p>Lunes a Viernes: 9:00 - 18:00</p>
              <p>Sábado: 10:00 - 14:00</p>
            </div>
          </div>

          <div className="flex space-x-4 mt-8 justify-center">
            <a
              href="https://www.instagram.com/dperrosypaola/"
              className="hover:text-gray-400 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
              <span className="ml-2">dperrosypaola</span>
            </a>
          </div>
        </div>

        {/* Sección inferior con copyright */}
        <div className="text-center mt-4">
          <p className="text-sm">
            &copy; 2025 Todos los derechos reservados deperrosypaola.cl |
            Desarrollado por STBNDEV
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
