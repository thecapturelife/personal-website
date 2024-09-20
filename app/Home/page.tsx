'use client';
import React from 'react';
import NavBar from '../NavBar/page';

const Home = () => {
  return (
    <div className="bg-black h-auto text-white">
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/albi.jpeg)' }}> 
        <h1 className="text-4xl font-bold mb-4">Welcome to Albin&apos;s World of Creativity</h1>
        <p className="text-xl">Specializing in Frontend Development</p>
      </div>
      <div className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <h3 className="text-xl font-bold mt-4">Frontend Development</h3>
            <p className="text-sm mt-2">Building interactive and responsive websites using React & Next.js.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mt-4">UI/UX Design</h3>
            <p className="text-sm mt-2">Creating visually appealing and user-friendly interfaces.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mt-4">Web Development</h3>
            <p className="text-sm mt-2">Delivering high-quality web applications tailored to client needs.</p>
          </div>
        </div>
      </div>
      <div className='font-extralight font-mono text-center bg-slate-500'>
        <h1>albinjohn@1996</h1>
      </div>
    </div>
  );
};

export default Home;
