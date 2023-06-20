'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Featured = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const company = [
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEconomicTimes.5724030e.png&w=640&q=75',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInc42.7697aec8.png&w=640&q=75',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmint.410f3a1a.png&w=640&q=75',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYourStory.1efabc81.png&w=640&q=75',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBusinessStandard.047c592d.png&w=640&q=75',
    },
  ];

  return (
    <div data-aos="fade-right">
      <h1 className="font-bold text-2xl lg:text-3xl px-2 md:px-10 lg:px-32">
        Got Featured
      </h1>
      <div className="flex items-center gap-5 mx-auto w-fit my-10 md:px-10 px-2 lg:px-32">
        {company.map((image, index) => (
          <div className="" key={index}>
            <img
              className="lg:w-[315px] lg:h-[170px] md:w-52"
              src={image.img}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
