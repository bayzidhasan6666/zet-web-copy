'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import SingleSlider from './SingleSlider';
import ZSlider from '@/data/ZSlider';

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation
        effect="fade"
        autoplay
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {ZSlider.map((slider, index) => (
          <SwiperSlide key={index}>
            <SingleSlider slider={slider}></SingleSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
