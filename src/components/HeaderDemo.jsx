import React, { useState } from 'react';
import SocialBar from './SocialBar';

const HeaderDemo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav className={`w-full ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/research" className="hover:underline">Research</a></li>
            <li><a href="/people" className="hover:underline">People</a></li>
            <li><a href="/publications" className="hover:underline">Publications</a></li>
            <li><a href="/gallery" className="hover:underline">Gallery</a></li>
            <li><a href="/video" className="hover:underline">Video</a></li>
            <li><a href="/facilities" className="hover:underline">Facilities</a></li>
            <li><a href="/collaborations" className="hover:underline">Collaborations</a></li>
            <li><a href="/news" className="hover:underline">News</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><SocialBar /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderDemo;
