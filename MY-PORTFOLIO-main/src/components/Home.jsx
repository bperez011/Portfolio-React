import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#282a36]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#bd93f9]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#bd93f9]'>
          Bictor Perez Okomura
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ff79c6]'>
          I'm a Future WEB developer and hopefully a Softwear engenieer. 
        </h2>
        <p className='text-[#ff79c6] py-4 max-w-[700px]'>
          At the moment you can say im a up in coming Junior Web Developer with front-end and Back-end skills.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ff79c6] hover:border-[#ff79c6]'>
            View Projects 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
