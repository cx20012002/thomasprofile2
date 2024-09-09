'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const About = () => {
  const { scrollYProgress } = useScroll({

  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -1050]);
  const services = ['Design', 'Branding', 'Coding', 'Support'];

  return (
    <section className='relative z-10 flex w-full flex-col items-center justify-center gap-0 overflow-hidden font-manrope text-white'>
      {/* About Intro */}
      <div className='relative flex w-full flex-col items-center justify-center gap-24 bg-gradient-to-b from-[#e84343] to-[rgb(145,197,186)] px-0 py-[50px] sm:py-[150px]'>
        <div className='relative flex w-[400px] flex-col items-center justify-center gap-[50px] overflow-hidden sm:w-[1200px] sm:items-start sm:justify-start sm:gap-[100px]'>
          {/* About me subtitle */}
          <div className='relative flex w-full items-center justify-start gap-6'>
            <div className='relative h-[36px] w-[8px] bg-[#d43333]' />
            <div className='flex flex-col justify-start'>
              <h2 className='text-[15px] font-[600] uppercase sm:text-[18px]'>
                01 &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; About me
              </h2>
            </div>
          </div>
          {/* About me content text */}
          <div className='flex w-[400px] flex-col justify-start sm:w-[922px]'>
            <p className='text-[23px] font-medium sm:text-[44px]'>
              Hey,
              <br />
              I’m Thomas Chen a multidisciplinary designer specialized in
              digital product design. Currently working from my home office
              based in London, United Kingdom.
            </p>
          </div>
        </div>
      </div>

      {/* About me photo */}
      <div className='relative flex w-full flex-col items-center justify-center gap-[100px] bg-[#92c5ba] pb-[50px] pt-[150px] sm:pb-[150px]'>
        {/* Scrolling text */}
        <motion.div
          style={{ x }}
          className='absolute left-0 top-[300px] flex items-center justify-center gap-[10px] overflow-hidden sm:justify-start'
        >
          <div className='flex flex-col justify-start'>
            <p className='text-stroke text-nowrap font-bigShoulder text-[200px] font-black uppercase leading-[396px] -tracking-[7.2px] text-transparent sm:text-[360px]'>
              About me —about me
            </p>
          </div>
        </motion.div>
        {/* Content wrapper */}
        <div className='relative flex w-[1200px] flex-col flex-nowrap gap-[100px] items-end justify-start'>
          <div className='relative flex w-full flex-col items-center sm:items-end justify-center gap-[64px]'>
            {/* Graphics */}
            <div className='relative h-[368px] w-[668px] scale-[60%] rounded-[16px] bg-[#5aa393] sm:scale-100'>
              {/* Front straps */}
              <div className='absolute left-[80px] top-[254px] z-10 h-[210px] w-[600px]'>
                <Image src={'/strap.svg'} alt='strap' fill className='-ml-5' />
              </div>
              {/* Back star */}
              <div className='absolute bottom-[313px] right-[500px] h-[110px] w-[110px]'>
                <Image src={'/star_icon.svg'} alt='hero' fill />
              </div>
              {/* Back half circle */}
              <motion.div
                style={{ x }}
                className='absolute -top-[200px] left-[350px] flex h-[340px] w-[170px] overflow-hidden'
              >
                <div className='absolute right-0 h-[340px] w-[340px] rounded-full bg-red-200'></div>
              </motion.div>
              {/* photo */}
              <div className='absolute -top-[140px] left-[calc(50%-416px/2)] w-[416px]'>
                <Image
                  src={'/home-hero-photo.png'}
                  alt='hero'
                  width={416}
                  height={508}
                />
              </div>
            </div>
            {/* Content */}
            <div className='relative flex w-[400px] flex-col  flex-nowrap items-center justify-center gap-[48px] overflow-hidden rounded-[16px] px-0 pt-[100px] sm:w-[668px]'>
              <div className='flex flex-col gap-12 break-words font-manrope text-[22px] leading-9 sm:text-[24px] sm:leading-[40.8px]'>
                <p>
                  I hold a Bachelor of Technology in Computer Science from the
                  esteemed Art University and a Master of Fine Arts in
                  Interactive Design.
                </p>
                <p>
                  This academic foundation has equipped me with a solid
                  understanding of the principles that underpin effective
                  interaction design, providing me with the knowledge to create
                  designs that seamlessly blend aesthetics and functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About services */}
      <div className='relative flex w-full flex-col items-center justify-center gap-24 bg-gradient-to-b from-[#91c5ba] to-[rgb(195,168,137)] pb-[300px] pt-[50px] font-bigShoulder font-black uppercase sm:pt-[150px]'>
        {/* Main wrapper */}
        <div className='relative flex w-[400px] flex-col items-center justify-start gap-[20px] sm:gap-[100px] sm:w-[1200px]'>
          {/* Items */}
          {services.map((service, index) => (
            <div
              className='group relative flex w-full border-b-4 border-white border-opacity-20 transition-all duration-500 sm:hover:border-opacity-100'
              key={index}
            >
              {/* Title */}
              <div className='relative flex min-h-[120px] sm:min-h-[216px] w-full cursor-pointer items-center justify-center gap-[10px] overflow-hidden sm:group-hover:z-10'>
                <div className='absolute -bottom-[25px] left-0 right-0 opacity-50 transition-all duration-500 sm:group-hover:-bottom-[80px] sm:group-hover:opacity-100 sm:-bottom-[70px]'>
                  <h5 className='break-words text-center text-[90px] leading-[110%] sm:text-[220px] '>
                    {service}
                  </h5>
                </div>
              </div>
              {/* Strap */}
              <div className='absolute -bottom-[90px] sm:-bottom-[120px] left-0 right-0 flex items-center justify-center gap-[10px] scale-[40%] sm:scale-100 opacity-60 transition-all duration-500 group-hover:opacity-100'>
                <Image
                  src={'/strap.svg'}
                  alt='design'
                  width={440}
                  height={203}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
