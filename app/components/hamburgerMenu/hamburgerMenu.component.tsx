'use client';
import { HamburgerButton } from '@/app/components/hamburgerButton/hamburgerButton';
import { AppContext } from '@/app/context';
import { motion } from 'framer-motion';
import { RefObject, useContext, useEffect, useRef, useState } from 'react';
import { MainLogo } from '@/app/components/mainLogo';
import { MAIN_NAVIGATION } from '@/app/global/menuVariables';
import Link from 'next/link';
import {
  HamburgerMenuContainer,
  MenuContainer,
  menuVariants,
  menuTransition,
  ContentContainer,
} from './hamburgerMenu.styles';
import { NavMenu } from '@/app/components/navMenu';

type useOutsideAlerter = {
  ref: RefObject<HTMLDivElement>;
  setOpen: (value: boolean) => void;
};

const useOutsideAlerter = (ref: RefObject<HTMLDivElement>, setOpen: (value: boolean) => void) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setOpen]);
};

export const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpen);
  const { isHamburgerOpen, toggleHamburger } = useContext(AppContext);

  const toggleMenu = () => {
    toggleHamburger();
    setOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    if (isHamburgerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [isHamburgerOpen]);

  return (
    <>
      <HamburgerMenuContainer ref={wrapperRef}>
        <HamburgerButton toggle={toggleMenu} isOpen={isHamburgerOpen} />
        <MenuContainer
          initial={false}
          animate={isHamburgerOpen ? 'open' : 'closed'}
          variants={menuVariants}
          transition={menuTransition}
        >
          <ContentContainer>
            <NavMenu isOpen={isHamburgerOpen} toggleMenu={toggleMenu} />
          </ContentContainer>
        </MenuContainer>
      </HamburgerMenuContainer>
    </>
  );
};
