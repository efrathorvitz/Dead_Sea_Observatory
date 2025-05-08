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
import Home from './components/pages/Home';


const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/research" element={<Research />} />
        <Route path="/people" element={<People />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/video" element={<Video />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
