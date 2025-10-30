import React, { useRef } from 'react';
import { getFullImageUrl } from '../utils/getFullImageUrl';

const ImageGallery = ({ images }) => {
  const scrollContainerRef = useRef(null);

  if (!images?.length) return null;

  const scroll = (dir) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="my-6" data-aos="fade-up">
      <div className="relative">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
        >
          ←
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 px-10 scroll-smooth"
        >
          {images.map((image, index) => {
            const url = getFullImageUrl(image);
            return url ? (
              <img
                key={index}
                src={url}
                alt={image?.name || 'Image'}
                className="h-48 rounded-lg object-cover flex-shrink-0 transition-transform duration-300 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              />
            ) : null;
          })}
        </div>

        <button
          onClick={() => scroll(1)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
// This component renders a horizontal image gallery with smooth scrolling.
// It uses a ref to manage the scroll container and provides left/right buttons for navigation.