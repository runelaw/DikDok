import React, { useState, useEffect } from 'react';
import logo from 'assets/logo-english-copy.png';
import logow from 'assets/logo-english-white.png';
import Image from 'next/image';
import Link from 'next/link';

import PledgeDocument from './PledgeDocument';
import MenuItems from './MenuItems';
import { MenuOutlined } from '@material-ui/icons';

export default function Navigation() {
  let Links = [{ name: 'about', link: '/about' }];

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
    <>
      <header
        className={`flex fixed w-11/12 mx-auto left-0 right-0 ${
          scrolled ? 'top-0' : 'top-8'
        } h-12 duration-500 ease out transition all font-mplus z-20`}
      >
        <div
          className={`overflow-visible w-full text-white flex justify-between ${
            scrolled
              ? 'bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg z-20'
              : 'bg-black bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg z-20'
          } navbar rounded-full`}
        >
          <div className="flex items-center justify-center px-10 hover:cursor-pointer">
            <Link href="/" passHref>
              <Image
                src={scrolled ? logo : logow}
                alt="Logo"
                width={scrolled ? logo.width / 17 : logo.width / 20}
                height={scrolled ? logo.height / 20 : logo.height / 10}
              />
            </Link>
          </div>
          <div className="absolute right-6 md:hidden top-4">
            <MenuOutlined
              style={scrolled ? { color: 'black' } : { color: 'white' }}
              onClick={showMenu}
              className="cursor-pointer"
            />
          </div>
          <ul className="hidden md:flex items-center px-10 list-none">
            {Links.map((link) => (
              <li
                key={link.name}
                className={`ml-8 font-mplus ${
                  scrolled ? 'text-black' : 'text-white'
                } hover:text-gray-400 hover:border-b uppercase`}
              >
                <Link href={link.link} passHref>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <MenuItems showMenu={showMenu} active={active} />
      </header>
    </>
  );
}
