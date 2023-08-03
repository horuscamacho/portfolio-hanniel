"use client";
import Image from "next/image";
import logo from "/public/assets/bcslogo.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

const menu = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Nuestra Firma",
    path: "/acerca",
  },
  {
    name: "Servicios",
    path: "/servicios",
  },
  {
    name: "Contacto",
    path: "/contacto",
  },
];

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="flex justify-between px-4 h-16 bg-black w-full items-center realtive sm:hidden">
        <Image src={logo} alt="logo" width={80} priority />
        {showMenu ? (
          <CgClose
            className="text-white text-4xl cursor-pointer"
            onClick={handleShowMenu}
          />
        ) : (
          <GiHamburgerMenu
            className="text-white text-4xl cursor-pointer"
            onClick={handleShowMenu}
            color={"white"}
          />
        )}
        {showMenu && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="w-full absolute z-10 bg-gray-50 left-0 top-16 text-gray-500"
          >
            <ul className="flex flex-col">
              {menu.map((item, index) => (
                <li
                  className="px-6 py-3 border-b-[1px] border-b-gray-400 text-xs"
                  key={`${index}-${item.name}`}
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
      <nav className="hidden sm:flex justify-between items-center h-24 px-8 bg-black">
        <Image src={logo} alt="logo" width={120} priority />
        <ul className="flex text-xl text-white gap-4">
          {menu.map((item, index) => (
            <li
              key={`${index}-${item.name}`}
              className="cursor-pointer hover:text-yellow-500 transition-all duration-300"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
