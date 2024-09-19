import React from 'react';
import NavBar from '../NavBar/page';

const Projects = () => {
  const projects = [
    { name: 'Ecommerce Pet Foods App', description: 'An online platform for purchasing pet foods.', github: 'https://github.com/thecapturelife/MyReact-first-project-petsfood', image: 'Eco.png' },
    { name: 'Social Media App Using API', description: 'A social media application utilizing various APIs.', github: 'https://github.com/thecapturelife/Spedire-SocialMediaApp-Nextjs', image: 'SM.png' },
    { name: 'Portfolio Using HTML/CSS', description: 'A personal portfolio showcasing my work.', github: 'https://github.com/thecapturelife/portfolio', image: 'pt.png' },
  ];

  return (
    <div className='bg-black min-h-screen'>
      <NavBar />
      <div className='flex flex-col items-center mt-8 px-4'>
        <h1 className='text-white font-extrabold text-4xl text-center mb-6'>
          <span className='text-red-800'>My</span> Projects
        </h1>

        <div className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <div key={index} className='relative group w-full max-w-sm bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl mx-2'>
              <img src={project.image} alt={project.name} className='w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-80' />
              <div className='relative z-10 p-4 flex flex-col justify-between items-center'>
                <h2 className='text-lg font-bold text-white text-center'>{project.name}</h2>
                <p className='text-sm text-white text-center'>{project.description}</p>
                <a href={project.github} target='_blank' rel='noopener noreferrer' className='mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold transition duration-200'>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
