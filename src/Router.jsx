import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Research from './components/pages/Research';
import People from './components/pages/People';
import Publications from './components/pages/Publications';
import Gallery from './components/pages/Gallery';
import Video from './components/pages/Video';
import Facilities from './components/pages/Facilities';
import Collaborations from './components/pages/Collaborations';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import FetchContent from './components/FetchContent';
import Home from './components/pages/Home';
import CollectionDisplay from './components/CollectionDisplay';
import { DataProvider } from './services/context';
import ScrollToTop from './components/ScrollToTop';


const AppRouter = () => {
  return (
    <DataProvider>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/research" element={<CollectionDisplay collectionName="researchs"/>} />
          <Route path="/people" element={<CollectionDisplay collectionName="people"/>} />
          <Route path="/publications" element={<CollectionDisplay collectionName="publications"/>} />
          <Route path="/gallery" element={<CollectionDisplay collectionName="gallery"/>} />
         {/*<Route path="/video" element={<CollectionDisplay collectionName="videos"/>} /> */} 
          <Route path="/facilities" element={<CollectionDisplay collectionName="facilities"/>} />
          <Route path="/collaborations" element={<CollectionDisplay collectionName="collaborations"/>} />
          <Route path="/news" element={<CollectionDisplay collectionName="news"/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fetch" element={<FetchContent />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Layout>
    </DataProvider>
  );
};

export default AppRouter;
