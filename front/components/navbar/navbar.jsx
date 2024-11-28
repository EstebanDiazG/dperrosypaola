import { useState } from "react";
import Image from "next/image";

const navbar = () => {
  return (
    <nav className="  dark:bg-rose-200 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className=" animate-bounce">
            <Image src="/deperrospaola.png" width={150} height={40} />
          </div>
        </a>

        <div>
          <ul className="flex flex-row w-full   ">
            <li>
              <a href="#" className="text-red-500 ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-red-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-red-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-red-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
