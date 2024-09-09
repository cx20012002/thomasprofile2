'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { use, useRef } from 'react';

const Education = () => {
  const experience = [
    {
      company: 'Master of Arts in Design',
      position: 'Stanford University',
      date: '2012 — 2014',
    },
    {
      company: 'Bachelor in Computer Science',
      position: 'University of California',
      date: '2008 — 2012',
    },
    {
      company: 'Diploma in Graphic Design',
      position: 'San Francisco Design Institute',
      date: '2007 — 2008',
    },
  ];
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -550]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-550, 0]);

  return (
    <motion.div ref={ref} className='relative z-10 flex w-full flex-col items-center justify-center overflow-hidden font-manrope text-white'>
      <div className='relative flex w-full flex-col items-center justify-center gap-[100px] overflow-hidden bg-gradient-to-b from-[#7977e8] to-[rgb(221,118,232)] py-[150px]'>
        {/* Info */}
        <div className='relative flex w-[1200px] flex-col items-start justify-start gap-[100px] overflow-hidden text-white'>
          {/* Title */}
          <div className='relative flex w-full items-center justify-start gap-6 overflow-hidden'>
            {/* Vertical line */}
            <div className='h-8 w-2 overflow-hidden bg-[#4d4b94]' />
            {/* Text */}
            <div className='flex shrink-0 flex-col justify-start'>
              <h2 className='text-[18px] uppercase'>
                04&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;Education
              </h2>
            </div>
          </div>
          <div className='text-[44px] leading-[61.6px] tracking-wide'>
            <p className='w-[922px]'>
              To achieve success in design, one must continuously learn and seek
              education
            </p>
          </div>
        </div>
        {/* Content */}
        <div className='relative flex w-[1200px] flex-col items-start justify-start gap-[100px] overflow-hidden'>
          <div className='relative w-full gap-[10px]'>
            {experience.map((exp, index) => (
              <div
                key={index}
                className='flex h-28 w-full items-center justify-between border-b border-white border-opacity-30 text-[22px]'
              >
                <div className='w-full'>{exp.company}</div>
                <div className='w-full'>{exp.position}</div>
                <div className='w-full text-right'>{exp.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Text */}
        <div className='text-stroke w-full text-nowrap font-bigShoulder text-[360px] font-black uppercase leading-[1.1em] tracking-[-0.02em] text-transparent'>
          <motion.p style={{x}}>Product Designer</motion.p>
          <motion.p style={{x:x2}}>Product Designer</motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
