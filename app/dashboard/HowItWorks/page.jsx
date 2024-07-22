import React from 'react';
import Image from 'next/image';


export default function Home() {
  
  return (
    <>
      <section className="flex flex-col items-center justify-center space-y-4 pt-4 sm:pt-24 w-full bg-[url('/grid.svg')]" id="hero">
        <h1 className='text-4xl font-bold text-center tracking-tighter sm:text-5xl md:text-6xl leading-6'>
          Prepare for your interviews <br /> in minutes, not days
        </h1>
        <p className='max-w-[600px] mt-4 text-center text-gray-500 md:text-xl'>
          Use AI to simulate real interview scenarios, receive instant feedback, and improve your skills efficiently.
        </p>
        
        <div className='w-full bg-gradient-to-b from-transparent to-white h-24'></div>
      </section>

      <section className='flex flex-col items-center justify-center space-y-4 mt-12 pb-24' id="features">
        <h2 className='text-3xl font-bold text-center tracking-tighter sm:text-4xl md:text-5xl'>
          How It Works
        </h2>
        <ul className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl text-center'>
          <li className='flex flex-col items-center space-y-4 relative'>
            <Image
              src="/images/start.png"
              width={250}
              height={250}
              alt="create a form"
              className='bg-white p-4 shadow-sm border rounded-md'
            />
            <Image
              src="/arrow.svg"
              width={125}
              height={125}
              alt="arrow"
              className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
            />
            <p>1. Add a job role, describe the tech stack, and provide years of experience.</p>
          </li>
          <li className='flex flex-col items-center space-y-4 relative'>
            <Image
              src="/images/enb2.png"
              width={250}
              height={250}
              alt="update the form"
              className='bg-white p-4 shadow-sm border rounded-md'
            />
            <Image
              src="/arrow.svg"
              width={125}
              height={125}
              alt="arrow"
              className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 scale-x-[-1] rotate-180"
            />
            <p>2. Generate the interview and take it live.</p>
          </li>
          <li className='flex flex-col items-center space-y-4 relative'>
            <Image
              src="/images/feedback.png"
              width={250}
              height={250}
              alt="check the analytics"
              className='bg-white p-4 shadow-sm border rounded-md'
            />
            <p>3. Check results, analytics, and more.</p>
          </li>
        </ul>
      </section>

      <section className='bg-[url("/grid.svg")] bg-cover bg-center py-16'>
        <div className='max-w-4xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center text-white mb-6'>
            Step-by-Step Method
          </h2>
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-semibold mb-4'>
              How to Use Moctagon
            </h3>
            <ol className='list-decimal list-inside space-y-4 text-lg text-gray-700'>
              <li>Sign up for an account or log in if you already have one.</li>
              <li>Select the type of interview you want to prepare for.</li>
              <li>Customize your interview by adding relevant questions and scenarios.</li>
              <li>Start your mock interview and practice with real-time feedback.</li>
              <li>Review your performance, access detailed analytics, and improve your skills.</li>
              <li>Share your mock interviews or results with mentors for additional feedback.</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
