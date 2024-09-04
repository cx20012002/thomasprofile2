import Intro from '@/components/ui/home/Intro';

export default function Home() {
  return (
    <div className='relative flex w-full flex-none flex-col flex-nowrap items-center justify-center p-10'>
      <Intro />
      <div className='w-full h-[2000px] bg-green-300 z-10'></div>
    </div>
  );
}
