import { Box, Container, Link, Typography } from '@mui/material';
import NLink from 'next/link';
import Image from 'next/dist/client/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { images } from '../constants';
import Twitter from './Twitter';

export default function WhatIs100bhagya() {
  return (
    <>
      <div className="flex justify-center items-center w-full bg-desk">
        <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mt-8 md:mt-0">
          <div className="md:w-4/6 w-full md:mr-20">
            <div className="flex md:flex-row flex-col justify-start items-center font-karma text-hblue md:text-[48px] text-[28px] font-semibold">
              <Image
                src={images.mission}
                alt="hands"
                width={images.mission.width / 1.15}
                height={images.mission.height / 1.15}
              />
              <span className="mt-5">Our Mission </span>{' '}
            </div>

            <ul className="md:ml-8 space-y-5 font-osans md:text-[21px] text-[16px] leading-loose">
              <li>
                Saubhagya(100bhagya) is a platform to share and engage with
                ideas to support idea development and collaboration across key
                themes for India 100.{' '}
              </li>
              <li>
                A showcase of ideas with unrelenting potential and impact
                created by individuals/teams for the betterment of India.
              </li>
              <li>
                India celebrated its 75th Independence Day on Aug 15, 2021. In
                25 years, we celebrate India at 100! The next 25 years of our
                active lives coincide with the 25 years to India at 100.
              </li>
            </ul>
            <div className="flex md:justify-start justify-center">
              <div className="mt-10 flex justify-center items-center w-[175px] md:ml-12 font-inter text-[14px] px-6 py-2 rounded-sm border border-solid border-black hover:cursor-pointer">
                LEARN MORE
                <ArrowRightAltIcon />
              </div>
            </div>
          </div>
          <div className="md:w-2/6 w-full h-full md:mt-40 mt-20 mb-10 md:mb-0 md:ml-20">
            <Twitter />
          </div>
        </div>
      </div>
    </>
  );
}
