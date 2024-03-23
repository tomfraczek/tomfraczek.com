'use client';
import { title } from 'process';
import { useState, useEffect } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

type Word = {
  text: string;
};

type WordCarouselProps = {
  words: Word[];
};

export const WordCarousel = ({ words }: WordCarouselProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % words.length);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [words.length]);

  return (
    <span className='inline-flex text-lowercase overflow-hidden pr-4'>
      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={current}
          timeout={300}
          classNames={{
            enter: 'slide-enter',
            enterActive: 'slide-enter-active',
            exit: 'slide-exit',
            exitActive: 'slide-exit-active',
          }}
        >
          <div
            className='font-bold'
            style={{ display: 'inline-flex', textTransform: 'lowercase', overflow: 'hidden', paddingRight: '1rem' }}
          >
            <style jsx>{`
              .slide-enter {
                transform: translateY(50px);
              }
              .slide-enter-active {
                transform: translateY(0);
              }
              .slide-exit {
                transform: translateY(0);
              }
              .slide-exit-active {
                transform: translateY(-50px);
              }
              .slide-enter-active,
              .slide-exit-active {
                transition: transform 0.3s ease-in-out;
              }
              .text-logoRed {
                color: #d62828;
              }
            `}</style>
            <span className='text-logoRed'>{words[current].text}</span>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </span>
  );
};
