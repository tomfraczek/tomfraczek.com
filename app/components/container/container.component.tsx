import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return <section className='mx-auto px-12 lg:max-w-720 xl:max-w-1385 2xl:max-w-screen-2xl'>{children}</section>;
};
