import React from 'react';
import { Link } from 'react-router-dom';

function HeaderDemo() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dead Sea Observatory</h1>
      <nav>
        <ul>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderDemo;
