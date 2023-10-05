"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Education",
    path: "#education",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Project",
    path: "#project",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const Navbar = () => {
  const [navBarOpen, setNavbarOpen] = useState(false);

  const navRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (!navRef.current.contains(e.target)) {
        return setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    // motion
  });
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: { ease: "easeInOut", duration: 0.6, delay: 0.3 },
    },
  };
  return (
    <nav
      className="fixed mx-auto border-b border-b-[#33353F]   top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 "
      ref={navRef}
    >
      <div className="flex lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-4xl md:text-5xl text-white font-semibold"
        >
          ADAM.
        </Link>

        <div className="mobile-menu block mdC:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden mdC:block md:w-auto " id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {navBarOpen ? (
          <motion.div
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "300px", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            exit="exit"
          >
            <ul className="flex flex-col py-4 items-center">
              {navLinks.map((link, index) => (
                <motion.li
                  variants={item}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "44px", opacity: 1 }}
                  transition={{ delay: (index + 3) / 10 }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      ease: "easeInOut",
                      duration: 0.3,
                      delay: (navLinks.length - index - 1) / 10,
                    },
                  }}
                  key={index}
                  onClick={() => setNavbarOpen(false)}
                >
                  {<NavLink href={link.path} title={link.title} />}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
