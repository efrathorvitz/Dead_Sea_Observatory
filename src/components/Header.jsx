import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SocialBar from './SocialBar'; // Import the SocialBar component

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/research', label: 'Research' },
    { to: '/people', label: 'People' },
    { to: '/publications', label: 'Publications' },
    { to: '/gallery', label: 'Gallery' },
    /*{ to: '/video', label: 'Video' },*/
    { to: '/facilities', label: 'Facilities' },
    { to: '/collaborations', label: 'Collaborations' },
    { to: '/news', label: 'News' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex flex-wrap justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-900">
          Prof. NADAV G. LENSKY
        </h1>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-4 rtl:space-x-reverse">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className="text-gray-700 hover:text-blue-700">
              {label}
            </Link>
          ))}
        </div>

        {/* SocialBar */}
        <div className="hidden md:flex">
          <SocialBar />
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="w-full md:hidden px-6 pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-700"
                >
                  {label}
                </Link>
              ))}
            </div>
            {/* SocialBar for mobile */}
            <div className="mt-4">
              <SocialBar />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;