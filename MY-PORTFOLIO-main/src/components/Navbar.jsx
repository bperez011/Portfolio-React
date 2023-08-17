import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaCertificate,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#282a36] text-gray-300'>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='Project' smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#282a36] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='project' smooth={true} duration={500}>
            Project
          </Link>
          </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
  <ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
      <a
        className='flex justify-between items-center w-full text-gray-300'
        href='https://www.linkedin.com/in/bictor-perez-okomura-092297230/'
        target='_blank'
        rel='noopener noreferrer'
      >
        LinkedIn <FaLinkedin size={30} />
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
      <a
        className='flex justify-between items-center w-full text-gray-300'
        href='https://github.com/bperez011/'
        target='_blank'
        rel='noopener noreferrer'
      >
        GitHub <FaGithub size={30} />
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
      <a
        className='flex justify-between items-center w-full text-gray-300'
        href='Bictorperez115@Gmail.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        Email <HiOutlineMail size={30} />
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
      <a
        className='flex justify-between items-center w-full text-gray-300'
        href='https://bperez011.github.io/Resume/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Resume <BsFillPersonLinesFill size={30} />
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#800020]'>
      <a
        className='flex justify-between items-center w-full text-gray-300'
        href='https://www.credly.com/badges/2d6d21a4-d0bc-455e-8914-d7a72dc33b3c/public_url'
        target='_blank'
        rel='noopener noreferrer'
      >
        Creadly <FaCertificate size={30} />
      </a>
    </li>

  </ul>
</div>
    </div>
  );
};

export default Navbar;
