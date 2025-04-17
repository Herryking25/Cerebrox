import React from 'react'
import phoneImage from "../assets/images/image1.png"
import Button from './Button'

const Hero = () => {
  return (
    <section className='flex justify-center items-center '>
        <div className='flex justify-center items-center '>
            {/* left side */}
            <div>
                <div className='w-[700px] text-5xl font-recoletaBold'>
                    <h1>
                    Empowering Businesses to Thrive in <span className='text-[#EC4B20]'>Digital Era</span>
                    </h1>
                </div>
                <div className='w-[500px] text-[20px] font-recoletaNormal mt-4'>
                    <p>
                    Bridging Web3 and Web2 spaces while offering cutting-egde Digital Marketing, 
                    Social media management and web development solutions 
                    </p>
                </div>
                <Button className='w-[250px] mt-4 text-white'>
                    Home
                </Button>
            </div>
            {/* right side */}
            <div className='w-[500px] h-[500px]'>
                <img src={phoneImage} alt="" className='' />
            </div>
        </div>
    </section>
  )
}

export default Hero
