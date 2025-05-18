import React from 'react';
import { Link } from 'react-router-dom';

function HeaderDemo() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-900">Prof. NADAV G. LENSKY</h1>
        <div className="space-x-4 rtl:space-x-reverse">
          <Link to="/" className="text-gray-700 hover:text-blue-700">Home</Link>
          <Link to="/research" className="text-gray-700 hover:text-blue-700">Research</Link>
          <Link to="/people" className="text-gray-700 hover:text-blue-700">People</Link>
          <Link to="/publications" className="text-gray-700 hover:text-blue-700">Publications</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-blue-700">Gallery</Link>
          <Link to="/video" className="text-gray-700 hover:text-blue-700">Video</Link>
          <Link to="/facilities" className="text-gray-700 hover:text-blue-700">Facilities</Link>
          <Link to="/collaborations" className="text-gray-700 hover:text-blue-700">Collaborations</Link>
          <Link to="/news" className="text-gray-700 hover:text-blue-700">News</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-700">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default HeaderDemo;
