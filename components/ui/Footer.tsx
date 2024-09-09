import React from 'react';

const Footer = () => {
  const footer_links = [
    {
      title: 'Instagram',
      link: '#',
    },
    {
      title: 'Twitter',
      link: '#',
    },
    {
      title: 'Dribbble',
      link: '#',
    },
    {
      title: 'LinkedIn',
      link: '#',
    },
  ];

  return (
    <div className='relative z-10 flex w-full flex-col items-center justify-center overflow-hidden font-manrope text-white'>
      <div className='relative flex w-full flex-col items-center justify-center overflow-hidden bg-[rgb(41,43,49)] py-[150px]'>
        <div className='flex w-[1200px] flex-col gap-[60px]'>
          {/* Footer text */}
          <h4 className='w-[1200px] max-w-[1050px] font-bigShoulder text-[180px] font-black leading-[162px] -tracking-[3.6px]'>
            HAVE A COOL IDEA?&nbsp;
            <span className='text-[rgba(255,255,255,0.4)]'>
              LET’S WORK TOGETHER
            </span>
          </h4>

          {/* Button */}
          <a
            className='custom-transition w-fit rounded-full border border-white bg-white px-10 py-3 text-black hover:bg-transparent hover:text-white'
            href='#'
          >
            Get in touch
          </a>
          {/* Footer */}
          <div className='flex w-[1050px] flex-col gap-[50px]'>
            {/* Footer links & address */}
            <div className='flex w-full items-end justify-between gap-[10px]'>
              <div className='flex w-full flex-col'>
                <ul className='flex gap-[40px] text-[22px]'>
                  {footer_links.map((link, index) => (
                    <li key={index} className='group flex flex-col gap-1'>
                      <a href='#'>
                        {link.title}
                        <span className='custom-transition block h-[1px] w-full bg-white group-hover:w-0 group-hover:opacity-0' />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex w-full justify-end'>
                <p className='text-[22px]'>
                  <strong>New York</strong>
                  <br />
                  2210 18th Street
                  <br />
                  New York NY, 80024
                </p>
              </div>
            </div>
            {/* Legal info */}
            <div className='text-[16px]'>
              © 2024 — Framer template by CocoBasic
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
