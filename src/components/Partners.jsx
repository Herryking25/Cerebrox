import React from 'react';
import Partner from '../assets/images/partner.png';

// JSON data for the logos with image URLs
const logosData = [
  {
    mainImage: Partner,
  },
  {
    mainImage: Partner,
  },
  {
    mainImage: Partner,
  },
  {
    mainImage: Partner,
  },
  {
    mainImage: Partner,
  },
];

const LogoSection = () => {
  return (
    <div className="bg-[#EAEAEA] w-full h-[150px] flex items-center justify-center">
      <div className="flex justify-center space-x-16">
        {logosData.map((logo, index) => (
          <div key={index}>
            <img
              src={logo.mainImage}
              alt="Main Logo"
              className="h-12 mr-2" // Adjust height and margin as needed
            />
            {/* <img
              src={logo.subImage}
              alt="Sub Logo"
              className="h-8 mr-1" // Adjust height and margin as needed
            /> */}
            {/* <span className="text-4xl text-gray-800">
              {logo.dot}
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;