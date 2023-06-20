'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import { Autoplay } from 'swiper';
import EasySteps from './EasySteps';
import StepsData from '@/data/StepsData';
const StepsSlider = () => {
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
      <div className="text-white text-center md:text-start relative top-40 md:top-28 lg:top-44">
        <div className='text-center'>
          <h1 className="text-2xl font-bold">Start Earning in 3 Easy Steps</h1>
          <p>We have created the app to make your earning easy</p>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop
          autoplay
          modules={[Autoplay]}
        >
          {StepsData.map((slider, index) => (
            <SwiperSlide key={index}>
              <EasySteps index={index} slider={slider}></EasySteps>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default StepsSlider;
