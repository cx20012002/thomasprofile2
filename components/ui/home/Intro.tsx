import React from 'react';

const Intro = () => {
  return (
    <div className='flex h-screen justify-start items-center flex-col bg-red-500 text-white uppercase tracking-tight leading-tight sticky'>
      <div>
        <h1 className='text-[360px] font-black'>
          Product
        </h1>
      </div>
      <div>
        <h1 className='text-[360px] font-black'>
          Designer
        </h1>
      </div>
    </div>
  );
};

export default Intro;
