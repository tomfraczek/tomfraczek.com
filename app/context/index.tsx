'use client';
import { ReactNode, createContext, useContext, useState } from 'react';

type Context = {};

export const AppContext = createContext({
  isHamburgerOpen: false,
  toggleHamburger: () => {},
});

export const HamburgerMenuProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return <AppContext.Provider value={{ isHamburgerOpen, toggleHamburger }}>{children}</AppContext.Provider>;
};

// export function AppWrapper({ children }: { children: ReactNode }) {
//   const [showHamburgerMenu, setShowHamburgerMenu] = useState({
//     showHamburgerMenu: false,
//   });

//   return <AppContext.Provider value={{ showHamburgerMenu, setShowHamburgerMenu }}>{children}</AppContext.Provider>;
// }

// export function useAppContext() {
//   return useContext(AppContext);
// }
