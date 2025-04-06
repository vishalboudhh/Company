import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // using lucide-react icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950 p-4 sm:p-6 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wider drop-shadow-xl">
            <span className="inline-block transition-transform duration-500 hover:translate-y-1">Learn</span>
            <span className="inline-block transition-transform duration-500 hover:translate-y-1">Sphere</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 items-center">
          <li>
            <Link
              to="/"
              className="text-xl text-white  rounded-3xl px-4 py-2 hover:border-blue-400 transition-all hover:border-4"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="text-xl text-white  rounded-3xl px-4 py-2 hover:border-blue-400 transition-all hover:border-4"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-xl text-white  rounded-3xl px-4 py-2 hover:border-blue-400 transition-all hover:border-4"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden ">
          <button onClick={toggleMenu} className="text-white cursor-pointer">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-slate-900 rounded-2xl p-6 space-y-4 text-center">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block text-white text-lg hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            to="/product"
            onClick={toggleMenu}
            className="block text-white text-lg hover:text-blue-400 transition"
          >
            Product
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block text-white text-lg hover:text-blue-400 transition"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
