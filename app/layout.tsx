import type { Metadata } from 'next';
import { Big_Shoulders_Display } from 'next/font/google';
import './globals.css';

const big_shoulder = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-inter',
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
      <body className={big_shoulder.className}>
        <div className='relative flex flex-col flex-nowrap items-center justify-start'>
          {children}
        </div>
      </body>
    </html>
  );
}
