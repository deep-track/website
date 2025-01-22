import React from 'react';
import Link from 'next/link';
import { Navigation } from './navigation';
import Image from 'next/image';
import { NavbarSheet } from './navbar-sheet';

export function Navbar() {
  return (
    <nav className="w-full z-0">
      <div className="max-w-7xl border-gray-500 border-b-[1px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={'/'}>
              <div className="flex flex-row items-center space-x-2 mb-2 mt-2">
              <span className="text-2xl text-white">
                  deeptrack
                </span>
                <Image src={'/deeptrack-favicon.ico'} className="grayscale" width={30} height={30} alt="Logo" />
              </div>
            </Link>
          </div>
          <div className="hidden md:block ">
            <div className="ml-10 flex items-baseline space-x-4">
              <Navigation />
            </div>
          </div>


          <div className="-mr-2 flex md:hidden">
            <NavbarSheet />
          </div>
        </div>
      </div>

  
    </nav>
  );
};
