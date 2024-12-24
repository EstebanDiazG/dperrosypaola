import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative bg-[#f58f9a] py-8 md:py-0 border-b-2 border-[#f88994] z-50">
      {/* Contenedor del navbar */}
      <div className="flex items-center justify-center p-4">
        {/* Logo centrado y sobresaliente */}
        <div className="absolute top-1/2 left-1/2 z-[1000] transform -translate-x-1/2 -translate-y-[90px] bg-[#f58f9a] border-b-2 border-[#f88994] rounded-full flex items-center justify-center">
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
        ref={buttonRef}
        className="lg:hidden absolute top-8 left-4 text-white text-4xl"
        onClick={toggleMenu}
      >
        &#9776; {/* Símbolo de hamburguesa */}
      </button>

      {/* Links del navbar */}
      <ul
        ref={menuRef}
        className={`lg:flex lg:mt-7 lg:justify-around lg:static text-white text-base pb-4 ${
          isMenuOpen
            ? "absolute top-24 p-12 px-4 w-full text-center h-60 text-base rounded-lg bg-[#f58f9a] border-[#f88994] block"
            : "hidden"
        } lg:block space-y-4 lg:space-y-0`}
      >
        {isMenuOpen && <hr className="border-gray-300 my-4 lg:hidden" />}
        <li>
          <a
            href="#quienes-somos"
            className="hover:text-gray-300 "
            onClick={closeMenu}
          >
            Quienes somos
          </a>
        </li>
        <li>
          <a
            href="#servicios"
            className="hover:text-gray-300 "
            onClick={closeMenu}
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            href="#trabajos"
            className="hover:text-gray-300 "
            onClick={closeMenu}
          >
            Trabajos
          </a>
        </li>
        <li>
          <a
            href="#sabias-que"
            className="hover:text-gray-300 "
            onClick={closeMenu}
          >
            ¿Sabias que?
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
