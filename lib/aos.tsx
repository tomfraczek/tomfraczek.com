'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { isMobile } from '@/theme/media';

export const AOSInit = () => {
  useEffect(() => {
    if (!isMobile()) {
      AOS.init();
    }
  }, []);

  return null;
};
