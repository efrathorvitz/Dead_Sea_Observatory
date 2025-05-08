import React from 'react';
import SocialBar from './SocialBar';

const SiteOwnerInfo = () => {
  return (
    <div className="bg-gray-100 text-sm text-gray-800 px-4 sm:px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold mb-2 text-base">Address</h3>
          <p>Nadav Lensky, Head of Dead Sea Observatory</p>
          <p>32 Yesha'yahu Leibowitz St</p>
          <p>Jerusalem</p>
          <p>Israel</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-base">Contact</h3>
          <p>
            <a href="mailto:nadavl@gsi.gov.il" className="text-blue-600 underline">nadavl@gsi.gov.il</a>
          </p>
          <p>
            <a href="mailto:GSI.DeadSea@gmail.com" className="text-blue-600 underline">GSI.DeadSea@gmail.com</a>
          </p>
          <p>02-5314259</p>
          <p className="mt-2"><strong>Web founder:</strong> Elad Dente</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-base">Follow</h3>
          <SocialBar />
        </div>
      </div>
    </div>
  );
};

export default SiteOwnerInfo;
