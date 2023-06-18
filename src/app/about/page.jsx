import React from 'react';
import Banner from './Banner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Evolved from './Evolved';
import Featured from './Featured';
import Investors from './Investors';
import Founders from './Founders';
import OfficeBanner from './OfficeBanner';

const about = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-grow">
        <Banner></Banner>
        <Evolved></Evolved>
        <Featured></Featured>
        <Investors></Investors>
        <Founders></Founders>
        <OfficeBanner></OfficeBanner>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default about;
