import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import Objectives from '@/components/Objectives';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='items-center p-5'>
      <div className='w-full h-full flex flex-col'>
        <Header />
        <Hero />
        <InfoSection />
        <Objectives />
      </div>
    </main>
  );
}
