import React from 'react';
import '../../components/FadeAnime.css';
const Banner = () => {
  return (
    <div className="md:flex mt-10 md:mt-20 h-80 justify-between items-center md:w-10/12 lg:w-8/12 mx-auto bg-[#e9f4ff] px-5 py-10 md:p-10 rounded-lg fade-up-container">
      <div className="lg:w-7/12 md:w-full space-y-3 md:text-start text-center">
        <h1 className="text-4xl font-bold">
          Become a Financial Advisor{' '}
          <span className="text-[#264eff]">and Earn Rs.1 Lakh/Month</span>
        </h1>
        <p className="text-lg">No investment required</p>
        <div className="cursor-pointer flex mx-auto w-fit md:w-full">
          <img
            src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
            alt=""
          />
        </div>
      </div>
      <div className="mt-10 md:mt-0 hidden md:flex">
        {' '}
        <img
          className="relative md:bottom-20 lg:bottom-6 md:w-80 lg:w-96"
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=750&q=75"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
