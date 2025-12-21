"use client";

import Link from "next/link";
import React from "react";
import Hamburger from "./icons/Hamburger";
import ExitMenu from "./icons/ExitMenu";
import { animated, useSpring } from "@react-spring/web";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [springs, api] = useSpring(() => ({
    from: { y: -100, opacity: 0 },
  }));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    api.start({
      from: {
        y: -100,
        opacity: 0,
      },
      to: {
        y: 0,
        opacity: 1,
      },
      config: { friction: 30, tension: 200 },
    });
  };

  const menus = [
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Projects", path: "/projects" },
    { title: "GitHub", path: "https://github.com/JereNwa" },
  ];

  return (
    <nav className="w-full py-4 px-8 flex items-center justify-between bg-foreground dark:bg-foreground shadow-md text-white dark:text-black sticky top-0 z-20">
      <div className="text-xl font-bold">
        <Link href="/" className="font-alt hover:no-underline">
          JereNwa
        </Link>
      </div>

      <div className="lg:hidden">
        <button
          type="button"
          onClick={toggleMenu}
          className="focus:outline-none hover:text-gray-300"
        >
          {isOpen ? <ExitMenu width={24} /> : <Hamburger width={24} />}
        </button>
      </div>
      <ul className="hidden lg:transition-none lg:flex space-x-6 font-sans">
        {menus.map((item, idx) => (
          <li key={idx} className="list-none">
            <Link
              href={item.path}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      {isOpen && (
        <animated.ul
          style={{ ...springs }}
          className="absolute top-16 left-0 w-full bg-foreground dark:bg-foreground shadow-md flex flex-col items-left lg:hidden z-10 space-y-4 py-4 px-8 font-sans rounded-b-md"
        >
          {menus.map((item, idx) => (
            <li key={idx} className="list-none">
              <Link
                href={item.path}
                className="hover:text-gray-300 transition-colors duration-200"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </animated.ul>
      )}
    </nav>
  );
};

export default Navbar;
