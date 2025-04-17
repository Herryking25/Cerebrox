import React from 'react'
import analyticsIcon from '../assets/images/image7.png';
import chartIcon from '../assets/images/image4.png';
import settingsIcon from '../assets/images/image5.png';
import supportIcon from '../assets/images/image6.png';
import why from '../assets/images/why.png';
import Button from './Button';

const WhyChooseUs = () => {
  return (
    <div className='px-20 flex justify-center items-center gap-60'>
      {/* left side */}
      <div>
        <div className='font-recoletaBold text-5xl mt-10'>
            <h1>Why Choose Us?</h1>
        </div>
        <div className='flex items-center mt-5'>
            <img src={analyticsIcon} alt="" className='w-10' />
            <p className='font-recoletaNormal text-[20px] ml-4'>
            Proven strategies for growth
            </p>
        </div>
        <div className='flex items-center'>
            <img src={chartIcon} alt="" className='w-10' />
            <p className='font-recoletaNormal text-[20px] ml-4'>
            Data-driven marketing approaches
            </p>
        </div>
        <div className='flex items-center'>
            <img src={settingsIcon} alt="" className='w-10' />
            <p className='font-recoletaNormal text-[20px] ml-4'>
            End-to-end digital solutions
            </p>
        </div>
        <div className='flex items-center'>
            <img src={supportIcon} alt="" className='w-10' />
            <p className='font-recoletaNormal text-[20px] ml-4'>
            Expertise in both Web 2 and Web 3
            </p>
        </div>
        <div>
          <Button className='w-[300px] text-black bg-white border-2 border-[#F29036] rounded-lg font-recoletaMedium mt-4'>
              Get A Quote Now
          </Button>
        </div>

      </div>
      
      {/* right side */}
      <div>
        <img src={why} alt="" className='w-80'/>
      </div>
    </div>
  )
}

export default WhyChooseUs
