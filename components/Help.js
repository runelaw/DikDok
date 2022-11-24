import React from 'react';
import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { images } from '../constants';
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
    // <div className="w-full md:h-[550px] py-10 px-4">
    //   <div className="max-w-[1600px] h-full mx-auto flex md:flex-row sm:flex-col sm:items-center bg-gradient-to-r from-orange-100 bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg">
    //     {/* <div className="w-5/12 h-full flex items-center justify-center sm:pb-5"> */}
    //     <a
    //       className="w-5/12 h-full sm:hidden md:flex items-center justify-center sm:pb-5 cursor-pointer pl-10 py-10"
    //       onClick={() => openInNewTab('https://r.give.do/6u5pnm-N')}
    //     >
    //       <Swiper
    //         spaceBetween={30}
    //         centeredSlides={true}
    //         autoplay={{
    //           delay: 2500,
    //           disableOnInteraction: false,
    //         }}
    //         pagination={{
    //           clickable: true,
    //         }}
    //         navigation={true}
    //         modules={[Autoplay, Pagination, Navigation]}
    //         className="mySwiper"
    //       >
    //         <SwiperSlide>
    //           <Image
    //             src={slider1}
    //             alt="Logo"
    //             width={slider3.width}
    //             height={slider3.height}
    //           />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Image
    //             src={slider2}
    //             alt="Logo"
    //             width={slider3.width}
    //             height={slider3.height}
    //           />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Image
    //             src={slider3}
    //             alt="image"
    //             width={slider3.width}
    //             height={slider3.height}
    //           />
    //         </SwiperSlide>
    //       </Swiper>
    //     </a>
    //     {/* </div> */}
    //     <div className="flex flex-col items-center justify-center md:px-20 sm:px-8 sm:py-20">
    //       <div className="flex items-start sm:text-xl md:text-3xl tracking-tight text-green-600 md:px-20 sm:px-0 font-mont">
    //         <Typewriter
    //           onInit={(typewriter) => {
    //             typewriter
    //               .typeString('140 Crore people')
    //               .pauseFor(500)
    //               .deleteAll()
    //               .typeString('An active young population')
    //               .pauseFor(500)
    //               .deleteAll()
    //               .typeString('25 Years to make a difference!')
    //               .start();
    //           }}
    //         />
    //       </div>
    //       <div className="md:pl-20 py-10 sm:py-5 font-mplus md:text-xl sm:text-lg">
    //         100bhagya, India 100 is a unifying movement to integrate all people
    //         and ideas working towards India&apos;s betterment in the next 25
    //         years.
    //       </div>
    //       <div className="flex md:flex-row sm:flex-col justify-between items-center md:pt-7">
    //         <Button
    //           text={'Learn More'}
    //           url={'https://www.100bhagya.com/about'}
    //         />
    //         <Button text={'Donate'} url={'https://r.give.do/6u5pnm-N'} />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <div className="flex justify-center items-center w-full h-10/12 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center w-11/12 md:my-28 my-10">
          <div className="w-[19rem] md:w-[40rem] h-8/12 md:pr-10 ">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src={images.slider}
                  alt="Logo"
                  width={images.slider3.width}
                  height={images.slider3.height}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={images.slider2}
                  alt="Logo"
                  width={images.slider3.width}
                  height={images.slider3.height}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={images.slider3}
                  alt="image"
                  width={images.slider3.width}
                  height={images.slider3.height}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full md:w-3/6 mt-12 md:mt-0">
            <div className="flex flex-col md:flex-row justify-start items-center font-karma text-hblue md:text-[48px] text-[28px] font-semibold text-center leading-6">
              <Image
                src={images.together}
                alt="hands"
                width={images.together.width / 1.15}
                height={images.together.height / 1.15}
              />
              <span className="mt-4">Together we make a difference </span>{' '}
            </div>

            <div className="mt-10 md:ml-24 font-osans md:text-[21px] text-[16px] text-center md:text-left">
              100bhagya, India 100 is a unifying movement to integrate all
              people and ideas working towards India&apos;s betterment in the
              next 25 years. The vision is a 100 Crore people unified and
              working together for building a conscious, sustainable and
              prosperous nation.
            </div>
            <div className="flex md:flex-row flex-col md:justify-start justify-between items-center my-10 md:mt-10 md:ml-24">
              <div
                className="flex items-center font-inter text-sm px-6 py-2 rounded-sm bg-black text-white hover:cursor-pointer"
                onClick={() => openInNewTab('https://r.give.do/6u5pnm-N')}
              >
                DONATE
              </div>
              <div className="flex flex-row items-center md:mt-0 mt-6 md:ml-10 font-inter text-xs md:text-sm px-6 py-2 rounded-sm border border-solid border-black hover:cursor-pointer">
                SEARCH FOR NGOs
                <ArrowRightAltIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
