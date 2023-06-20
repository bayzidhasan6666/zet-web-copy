const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOurMission.13d85461.png&w=3840&q=100")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="md:h-[350px] h-[500px] lg:h-screen"
    >
      <div className="">
        <div className="text-3xl lg:text-4xl font-bold text-center uppercase w-1/2 lg:w-[520px] mx-auto space-y-2 text-white lg:pt-56 pt-20">
          <h1> Our Mission</h1>
          <p className="text-sm font-light">
            Enabling financial inclusion for the next billion Indians & making
            their Zindagi Set. Building a platform that enables you to sell
            financial products & earn up to Rs. 1 lakh every month.
          </p>
          <p className="text-lg font-mono">EARN BETTER. LIVE BETTER.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
