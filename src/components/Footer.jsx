import React from 'react';

// Import images from the assets folder
import logoImage from '../assets/images/cerebrox.png'; 
import facebookIcon from '../assets/images/Facebook.png'
import twitterIcon from '../assets/images/Twitter.png'
import linkedinIcon from '../assets/images/LinkedIn.png'
import gmail from '../assets/images/gmailIcon.png'
import phone from '../assets/images/phoneIcon.png'
import location from '../assets/images/locationIcon.png'

const Footer = () => {
  return (
    <footer className=" w-full bg-black text-white font-recoletaMedium py-8 px-20">
      <div className="max-w-7xl mx-auto">
        {/* Flexed Container for Logo, Navigation, and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoImage} alt="Cerebrox Logo" className="w-20 mr-2" />
            {/* <span className="text-xl font-bold">Cerebrox</span> */}
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-orange-500 transition">Home</a>
            <a href="#" className="hover:text-orange-500 transition">Services</a>
            <a href="#" className="hover:text-orange-500 transition">About</a>
            <a href="#" className="hover:text-orange-500 transition">Contact</a>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-2">
            <span className="text-sm">Stay Connected</span>
            <div className="flex space-x-2">
              <a href="#" className="bg-gray-800 rounded-lg hover:bg-orange-500 transition">
                <img src={facebookIcon} alt="Facebook" className="w-10 h-10" />
              </a>
              <a href="#" className="bg-gray-800 rounded-lg hover:bg-orange-500 transition">
                <img src={twitterIcon} alt="Twitter" className="w-10 h-10" />
              </a>
              <a href="#" className="bg-gray-800 rounded-lg hover:bg-orange-500 transition">
                <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm mb-6">
            
                    <div className="flex gap-4">
                        <div className='flex gap-2 items-center'>
                            <img src={gmail} alt="" className='w-5' />
                            <span>hello@squareup.com</span>
                        </div>
                        <div className="flex gap-2 items-center">
                        <img src={phone} alt="" className='w-5' />
                            <span>+91 91813 23 2309</span>
                        </div>
                        <div className="flex gap-2 items-center">
                        <img src={location} alt="" className='w-5' />
                            <span>Somewhere in the World</span>
                        </div>
                    </div>

                  {/* Copyright Notice */}
                <div className="text-center font-recoletaNormal text-[12px] text-[#98989A]">
                    © 2023 Squareup. All rights reserved.
                </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;