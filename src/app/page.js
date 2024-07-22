import CTABlock from '@/components/CTABlock';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import Objectives from '@/components/Objectives';

export default function Home() {
  return (
    <main className='items-center'>
      <div className='w-full h-full flex flex-col'>
        <Hero />
        <div className='flex flex-col gap-10 lg:gap-24'>
          <InfoSection />
          <Objectives />
          <CTABlock />
        </div>
      </div>
    </main>
  );
}
