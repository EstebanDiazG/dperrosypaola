import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative bg-[#f58f9a] py-8 md:py-0 border-b-2 border-[#f88994] z-50">
      {/* Contenedor del navbar */}
      <div className="flex items-center justify-center p-4">
        {/* Logo centrado y sobresaliente */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[90px] bg-[#f58f9a] border-b-2 border-[#f88994] rounded-full flex items-center justify-center">
          <Image
            src="/deperrospaola.png"
            alt="Logo"
            width={200}
            height={200}
            className="animate-customBounce"
          />
        </div>
      </div>

      {/* Botón de hamburguesa para pantallas pequeñas */}
      <button
        className="lg:hidden absolute top-8 left-4 text-white text-4xl"
        onClick={toggleMenu}
      >
        &#9776; {/* Símbolo de hamburguesa */}
      </button>

      {/* Links del navbar */}
      <ul
        className={`lg:flex lg:mt-7 lg:justify-around lg:static text-white text-base pb-4 ${
          isMenuOpen
            ? "absolute top-full px-3 -left-1 w-28 text-xs rounded-lg bg-[#f58f9a] border-t-2 border-[#f88994] block"
            : "hidden"
        } lg:block`}
      >
        <li>
          <a href="#quienes-somos" className="hover:text-gray-300">
            Quienes somos
          </a>
        </li>
        <li>
          <a href="#servicios" className="hover:text-gray-300">
            Servicios
          </a>
        </li>
        <li>
          <a href="#trabajos" className="hover:text-gray-300">
            Trabajos
          </a>
        </li>
        <li>
          <a href="#sabias-que" className="hover:text-gray-300">
            ¿Sabias que?
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
