import About from '@/components/ui/home/About';
import Education from '@/components/ui/home/Education';
import Experience from '@/components/ui/home/Experience';
import Intro from '@/components/ui/home/Intro';
import Portfolio from '@/components/ui/home/Portfolio';
import Stories from '@/components/ui/home/Stories';

export default function Home() {
  return (
    <div className='relative flex w-full flex-col flex-nowrap items-center justify-center'>
      <Intro />
      <About />
      <Portfolio/>
      <Experience />
      <Education />
      <Stories />
    </div>
  );
}
