/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';

import HeroImage from '@/public/img/heroImage.png';

export const Hero = () => {
  return (
    <section className='mx-auto px-12 lg:max-w-720 xl:max-w-1385 2xl:max-w-screen-2xl'>
      <div className='flex flex-row items-center mt-150 justify-between'>
        <div className='flex flex-col w-full md:w-3/5'>
          <h1 className='text-5xl mb-27'>We can help you maintain your website</h1>
          <p className='text-base leading-6 mb-4 text-logoBlue'>
            Unlock the full potential of your online presence with expert website development. Our team of skilled
            developers will work with you to create a custom website tailored to your business' unique needs. From
            design to launch, we'll guide you every step of the way to ensure that your website not only looks great but
            also functions perfectly. Take the first step towards a successful online presence today and contact us to
            start building your dream website!
          </p>
          <div className='flex items-center mt-12 flex-row'>
            <button className='px-10 py-2 mr-4 text-base bg-logoRed text-white rounded-md shadow-md transition duration-200 ease-in-out flex items-center justify-center hover:cursor-pointer hover:outline-#457b9d hover:-translate-y-2 hover:shadow-2xl'>
              Check the Offer
            </button>
            <button className='px-10 py-2 text-base bg-lightBlue text-white rounded-md shadow-md transition duration-200 ease-in-out flex items-center justify-center hover:cursor-pointer hover:outline-#457b9d hover:-translate-y-2 hover:shadow-2xl'>
              Contact Us
            </button>
          </div>
        </div>
        <div className='hidden md:block w-90'>
          <Image src={HeroImage} alt='hero image' />
        </div>
      </div>
    </section>
  );
};
