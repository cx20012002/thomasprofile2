import Image from 'next/image';
import React from 'react';

const Stories = () => {
  const experience = [
    {
      company: 'May 18, 2025',
      position: 'Color theory in design',
      date: 'Design',
    },
    {
      company: 'April 05, 2025',
      position: 'Sandwiches and lemon juice',
      date: 'Food',
    },
    {
      company: 'March 28, 2025',
      position: 'My awesome daily routine',
      date: 'Lifestyle',
    },
    {
      company: 'February 14, 2025',
      position: 'Relaxing sounds of nature',
      date: 'Music',
    },
    {
      company: 'January 22, 2025',
      position: 'Building portfolio website',
      date: 'Design',
    },
  ];

  return (
    <div className='relative z-10 flex w-full flex-col items-center justify-center overflow-hidden font-manrope text-white'>
      <div className='relative flex w-full flex-col items-center justify-center gap-[100px] overflow-hidden bg-gradient-to-b from-[rgb(221,118,232)] to-[rgb(41,43,49)] py-[150px]'>
        {/* Info */}
        <div className='relative flex w-[1200px] flex-col items-start justify-start gap-[100px] overflow-hidden text-white'>
          {/* Title */}
          <div className='relative flex w-full items-center justify-start gap-6 overflow-hidden'>
            {/* Vertical line */}
            <div className='h-8 w-2 overflow-hidden bg-[#9742a1]' />
            {/* Text */}
            <div className='flex shrink-0 flex-col justify-start'>
              <h2 className='text-[18px] uppercase'>
                05&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;STORIES
              </h2>
            </div>
          </div>
          <div className='text-[44px] leading-[61.6px] tracking-wide'>
            <p className='w-[922px]'>
              My latest stores. You can find inspiration and read about my
              product design journey
            </p>
          </div>
        </div>
        {/* Content */}
        <div className='relative flex w-[1200px] flex-col items-start justify-start gap-[100px]'>
          <div className='relative flex w-full flex-col'>
            {experience.map((exp, index) => (
              <div
                key={index}
                className='flex w-full items-center justify-between border-b border-white border-opacity-30 py-[50px]'
              >
                <a
                  href='#'
                  className='group flex w-full items-center justify-between'
                >
                  <div className='w-full text-[16px] font-[300] tracking-[0.04em]'>
                    {exp.company}
                  </div>
                  <div className='custom-transition z-10 w-full min-w-[450px] max-w-[60%] text-[58px] font-[400] leading-[81.2px] group-hover:translate-x-[50px]'>
                    {exp.position}
                  </div>
                  <div className='relative flex w-full items-center justify-end gap-[100px] text-right'>
                    <Image
                      src='/portfolio1.avif'
                      alt='arrow-right'
                      width={100}
                      height={100}
                      className='custom-transition absolute right-[150px] aspect-square rounded-sm object-cover opacity-0 group-hover:scale-[500%] group-hover:opacity-100'
                    />
                    <span className='rounded-sm bg-slate-200 px-4 py-1 text-black'>
                      {exp.date}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
