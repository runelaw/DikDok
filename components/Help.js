import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import slider1 from 'assets/slider.jpeg';
import slider2 from 'assets/slider2.jpeg';
import slider3 from 'assets/slider3.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Help = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1600px] mx-auto flex md:flex-row sm:flex-col sm:items-center">
        <div className="w-5/12 h-full flex items-center justify-center sm:pb-5">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
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
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl tracking-tight text-green-600 px-20 font-mont">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('140 Crore people')
                  .pauseFor(500)
                  .deleteAll()
                  .typeString('The youngest population in the world')
                  .pauseFor(500)
                  .deleteAll()
                  .typeString('25 Years to make a difference!')
                  .start();
              }}
            />
          </div>
          <div className="md:px-20 py-10 font-mplus text-3xl">
            100bhagya, India 100 is a unifying movement to integrate all people
            and ideas working towards India&apos;s betterment in the next 25
            years.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
