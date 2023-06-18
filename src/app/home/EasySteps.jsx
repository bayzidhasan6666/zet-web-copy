import React from 'react';

const EasySteps = () => {
  return (
    <div
      className="lg:h-[1100px] md:h-[700px] h-[850px] bg-[#0a2540] lg:px-40"
      style={{
        clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 0% 100%)',
        backgroundImage:
          'url("https://zetapp.in/_next/static/media/earningDec.b2e9943b.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center text-white relative top-40 md:top-28 lg:top-44">
        <h1 className="text-2xl font-bold">Start Earning in 3 Easy Steps</h1>
        <p>We have created the app to make your earning easy</p>
      </div>
      <div className="mt-5 md:mt-24 lg:mt-72 ml-10 md:flex gap-5 justify-center items-center ">
        <div className="space-y-4 md:w-1/2 mt-44 md:mt-0 w-fit ">
          <button
            className="w-28 h-10 rounded-r-lg font-bold text-white bg-[#538bff] "
            style={{
              clipPath: 'polygon(0% 0%, 72% 0, 86% 100%, 100% 100%, 0% 100%)',
            }}
          >
            <span className="mr-7 md:ml-4 md:mt-2"> STEP 1</span>
          </button>
          <h1 className="md:text-2xl lg:text-3xl font-bold text-[#9ecfff]">
            Download the App and Sign Up as a ZET agent
          </h1>
          <img
            className="md:w-32 w-28 flex mx-auto md:inline-block"
            src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
            alt=""
          />
        </div>
        <div>
          <video
            className="md:h-96 mt-5 md:w-fit w-52 h-80 flex mx-auto md:inline-block rounded-2xl"
            src="https://zetapp.in/static/images/Step3.mp4"
            autoPlay
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
