import Footer from '@/components/Footer';
import Home from '@/components/Home';
import Navbar from '@/components/Navbar';
import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Home className="flex-grow" />
      <Footer />
    </div>
  );
};

export default Page;
