'use client';
import { MainLogo } from '@/app/components/mainLogo';
import { Container } from '@/app/components/container';
import { HamburgerMenu } from '@/app/components/hamburgerMenu';
import { HeaderComponent, HeaderContent } from './header.styles';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTransform } from 'framer-motion';
export const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const scrollPosition = useTransform(scrollY, [0, 100], [false, true]);

  useEffect(() => {
    return scrollPosition.onChange((value) => setHidden(value));
  }, [scrollPosition]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };
  return (
    <Container>
      <HeaderComponent
        as={motion.nav}
        variants={variants}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      >
        <HeaderContent>
          <MainLogo />
          <HamburgerMenu />
        </HeaderContent>
      </HeaderComponent>
    </Container>
  );
};
