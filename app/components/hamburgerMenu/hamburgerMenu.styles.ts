import { device } from '@/theme/media';
import { motion } from 'framer-motion';
import styled from 'styled-components';

type BackgroundContainerProps = {
  value: boolean;
};

export const HamburgerMenuContainer = styled.div`
  display: flex;
`;

export const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  overflow-y: scroll;
  overflow-x: hidden;

  @media ${device.mobileL} {
    max-width: 60%;
  }

  @media ${device.laptop} {
    max-width: 55%;
  }

  @media ${device.laptopL} {
    max-width: 44%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const menuVariants = {
  open: {
    transform: 'translateX(0%)',
  },
  closed: {
    transform: 'translateX(100%)',
  },
};

export const menuTransition = {
  type: 'spring',
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

export const BackgroundContainer = styled.div<BackgroundContainerProps>`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: ${(props) => (props.value ? 1 : 0)};
  overflow: hidden;
  z-index: -1;
`;
