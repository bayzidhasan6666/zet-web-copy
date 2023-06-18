import React from 'react';
import Banner from './Banner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const about = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className='flex-grow'>
        {' '}
        <Banner></Banner>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default about;
