import Image from 'next/image';
import React from 'react';

const Experience = () => {
  const experience = [
    {
      company: 'CocoBasic',
      position: 'Senior Product Designer',
      date: '2021 — Present',
    },
    {
      company: 'SuperCo',
      position: 'Senior UX/UI Designer',
      date: '2019 — 2021',
    },
    {
      company: 'BlendXYZ',
      position: 'Lead Product Designer',
      date: '2017 — 2019',
    },
    {
      company: 'Bassico',
      position: 'UI/UX Designer',
      date: '2014 — 2017',
    },
  ];

  const numbers = [
    {
      number: '14+',
      text: 'Years of experience',
    },
    {
      number: '2k+',
      text: 'Satified clients',
    },
    {
      number: '1k+',
      text: 'Projects Done',
    },
  ];

  return (
    <div className='relative z-10 flex w-full flex-col items-center justify-center overflow-hidden font-manrope text-white'>
      <div className='relative flex w-full flex-col items-center justify-center gap-[100px] overflow-hidden bg-[#7977e8] py-[150px]'>
        {/* Info */}
        <div className='relative flex w-[1200px] flex-col items-start justify-start gap-[100px] overflow-hidden text-white'>
          {/* Title */}
          <div className='relative flex w-full items-center justify-start gap-6 overflow-hidden'>
            {/* Vertical line */}
            <div className='h-8 w-2 overflow-hidden bg-[#4d4b94]' />
            {/* Text */}
            <div className='flex shrink-0 flex-col justify-start'>
              <h2 className='text-[18px] uppercase'>
                03&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;Experience
              </h2>
            </div>
          </div>
          <div className='text-[44px] leading-[61.6px] tracking-wide'>
            <p className='w-[922px]'>
              Currently working from my home office based in London, United
              Kingdom.
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
        {/* Numbers */}
        <div className='relative flex w-[1200px] items-center justify-between gap-[30px] pt-[40px]'>
          {numbers.map((num, index) => (
            <div className='relative flex h-[150px] w-full items-center justify-center rounded-lg bg-[#483b99] p-2 text-[22px] group'>
            <div className='relative flex h-full w-[90%] items-end justify-center'>
               {/* Number */}
              <p className='absolute -top-[85px] left-0 text-[96px] font-[700] group-hover:-top-[75px] custom-transition'>
                {num.number}
              </p>
              <div className='absolute -top-[40px] -right-[20px] group-hover:-top-[20px] group-hover:-right-[10px] custom-transition'>
                <Image
                  src={'/home-hero-b1.svg'}
                  alt='heart'
                  width={176}
                  height={50}
                />
              </div>
              {/* Text */}
              <div className='w-full mb-4'>
                <p className='w-[140px]'>{num.text}</p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
