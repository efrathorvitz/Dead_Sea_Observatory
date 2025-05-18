import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Logo from './Logo';
import SiteOwnerInfo from './SiteOwnerInfo';
import HeaderDemo from './HeaderDemo';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50 bg-white shadow">
        <Header/>
      </div>
      <main className="container mx-auto px-4 py-8">{children}</main>
      {/*<main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>*/}
      <Footer />
    </div>
  );
};

export default Layout;
