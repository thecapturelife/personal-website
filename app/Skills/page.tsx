'use client'
import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/page';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaVuejs, FaBootstrap } from 'react-icons/fa';
import { SiRedux, SiNextdotjs, SiAdobephotoshop } from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactElement; // Updated type
  percentage: number;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'HTML', icon: <FaHtml5 className="text-red-500" />, percentage: 98 },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, percentage: 98 },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, percentage: 90 },
    { name: 'React', icon: <FaReact className="text-blue-400" />, percentage: 90 },
    { name: 'Redux', icon: <SiRedux className="text-purple-600" />, percentage: 80 },
    { name: 'Figma', icon: <FaFigma className="text-pink-500" />, percentage: 98 },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-200" />, percentage: 90 },
    { name: 'Vue.js', icon: <FaVuejs className="text-green-500" />, percentage: 60 },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-700" />, percentage: 85 },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-600" />, percentage: 65 },
  ];

  return (
    <div className="bg-black min-h-screen ">
      <NavBar />
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [displayedPercentage, setDisplayedPercentage] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = () => {
      if (start < skill.percentage) {
        start += 1;
        setDisplayedPercentage(start);
        requestAnimationFrame(increment);
      }
    };
    increment();
  }, [skill.percentage]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4">
        <svg className="absolute top-0 left-0 w-full h-full transform rotate-90">
          <circle cx="50%" cy="50%" r="40%" stroke="gray" strokeWidth="8" fill="transparent" />
          <circle
            cx="50%"
            cy="50%"
            r="40%"
            stroke={skill.icon.props.className}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray="251"
            strokeDashoffset={`calc(251 - (251 * ${displayedPercentage}) / 100)`}
            className="transition-stroke duration-1000 ease-in-out"
          />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-5xl sm:text-6xl text-white">
          {skill.icon}
        </div>
      </div>
      <p className="text-lg sm:text-xl font-semibold text-white">{skill.name}</p>
      <p className="text-lg sm:text-xl font-semibold text-white">{displayedPercentage}%</p>
    </div>
  );
};

export default Skills;
    