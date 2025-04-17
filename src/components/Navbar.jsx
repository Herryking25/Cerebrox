import React from 'react';
import logo from '../assets/images/Logo.png'; // Replace with the actual path to the logo

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 '>
        <div>
            <img src={logo} alt="" className='w-20' />
        </div>
        <div>
            <ul className='flex gap-10 font-recoletaNormal text-[20px] justify-center items-center'>
                <li className='border-2 rounded-full px-6 py-2 border-[#EC4B20] text-[#EC4B20] '>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact  Us</li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
