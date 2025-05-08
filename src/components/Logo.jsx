import React from 'react';

const Logo = () => {
  return ( 
    <div className="relative bg-white flex flex-col items-center justify-center py-6 text-center">
      <img
        src="https://static.wixstatic.com/media/827931_18b92efd70464eafbf35df4b203f74c1~mv2.jpg"
        alt="DS Observatory Logo"
        className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
      />
      <h2 className="font-semibold text-lg sm:text-xl">DEAD SEA OBSERVATORY</h2>
      <p className="text-sm sm:text-base">
        <a href="https://www.gov.il/en/departments/israel-geological-survey/govil-landing-page" target="_blank" rel="noopener noreferrer">
          Geological Survey of Israel
        </a>
      </p>
    </div>
  );
};

export default Logo;
