import React from 'react';

const ResearchProjectPage = () => {
  return (
    <div className="bg-white min-h-screen p-6 max-w-4xl mx-auto text-gray-800">
      {/* כותרת המחקר */}
      <h1 className="text-3xl font-bold mb-4">Mapping the Salt Layers of the Dead Sea</h1>
      <p className="text-sm text-gray-600 mb-6">Published: May 2025 | Lead: Prof. Nadav Lensky</p>

      {/* תיאור המחקר */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          This project aims to understand the sedimentation process and structural behavior of salt layers in the Dead Sea region. By integrating geological surveys, core sampling, and remote sensing, we are building a 3D model of sub-surface salt formations.
        </p>
      </section>

      {/* גלריית תמונות */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img src="https://via.placeholder.com/400x250?text=Salt+Layer+1" alt="Salt layer" className="rounded shadow" />
          <img src="https://via.placeholder.com/400x250?text=Fieldwork" alt="Fieldwork" className="rounded shadow" />
        </div>
      </section>

      {/* סרטון יוטיוב */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Video</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-64 rounded shadow"
            src="https://www.youtube.com/embed/videoseries?list=UUkSUe_beTLmySHEBxxVgKVA"
            title="Dead Sea Research Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* קישורים לפרסומים */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Related Publications</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="#" className="text-blue-600 underline">Salt Deformation and Subsurface Mapping (2024)</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 underline">Sediment Core Analysis of the Dead Sea (2023)</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ResearchProjectPage;
