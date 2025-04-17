import React from 'react';
import brushIcon from '../assets/images/paintbrush.png';
import boltIcon from '../assets/images/batterycharge.png';
import puzzleIcon from '../assets/images/puzzle.png';
import Button from './Button';

const ServiceCard = () => {
  const services = [
    {
      title: 'Website Design',
      description: 'Beautiful, responsive websites that capture your brand’s essence and convert visitors into clients.',
      icon: brushIcon,
    },
    {
      title: 'Digital Marketing',
      description: 'Engage your audience with targeted campaigns and content that drive results',
      icon: boltIcon,
    },
    {
      title: 'Building Online Presence',
      description: 'Boost your visibility with tailored strategies for SEO, Google My Business, and more',
      icon: puzzleIcon,
    },
  ];

  return (
    <section className="bg-[#FAFAFA] py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-4xl font-bold text-center mb-16">
          Our Services
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-start">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-6 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="p-4 shadow-lg rounded-2xl">
                <img src={service.icon} alt={service.title} className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-recoletaBold">{service.title}</h3>
              <p className="w-[300px] font-recoletaNormal text-[20px]">{service.description}</p>
              <Button className="w-[250px] rounded-lg text-white">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
