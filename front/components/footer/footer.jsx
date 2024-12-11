import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3c363b] text-white py-6">
      <div className="container mx-auto px-4">
        {/* Sección superior con enlaces y logo */}
        <div className="flex flex-wrap justify-between items-center border-b border-gray-600 pb-4 mb-4">
          <div>
            <h2 className="text-xl font-bold">Mi Sitio Web</h2>
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i> {/* Puedes usar un icono */}
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Sección inferior con copyright */}
        <div className="text-center">
          <p className="text-sm">
            &copy; 2025 EstebanDG. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
