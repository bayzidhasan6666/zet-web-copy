'use client';
import './Founders.css';
import '../../components/FadeAnime.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Investors = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const images = [
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany1.41d5c5bd.png&w=640&q=75',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany2.3f604866.png&w=640&q=75',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany3.c16095cb.png&w=640&q=75',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany4.9acb56c2.png&w=640&q=75',
    },
  ];
  const investors = [
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv1.1c87bc0c.png&w=640&q=75',
      name: 'Kunal Shah',
      title: 'Founder, CRED',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv2.331b31f9.png&w=640&q=75',
      name: 'Gaurav Munjal',
      title: 'Founder, UNACADEMY',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv3.1779e0d4.png&w=640&q=75',
      name: 'Aakrit Vaish',
      title: 'Co-Founder, HAPTIK',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv4.b9325fa0.png&w=640&q=75',
      name: 'Harshil Mathur',
      title: 'Founder, RAZORPAY',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv5.2e962217.png&w=640&q=75',
      name: 'Vidit Aatrey',
      title: 'Founder & CEO, MEESHO',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv6.7a958b9d.png&w=640&q=75',
      name: 'Amrish Rau',
      title: 'CEO, PINELABS',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv7.3b8a633d.png&w=640&q=75',
      name: 'Lalit Keshre',
      title: 'CEO, GROWW',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv8.bcbe6091.png&w=640&q=75',
      name: 'Gokul Rajaram',
      title: 'Product, DOORDASH',
    },
  ];
  return (
    <div className="my-10">
      <h1 className="font-bold text-2xl lg:text-3xl px-2 md:px-10 lg:px-32 fade-up-container">
        Meet the Investors
      </h1>
      <div
        data-aos="fade-up"
        className="grid grid-cols-3 lg:grid-cols-4 lg:w-[90%] mx-auto gap-10 my-10 md:px-10 px-2 lg:px-32 fade-up-container"
      >
        {images.map((image, index) => (
          <div className="founders-card" key={index}>
            <img
              className="lg:w-[200px] lg:h-[120px] md:w-52 founders-card-inner"
              src={image.img}
              alt=""
            />
          </div>
        ))}
      </div>
      <div
        data-aos="fade-up"
        className="grid grid-cols-3 lg:grid-cols-4 lg:w-[90%] mx-auto gap-10 md:px-10 px-2 lg:px-32"
      >
        {investors.map((investor, index) => (
          <div
            data-aos="fade-up"
            className="space-y-1 founders-card"
            key={index}
          >
            <img
              className="lg:w-[200px] md:w-52 mb-3 founders-card-inner"
              src={investor.img}
              alt=""
            />
            <div className="founders-content">
              {' '}
              <h2 className="text-lg">{investor.name}</h2>
              <h2 className="text-gray-500">{investor.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investors;
