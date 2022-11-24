import React, { useState, useEffect } from 'react';
import logo from 'assets/logo-english0.png';
import Image from 'next/image';
import Link from 'next/link';

import PledgeDocument from './PledgeDocument';
import MenuItems from './MenuItems';
import { MenuOutlined } from '@material-ui/icons';

export default function Navigation() {
  let Links = [
    { name: 'home', link: '/' },
    { name: 'good search', link: '/goodsearch' },
    { name: 'about', link: '/about' },
  ];

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const [scrolled, setScrolled] = useState(0);
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (show) {
        setScrolled(1);
      } else {
        setScrolled(0);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <>
    //   {/* <header
    //     className={`flex fixed w-11/12 mx-auto left-0 right-0 ${
    //       scrolled ? 'top-0' : 'top-8'
    //     } h-12 duration-500 ease out transition all font-mplus z-20`}
    //   >
    //     <div
    //       className={`overflow-visible w-full text-white flex justify-between ${
    //         scrolled
    //           ? 'bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg z-20'
    //           : 'bg-black bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg z-20'
    //       } navbar rounded-full`}
    //     >
    //       <div className="flex items-center justify-center px-10 hover:cursor-pointer">
    //         <Link href="/" passHref>
    //           <Image
    //             src={scrolled ? logo : logow}
    //             alt="Logo"
    //             width={scrolled ? logo.width / 17 : logo.width / 20}
    //             height={scrolled ? logo.height / 20 : logo.height / 10}
    //           />
    //         </Link>
    //       </div>
    //       <div className="absolute right-6 md:hidden top-4">
    //         <MenuOutlined
    //           style={scrolled ? { color: 'black' } : { color: 'white' }}
    //           onClick={showMenu}
    //           className="cursor-pointer"
    //         />
    //       </div>
    //       <ul className="hidden md:flex items-center px-10 list-none">
    //         {Links.map((link) => (
    //           <li
    //             key={link.name}
    //             className={`ml-8 font-mplus ${
    //               scrolled ? 'text-black' : 'text-white'
    //             } hover:text-gray-400 hover:border-b uppercase`}
    //           >
    //             <Link href={link.link} passHref>
    //               {link.name}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </div> */}
    //     <MenuItems showMenu={showMenu} active={active} />
    //   </header>
    // </>
    <>
      <nav className="flex justify-center items-center w-full fixed z-20 bg-white">
        <div className="flex flex-row justify-between md:px-8 py-4 w-11/12 md:w-10/12">
          <div className="flex items-center justify-between md:justify-center hover:cursor-pointer w-[110px] md:w-[150px] md:h-[60px]">
            <Link href="/" passHref>
              <Image src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-row w-auto justify-center items-center">
            <ul className="hidden md:flex font-mweather uppercase text-sm list-none hover:cursor-pointer ">
              {Links.map((link) => (
                <li key={link.name} className="mx-4">
                  <Link href={link.link} passHref>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center">
              <div
                className="md:ml-16 font-inter text-xs md:px-6 px-4 py-2 rounded-sm border border-solid border-black hover:cursor-pointer"
                onClick={() => openInNewTab('https://r.give.do/6u5pnm-N')}
              >
                DONATE
              </div>
              <div className="px-3 md:hidden w-full">
                <MenuOutlined
                  fontSize="large"
                  onClick={showMenu}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </>
  );
}
