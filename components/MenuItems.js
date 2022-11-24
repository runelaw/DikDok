import React from 'react';
import Link from 'next/link';
import { Close } from '@material-ui/icons';

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={`list-none ${
        active
          ? 'flex-col flex items-center fixed inset-0 justify-center left-1/4 uppercase gap-8 md:hidden p-8 bg-gradient-to-b from-orange-100 via-white to-green-100 backdrop-blur-lg cursor-pointer text-black'
          : 'hidden'
      } `}
    >
      <Close onClick={showMenu} />
      <li>
        <Link href="/about" passHref>
          About
        </Link>
      </li>
      <li>
        <Link href="/" passHref>
          Home
        </Link>
      </li>
      <li>
        <Link href="/goodsearch" passHref>
          Good Search
        </Link>
      </li>
    </ul>
  );
};

export default MenuItems;
