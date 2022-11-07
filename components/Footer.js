import React from 'react';
import Button from './Button';
import PledgeDocument from './PledgeDocument';

const Footer = () => {
  return (
    <div className="w-full md:h-[600px] py-10 px-4">
      <div className="max-w-[1600px] h-full mx-auto flex flex-col sm:items-center bg-gradient-to-r from-green-100 bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg">
        <span className="font-raleway md:text-4xl sm:text-lg sm:pt-5 md:pt-9 inline-block">
          <div className="inline">Want to be part of the </div>
          <div className="text-orange-400 inline">movement?</div>
        </span>
        <div className="py-6 flex sm:flex-col justify-between items-center h-full sm:px-3">
          <div className="w-full flex md:flex-col sm:flex-row justify-between items-center font-raleway md:text-2xl sm:text-base px-3">
            <div className="py-4">Join Us 🤝</div>
            <PledgeDocument but={1} />
          </div>
          <div className="flex md:flex-col items-center py-4 md:pt-2 md:px-5  bg-opacity-50">
            <div className="px-3 font-raleway md:text-2xl sm:text-base">
              Help us out by donating to our partnered NGOs ❤️✨
            </div>
            <Button text={'Donate'} url={'https://r.give.do/6u5pnm-N'} />
          </div>
          <span className="md:flex md:flex-col items-center font-raleway md:text-2xl sm:text-base px-3">
            <div className="inline">Tell the world about us. Tweet with </div>
            <div className="text-orange-400 inline">#100bhagya </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
