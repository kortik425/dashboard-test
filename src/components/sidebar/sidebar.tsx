"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BiCog,
  BiUser,
  BiHomeAlt,
  BiMenu,
  BiHorizontalLeft,
} from "react-icons/bi";
import useDeviceSize from "@/utils/hooks/useDeviceSize";

const links = [
  { id: "home", url: "/", label: "Home", icon: BiHomeAlt },
  { id: "user", url: "/users", label: "Users", icon: BiUser },
  { id: "settings", url: "/settings", label: "Settings", icon: BiCog },
];

const Navbar = ({}) => {
  const [toggle, setToggle] = useState(true); // desktop: true=open, mobile: true=close
  const { isMobile } = useDeviceSize();
  const handleToggler = () => setToggle((prev) => !prev);
  const spacing = "max-w-80 w-full m-4";
  return (
    <>
      <button
        onClick={handleToggler}
        className={`absolute border rounded-lg top-4 left-4 ${toggle ? "md:invisible visible" : "md:visible invisible"}`}
        aria-label="toggle-open"
      >
        <BiMenu size={32} className="m-2" />
      </button>
      <aside
        className={`bg-gray-900 ${spacing} z-50 rounded-2xl fixed top-0 bottom-0 transition-all ${toggle ? "-left-full md:left-0" : "left-0 md:-left-full"}`}
      >
        <header className="mx-6 my-6 flex justify-between">
          <h2>MyBrand Here</h2>
          <button
            className="hover:bg-gray-500 rounded-md"
            onClick={handleToggler}
            aria-label="toggle-close"
          >
            <BiHorizontalLeft size={28} className="m-1 " />
          </button>
        </header>
        <ul className="m-5">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.id}>
                <Link
                  onClick={isMobile ? handleToggler : () => {}}
                  href={link.url}
                  className="p-4 stylised-p-500 rounded-lg hover:bg-sky-700 flex m-2 gap-2 items-center"
                >
                  <Icon size={20} title={`${link.id} icon`} />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <div
        aria-hidden
        className={`${toggle ? `${spacing}` : "m-4 md:w-16"} transition-all h-1`}
      />
    </>
  );
};

export default Navbar;
