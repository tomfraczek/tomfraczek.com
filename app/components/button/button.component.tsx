import { ReactNode } from 'react';
import { ButtonContainer } from './button.styles';

export const Button = ({ children, ...props }: { children: ReactNode; [key: string]: any }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};
