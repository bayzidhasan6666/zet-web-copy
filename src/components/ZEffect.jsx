import React from 'react';

const ZEffect = () => {
  const allData = [
    {
      title: 'THE ZET EFFECT',
      subtitle:
        '14 Lakh+ Financial Advisor across India are using ZET to increase their income',
    },
  ];
  return (
    <div
      className="bg-[#145cc5] h-[400px] md:h-[500px] lg:h-[800px] w-full"
      style={{ clipPath: 'polygon(0 20%, 100% 0, 100% 79%, 0% 100%)' }}
    >
      <div
        className="bg-[#417fda]  lg:h-[500px] lg:w-[1200px]  mx-auto relative  lg:top-36 hidden lg:flex rounded-lg"
        style={{
          clipPath: 'polygon(0 30%, 100% 0, 100% 70%, 0% 100%)',
        }}
      >
        <div>
          <img
            className="relative top-24 hidden lg:flex"
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=750&q=75"
            alt=""
          />
        </div>
        <div className="relative top-44 font-bold text-white text-xl">
          <h1>THE ZET EFFECT</h1>
          <h2 className="text-2xl mt-3">
            14 Lakh+ Financial Advisor across india are using ZET to increase
            there income
          </h2>
        </div>
      </div>
      <div
        className="bg-[#417fda] md:h-[400px] md:w-[600px]  mx-auto relative md:top-12 lg:top-48 hidden rounded-lg md:flex"
        style={{
          clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 0% 100%)',
        }}
      >
        {' '}
        <div className="">
          <img
            className="relative top-36 hidden md:flex"
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=750&q=75"
            alt=""
          />
        </div>
        <div className="relative top-32 font-bold text-white text-xl">
          <h1>THE ZET EFFECT</h1>
          <h2 className="text-2xl mt-3">
            14 Lakh+ Financial Advisor across india are using ZET to increase
            there income
          </h2>
        </div>
      </div>
      <div
        className="bg-[#417fda] h-[300px] w-[380px]  mx-auto relative top-12  lg:hidden md:hidden rounded-lg"
        style={{
          clipPath: 'polygon(0 25%, 100% 0, 100% 75%, 0% 100%)',
        }}
      >
        {' '}
        <div className=" relative top-20 ml-5 font-bold text-white text-xl">
          <h1>THE ZET EFFECT</h1>
          <h2 className="text-2xl mt-3">
            14 Lakh+ Financial Advisor across india are using ZET to increase
            there income
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ZEffect;
