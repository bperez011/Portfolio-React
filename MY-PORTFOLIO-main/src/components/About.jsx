import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#282a36] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#bd93f9]'>
              About ME
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p> Hi my name is Bictor, Yes victor with a B </p>
            </div>
            <div>
              <p>I am a SMU Bootcamp graduate. with Knowledge in CSS, HTML, JAVASCRIPT, REACT. 
                </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
