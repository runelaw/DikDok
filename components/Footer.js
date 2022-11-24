import React from 'react';
import Button from './Button';
import PledgeDocument from './PledgeDocument';
import Image from 'next/dist/client/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { images } from '../constants';

const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-white">
      <div className="flex flex-col justify-between w-11/12 my-10 ">
        <div className="font-gmond text-center md:text-5xl text-3xl md:leading-4 leading-7">
          <p className="">
            &quot;That the powerful play goes on and you may contribute a verse.
          </p>
          <p>&nbsp;What will your verse be?&quot;</p>
          <p className="w-11/12 flex justify-end text-base font-mserrat">
            -Walt Whitman
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:my-20 my-16 space-y-20">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={images.pledge}
              alt="pledge"
              width={images.pledge.width}
              height={images.pledge.height}
            />
            <PledgeDocument but={2} />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={images.tweet}
              alt="tweet"
              width={images.pledge.width}
              height={images.pledge.height}
            />
            <div className="flex justify-center items-center w-[260px] font-inter text-[14px] px-6 py-2 rounded-sm border border-solid border-black hover:cursor-pointer">
              Tweet with #100Bhagya
              <ArrowRightAltIcon />
            </div>
          </div>
          <div className="flex flex-col items-center md:justify-start">
            <Image
              src={images.donate}
              alt="donate"
              width={images.pledge.width}
              height={images.pledge.height}
            />
            <div
              className=" flex justify-center items-center w-[260px] font-inter text-[14px] px-6 py-2 rounded-sm border border-solid border-black hover:cursor-pointer"
              onClick={() => openInNewTab('https://r.give.do/6u5pnm-N')}
            >
              Donate to NGOs
              <ArrowRightAltIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
