import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import Objectives from '@/components/Objectives';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='items-center md:p-5'>
      <div className='w-full h-full flex flex-col'>
        <Header />
        <Hero />
        <InfoSection />
        <Objectives />
        <div className='w-full border-2 border-black mt-10 py-40 flex justify-center items-center'>
          <div className='text-3xl font-sans text-center'>
            What are we missing here? CTA? Contact capture form?
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
