import React from 'react';
import NavBar from '../NavBar/page';
import DownloadButton from './Resumedw';
import Image from 'next/image';

const About = () => {
  return (
    <div className='bg-black h-screen flex flex-col'>
      <NavBar />
      <div className='flex flex-col md:flex-row h-full'>
        <div className='flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-4 md:px-16 py-8'>
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="w-36 h-36 md:w-44 md:h-44 border-pink-300 rounded-full overflow-hidden border-4 relative">
              <Image 
                src="/albi2.jpg" 
                alt="Profile Picture" 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
          </div>
          <h1 className='font-extrabold text-3xl md:text-5xl text-white text-center md:text-left'>
            <span className='text-red-800 text-4xl md:text-6xl'>I'm</span> ALBIN JOHN
          </h1>
          <h2 className='font-serif text-gray-50 text-xl md:text-3xl mt-2 md:mt-4 text-center md:text-left'>Frontend Developer</h2>
          <p className='mt-4 font-serif text-white text-center md:text-left max-w-sm md:max-w-md'>
            I'm a passionate React developer with experience in building beautiful and functional web applications. I love creating user-friendly interfaces and solving complex problems through code.
          </p>
          <div className='mt-6'>
            <DownloadButton />
          </div>
        </div>

        <div className='relative w-full md:w-1/2 h-64 md:h-full'>
          <Image 
            src="/albi.jpeg" 
            alt="Background" 
            layout="fill" 
            objectFit="cover" 
            className='absolute top-0 right-0 h-full w-full'
          />
          <div className='absolute top-0 right-0 h-full w-full bg-black opacity-75' style={{ mixBlendMode: 'multiply' }} />
        </div>
      </div>
    </div>
  );
}

export default About;
