import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

import slider1 from 'assets/slider.jpeg';
import slider2 from 'assets/slider2.jpeg';
import slider3 from 'assets/slider3.jpeg';

const Slider = () => {
  return (
    <div className="md:hidden sm:block px-3 ">
      <a
        className="w-5/12 h-full cursor-pointer"
        onClick={() => openInNewTab('https://r.give.do/6u5pnm-N')}
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          //   pagination={{
          //     clickable: true,
          //   }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={slider1}
              alt="Logo"
              width={slider3.width}
              height={slider3.height}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider2}
              alt="Logo"
              width={slider3.width}
              height={slider3.height}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider3}
              alt="image"
              width={slider3.width}
              height={slider3.height}
            />
          </SwiperSlide>
        </Swiper>
      </a>
    </div>
  );
};

export default Slider;
