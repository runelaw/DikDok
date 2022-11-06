import React from 'react';
import Button from './Button';
import PledgeDocument from './PledgeDocument';

const Footer = () => {
  return (
    <div className="w-full md:h-[550px] py-10 px-4">
      <div className="max-w-[1600px] h-full mx-auto flex flex-col sm:items-center bg-gradient-to-r from-green-100 bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg">
        <span className="font-raleway md:text-4xl sm:text-xl sm:pt-5 md:pt-9 inline-block">
          <div className="inline">Want to be part of the </div>
          <div className="text-orange-400 inline">movement?</div>
        </span>
        <div className="py-8 flex sm:flex-col justify-between items-center h-full sm:px-3">
          <div className="flex md:flex-col items-center font-raleway md:text-2xl sm:text-lg md:px-5 ">
            <div className="py-4 px-3">Join Us 🤝</div>
            <PledgeDocument />
          </div>
          <div className="flex md:flex-col items-center py-4 md:py-8 md:px-5 b">
            <div className="px-3 font-raleway md:text-2xl sm:text-lg">
              Help us out by donating to our partnered NGOs ❤️✨
            </div>
            <Button text={'Donate'} url={'https://r.give.do/6u5pnm-N'} />
          </div>
          <span className="font-raleway md:text-2xl sm:text-lg ">
            <div className="inline">Tell the world about us. Tweet with </div>
            <div className="text-orange-400 inline">#100bhagya </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
