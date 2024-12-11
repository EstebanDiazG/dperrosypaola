import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="relative bg-[#f58f9a] border-b-2 border-[#f88994]">
      {/* Contenedor del navbar */}
      <div className="flex items-center justify-center p-4">
        {/* Logo centrado y sobresaliente */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[90px] bg-[#f58f9a] border-b-2 border-[#f88994] rounded-full flex items-center justify-center">
          <Image
            src="/deperrospaola.png"
            alt="Logo"
            width={200}
            height={200}
            className="animate-customBounce "
          />
        </div>
      </div>

      {/* Links del navbar */}
      <ul className="flex justify-around mt-7 text-white text-base pb-3">
        <li>
          <a href="#" className="hover:text-gray-300">
            Quienes somos
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Servicios
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Trabajos
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
