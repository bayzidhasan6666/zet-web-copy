const EasySteps = ({ slider, index }) => {
  return (
    <div className=" ml-10 md:flex gap-5 justify-center items-center lg:mt-32 lg:gap-20">
      <div className="space-y-4 md:w-1/2 mt-44 md:mt-0 w-fit ">
        <button
          className="w-28 h-10 rounded-r-lg font-bold text-white bg-[#538bff] "
          style={{
            clipPath: 'polygon(0% 0%, 72% 0, 86% 100%, 100% 100%, 0% 100%)',
          }}
        >
          <span className="mr-7"> STEP {index + 1}</span>
        </button>
        <h1 className="md:text-2xl lg:text-3xl font-bold text-[#9ecfff]">
          {slider.title}
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
          src={slider.video}
          autoPlay
          muted
        />
      </div>
    </div>
  );
};

export default EasySteps;
