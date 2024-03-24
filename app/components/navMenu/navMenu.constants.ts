import usa from '@/public/img/icons/usa.png';
import poland from '@/public/img/icons/poland.png';

type NavigationItem = {
  title: string;
  url: string; // Define the type of 'url' property
};

export const MAIN_NAVIGATION: NavigationItem[] = [
  // {
  //   title: "About",
  //   url: "/about",
  // },
  {
    title: 'Services',
    url: '/services',
  },
  {
    title: 'Free Quote',
    url: '/quote',
  },
  {
    title: 'Career',
    url: '/career',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

export const LNGS = [
  { nativeName: 'English', code: 'en', icon: usa },
  { nativeName: 'Polski', code: 'pl', icon: poland },
];
