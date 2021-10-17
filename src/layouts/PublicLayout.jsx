import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from 'react';

const PublicLayout = ({ children }) => {
  return (
    <div className="flex">
      <Navbar/>
      <main className="main">{children}</main>
      <Footer/>
    </div>
 )
};

export default PublicLayout;

