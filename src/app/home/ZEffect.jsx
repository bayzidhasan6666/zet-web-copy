'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import { Autoplay, EffectFade } from 'swiper';
import SingleSlider from '@/components/SingleSlider';
import ZSlider from '@/data/ZSlider';

const ZEffect = () => {
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
        <div className="flex justify-between">
          <img
            className="relative top-24 hidden lg:flex"
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=750&q=75"
            alt=""
          />
        </div>
        <div className="relative top-44 font-bold text-white text-xl w-1/2">
          <h1 className='mb-2'>THE ZET EFFECT</h1>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop
            autoplay
            modules={[ Autoplay]}
          >
            {ZSlider.map((slider, index) => (
              <SwiperSlide key={index}>
                <SingleSlider slider={slider}></SingleSlider>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div
        className="bg-[#417fda] md:h-[400px] md:w-[600px]  mx-auto relative md:top-12 lg:top-48 hidden rounded-lg md:flex"
        style={{
          clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 0% 100%)',
        }}
      >
        {' '}
        <div className="flex justify-between">
          <img
            className="relative top-36 hidden md:flex"
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=750&q=75"
            alt=""
          />
        </div>
        <div className="relative top-32 font-bold text-white text-xl w-96">
          <h1 className='mb-2'>THE ZET EFFECT</h1>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop
            autoplay
            modules={[Autoplay]}
          >
            {ZSlider.map((slider, index) => (
              <SwiperSlide key={index}>
                <SingleSlider slider={slider}></SingleSlider>
              </SwiperSlide>
            ))}
          </Swiper>
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
          <h1 className='mb-2'>THE ZET EFFECT</h1>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop
            autoplay
            modules={[ Autoplay]}
          >
            {ZSlider.map((slider, index) => (
              <SwiperSlide key={index}>
                <SingleSlider slider={slider}></SingleSlider>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ZEffect;
