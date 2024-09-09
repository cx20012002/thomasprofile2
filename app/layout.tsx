import type { Metadata } from 'next';
import { Big_Shoulders_Display, Manrope } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import Footer from '@/components/ui/Footer';

const bigShoulder = Big_Shoulders_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bigShoulder',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: 'Thomas Profile',
  description: 'Amazing profile of Thomas',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(bigShoulder.variable, manrope.variable)}>
        <div className='relative flex flex-col flex-nowrap items-center justify-start p-5 sm:p-10'>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
