import React from 'react';
import { Link } from 'react-router-dom';

function Research() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Research Projects</h2>
      <ul>
        <li>
          <Link to="/research/project1">Salt Layer Mapping</Link>
          <ul>
            <li><Link to="/gallery/project1">Gallery</Link></li>
            <li><Link to="/videos/project1">Videos</Link></li>
          </ul>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </div>
  );
}

export default Research;
