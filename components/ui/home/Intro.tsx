'use client';

import React from 'react';
import home_hero_b3 from '@/public/home-hero-b3.svg';
import home_hero_b2 from '@/public/home-hero-b2.svg';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const Intro = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.div className='sticky top-[40px] flex h-[1500px] w-full flex-col flex-nowrap items-center justify-center bg-[#e84343] p-0 uppercase leading-[396px] tracking-[-7.2px] text-white'>
      {/* this is the back scratch line */}
      <div className='absolute left-[50%] top-[142px] flex h-[880px] w-[1360px] -translate-x-[50%] justify-center '>
        <Image src={home_hero_b3} alt='home-hero-b1' fill />
      </div>

      {/* this is the first text */}
      <motion.div
        style={{ x, translateY: '-50%', translateX: '-50%' }}
        className='absolute left-[50%] top-[17%]'
      >
        <h1 className='text-[360px] font-black'>Product</h1>
      </motion.div>

      {/* this is the personal photo */}
      <motion.div style={{scale}} className='absolute top-[128px] h-[770px] w-[631px]'>
        <Image src='/home-hero-photo.png' alt='home-hero-b1' fill />
      </motion.div>

      {/* this is the second text */}
      <motion.div
        style={{ x: x2, translateY: '-50%', translateX: '-50%' }}
        className='absolute left-[50%] top-[40%]'
      >
        <h1 className='text-[360px] font-black'>Designed</h1>
      </motion.div>

      {/* this is the font scratch line */}
      <div className='absolute left-[50%] top-[554px] flex h-[446px] w-[855px] -translate-x-[50%] justify-center '>
        <Image src={home_hero_b2} alt='home-hero-b2' fill />
      </div>
    </motion.div>
  );
};

export default Intro;
