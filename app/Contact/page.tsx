import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { SiGmail, SiLeetcode } from 'react-icons/si';
import { BsX } from 'react-icons/bs'; // New X logo
import NavBar from '../NavBar/page';

const Contact = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <NavBar />
      <div className="flex flex-col items-center py-10">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        
        <div className="flex flex-wrap justify-center space-x-6 md:space-x-10 text-6xl mb-6">
          {/* Instagram */}
          <a href="https://www.instagram.com/the_capture_life/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transform transition duration-300">
            <FaInstagram className="hover:text-pink-500" />
          </a>
          {/* Gmail */}
          <a href="mailto:albinjohn1996th@gmail.com" className="hover:scale-110 transform transition duration-300">
            <SiGmail className="hover:text-red-500" />
          </a>
          {/* LeetCode */}
          <a href="https://leetcode.com/u/albinjohn1996th/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transform transition duration-300">
            <SiLeetcode className="hover:text-yellow-500" />
          </a>
          {/* GitHub */}
          <a href="https://github.com/thecapturelife" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transform transition duration-300">
            <FaGithub className="hover:text-gray-500" />
          </a>
          {/* X */}
          <a href="https://x.com/albinJohn1996" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transform transition duration-300">
            <BsX className="hover:text-blue-500" />
          </a>
        </div>

        <p className="text-center text-gray-400 text-sm px-4">
          Let&apos;s connect on these platforms!
        </p>
      </div>
    </div>
  );
};

export default Contact;
