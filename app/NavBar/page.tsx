// components/NavBar.tsx
'use client';
import Link from 'next/link';
import React, { useRef } from 'react';

const NavBar = () => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle('hidden');
    }
  };

  return (
    <div className='bg-gray-600'>
      <div className='h-14 flex items-center justify-between px-6 md:px-12'>
        <h1 className="text-3xl font-bold text-gradient">Albin John</h1>

        <div className='hidden md:flex space-x-6'>
          <Link href="/">
            <h1 className='text-white hover:text-gray-400 cursor-pointer'>Home</h1>
          </Link>
          <Link href="/About">
            <h1 className='text-white hover:text-gray-400 cursor-pointer'>About</h1>
          </Link>
          <Link href="/Projects">
            <h1 className='text-white hover:text-gray-400 cursor-pointer'>Projects</h1>
          </Link>
          <Link href="/Skills">
            <h1 className='text-white hover:text-gray-400 cursor-pointer'>Skills</h1>
          </Link>
          <Link href="/Contact">
            <h1 className='text-white hover:text-gray-400 cursor-pointer'>Contact</h1>
          </Link>
        </div>

        <button 
          className='md:hidden text-white' 
          onClick={toggleMenu}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
      </div>
      
      <div className='md:hidden hidden' ref={mobileMenuRef}>
        <div className='flex flex-col space-y-4 p-6'>
          <Link href="/">
            <h1 className='text-white hover:text-gray-400 cursor-pointer'>Home</h1>
          </Link>
          <Link href="/About">
            <h1 className='text-white hover:text-gray-400 cursor-pointer'>About</h1>
          </Link>
          <Link href="/Projects">
            <h1 className='text-white hover:text-gray-400 cursor-pointer'>Projects</h1>
          </Link>
          <Link href="/Skills">
            <h1 className='text-white hover:text-gray-400 cursor-pointer'>Skills</h1>
          </Link>
          <Link href="/Contact">
            <h1 className='text-white hover:text-gray-400 cursor-pointer'>Contact</h1>
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, rgba(0, 204, 255, 1) 0%, rgba(255, 102, 204, 1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
