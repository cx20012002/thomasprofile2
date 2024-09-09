'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const cycle = useTransform(scrollYProgress, [0.3, 0.8], [0, 2.5]); // 0 到 3 循环
  const opacitySpan1 = useTransform(cycle, (value) =>
    Math.floor(value) % 3 === 0 ? 1 : 0.5
  );
  const opacitySpan2 = useTransform(cycle, (value) =>
    Math.floor(value) % 3 === 1 ? 1 : 0.5
  );
  const opacitySpan3 = useTransform(cycle, (value) =>
    Math.floor(value) % 3 === 2 ? 1 : 0.5
  );

  return (
    <section className='z-10 flex w-full flex-col items-center justify-center font-manrope text-7xl'>
      {/* Solid part */}
      <div className='flex w-full flex-col items-center justify-center gap-[100px] bg-[#c3a889] py-[150px]'>
        {/* Info */}
        <div className='relative flex w-[1200px] flex-col items-start justify-start gap-[100px] overflow-hidden text-white'>
          {/* Title */}
          <div className='relative flex w-full items-center justify-start gap-6 overflow-hidden'>
            {/* Vertical line */}
            <div className='h-8 w-2 overflow-hidden bg-[#8a765f]' />
            {/* Text */}
            <div className='flex shrink-0 flex-col justify-start'>
              <h2 className='text-[18px]'>
                02&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;RECENT WORK
              </h2>
            </div>
          </div>
          <div className='text-[44px] leading-[61.6px] tracking-wide'>
            <p className='w-[922px]'>
              Selection of experienced product design solutions and innovative
              digital concepts
            </p>
          </div>
        </div>
        {/* Intro with image */}
        <div className='relative flex w-[1200px] flex-col items-start justify-center gap-[100px]'>
          {/* Link 1 */}
          <a
            href='#'
            className='custom-cursor group relative flex h-[424px] w-full items-center justify-end leading-[60px] text-white'
          >
            {/* Left text */}
            <div className='custom-transition absolute bottom-[159px] left-[341px] z-20 flex w-[230px] flex-col items-center justify-center group-hover:left-[300px]'>
              <p className='w-full text-right text-[22px] text-gray-500'>01</p>
              <h3 className='w-full text-right text-[44px] font-medium'>
                Monogram <br />
                Design
              </h3>
            </div>
            {/* Image */}
            <div className='absolute left-[calc(70%-720px/2)] top-[calc(50%-100%/2)] flex h-full w-[720px] overflow-hidden rounded-2xl'>
              <Image
                src='/portfolio1.avif'
                alt='monogram'
                fill
                objectFit='cover'
                className='custom-transition group-hover:scale-125'
              />
            </div>
          </a>
          {/* Link 2 */}
          <a
            href='#'
            className='custom-cursor group relative flex h-[920px] w-full items-center leading-[60px] text-white'
          >
            {/* Left text */}
            <div className='custom-transition absolute bottom-[407px] left-[607px] z-20 flex w-[230px] flex-col items-center justify-center group-hover:left-[640px]'>
              <p className='w-full text-[22px] text-gray-500'>02</p>
              <h3 className='w-full text-[44px] font-medium'>
                Craft <br />
                Branding
              </h3>
            </div>
            {/* Image */}
            <div className='absolute left-[calc(30%-720px/2)] top-[50%-100%/2] flex h-full w-[720px] overflow-hidden rounded-2xl'>
              <Image
                src='/portfolio2.avif'
                alt='monogram'
                fill
                objectFit='cover'
                className='custom-transition group-hover:scale-110'
              />
            </div>
          </a>
        </div>
      </div>

      {/* Gradient part */}
      <div className='flex w-full flex-col items-center justify-center gap-[100px] bg-gradient-to-b from-[#c3a889] to-[rgb(121,119,232)] pb-[300px]'>
        <div className='relative flex w-[1200px] flex-col items-start justify-start gap-[100px]'>
          {/* Intro with image */}
          <div className='relative flex w-[1200px] flex-col items-start justify-center gap-[100px]'>
            {/* Link 3 */}
            <a
              href='#'
              className='custom-cursor group relative flex h-[424px] w-full items-center justify-end leading-[60px] text-white'
            >
              {/* Left text */}
              <div className='custom-transition absolute bottom-[159px] left-[341px] z-20 flex w-[230px] flex-col items-center justify-center group-hover:left-[300px]'>
                <p className='w-full text-right text-[22px] text-gray-500'>
                  03
                </p>
                <h3 className='w-full text-right text-[44px] font-medium'>
                  Monogram <br />
                  Design
                </h3>
              </div>
              {/* Image */}
              <div className='absolute left-[calc(70%-720px/2)] top-[calc(50%-100%/2)] flex h-full w-[720px] overflow-hidden rounded-2xl'>
                <Image
                  src='/portfolio1.avif'
                  alt='monogram'
                  fill
                  objectFit='cover'
                  className='custom-transition group-hover:scale-125'
                />
              </div>
            </a>
            {/* Link 4 */}
            <a
              href='#'
              className='custom-cursor group relative flex h-[920px] w-full items-center leading-[60px] text-white'
            >
              {/* Left text */}
              <div className='custom-transition absolute bottom-[407px] left-[607px] z-20 flex w-[230px] flex-col items-center justify-center group-hover:left-[640px]'>
                <p className='w-full text-[22px] text-gray-500'>04</p>
                <h3 className='w-full text-[44px] font-medium'>
                  Craft <br />
                  Branding
                </h3>
              </div>
              {/* Image */}
              <div className='absolute left-[calc(30%-720px/2)] top-[50%-100%/2] flex h-full w-[720px] overflow-hidden rounded-2xl'>
                <Image
                  src='/portfolio2.avif'
                  alt='monogram'
                  fill
                  objectFit='cover'
                  className='custom-transition group-hover:scale-110'
                />
              </div>
            </a>
          </div>
          {/* Animation Text */}
          <motion.div
            ref={ref}
            className='relative flex h-[2000px] w-full flex-col items-center justify-start gap-[400px] pt-[300px] font-[600] text-white'
          >
            <div className='sticky top-[150px] w-full'>
              <div className='relative flex items-center justify-center gap-[10px] overflow-hidden'>
                <p className='text-[64px] leading-[102.4px]'>
                  <motion.span
                    initial={{ opacity: 0.5 }}
                    style={{ opacity: opacitySpan1 }}
                  >
                    My passion lies in the intersection of art and technology,
                  </motion.span>
                  <motion.span style={{ opacity: opacitySpan2 }}>
                    creating visually captivating interfaces{' '}
                  </motion.span>
                  <motion.span style={{ opacity: opacitySpan3 }}>
                    and elevating overall user digital experiences.
                  </motion.span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
