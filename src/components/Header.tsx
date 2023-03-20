import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Bars2Icon } from "@heroicons/react/24/outline";

interface HeaderProps {}

const navLinks = [
  { title: "Specs", href: "#specs" },
  { title: "Order", href: "#order" },
  { title: "Cart", href: "/cart" },
];

const Header: FC<HeaderProps> = ({}) => {
  return (
    <nav className='bg-transparent relative flex justify-between items-center w-full px-8 py-4 sm:px z-50  '>
      <div className='flex-1 text-gray-500 cursor-pointer'>
        <Bars2Icon className='w-10' />
      </div>
      <div className='flex-1 flex justify-end lg:justify-center '>
        <Image
          src={"/bugatti-brand.png"}
          alt='bugatti-brand'
          width={94}
          height={94}
          className='w-24'
          priority
        />
      </div>
      <div className='hidden lg:flex flex-1  gap-6 justify-end font-semibold text-gray-500'>
        {navLinks.map((link) => (
          <Link key={link.title} href={link.href}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
