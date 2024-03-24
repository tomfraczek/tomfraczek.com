import Image from 'next/image';

import HeroImage from '@/public/img/heroImage.png';
import { useTranslations } from 'next-intl';
import { WordCarousel } from '../wordCarousel/wordCarousel.component';
import { isMobile } from '@/theme/media';

export const Hero = () => {
  const t = useTranslations('Home.Hero');
  // const mobile = isMobile();

  const words = [
    { text: t('word_carousel.grow') },
    { text: t('word_carousel.build') },
    { text: t('word_carousel.host') },
    { text: t('word_carousel.maintain') },
  ];
  return (
    <section className='mx-auto px-3 mt-40 lg:max-w-[720px] xl:max-w-[1385px]' data-aos={'fade-right'}>
      <div className='flex flex-row items-center mt-150 justify-between'>
        <div className='flex flex-col w-full md:w-3/5'>
          <h1 className='text-6xl mb-27 font-bold flex flex-col text-darkBlue mb-10'>
            <>{t('weCanHelp')}</>
            <div className='flex leading-snug gap-4 text-logoBlue'>
              {t('you')}
              <WordCarousel words={words} />
            </div>

            <>{t('yourWebsite')}</>
          </h1>
          <p className='text-base leading-6 mb-4 text-logoBlue'>{t('description')}</p>
          <div className='flex items-center mt-6 flex-row'>
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
