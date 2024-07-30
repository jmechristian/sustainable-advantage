import CTABlock from '@/components/CTABlock';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import MotionWrapper from '@/components/MotionWrapper';
import Objectives from '@/components/Objectives';

export default function Home() {
  return (
    <MotionWrapper>
      <main className='items-center'>
        <div className='w-full h-full flex flex-col'>
          <Hero />
          <div className='flex flex-col gap-16 lg:gap-24'>
            <InfoSection />
            <Objectives />
            <CTABlock />
          </div>
        </div>
      </main>
    </MotionWrapper>
  );
}
