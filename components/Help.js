import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import slider1 from 'assets/slider.jpeg';
import slider2 from 'assets/slider2.jpeg';
import slider3 from 'assets/slider3.jpeg';
import Button from './Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Help = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full md:h-[550px] py-10 px-4">
      <div className="max-w-[1600px] h-full mx-auto flex md:flex-row sm:flex-col sm:items-center bg-gradient-to-r from-orange-100 bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg">
        {/* <div className="w-5/12 h-full flex items-center justify-center sm:pb-5"> */}
        <a
          className="w-5/12 h-full sm:hidden md:flex items-center justify-center sm:pb-5 cursor-pointer pl-10 py-10"
          onClick={() => openInNewTab('https://r.give.do/6u5pnm-N')}
        >
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
        </a>
        {/* </div> */}
        <div className="flex flex-col items-center justify-center md:px-20 sm:px-8 sm:py-20">
          <div className="flex items-start sm:text-xl md:text-3xl tracking-tight text-green-600 md:px-20 sm:px-0 font-mont">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('140 Crore people')
                  .pauseFor(500)
                  .deleteAll()
                  .typeString('An active young population')
                  .pauseFor(500)
                  .deleteAll()
                  .typeString('25 Years to make a difference!')
                  .start();
              }}
            />
          </div>
          <div className="md:pl-20 py-10 sm:py-5 font-mplus md:text-xl sm:text-lg">
            100bhagya, India 100 is a unifying movement to integrate all people
            and ideas working towards India&apos;s betterment in the next 25
            years.
          </div>
          <div className="flex md:flex-row sm:flex-col justify-between items-center md:pt-7">
            <Button
              text={'Learn More'}
              url={'https://www.100bhagya.com/about'}
            />
            <Button text={'Donate'} url={'https://r.give.do/6u5pnm-N'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
