import { colors } from '@/theme/color';
import { device } from '@/theme/media';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const variants = {
  show: {
    transform: 'translateX(0em)',
    opacity: 1,
  },
  hide: {
    transform: 'translateX(5em)',
    opacity: 0,
  },
};

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const NavigationHeader = styled(motion.div)`
  height: 60px;
`;

export const NavigationBody = styled.div`
  border-top: 1px solid ${colors.darkBlue};
  margin-top: 4rem;
  padding-top: 16px;
  width: 250px;
  margin-right: 4rem;
`;

export const Subheader = styled(motion.h4)`
  line-height: 155%;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 30px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuContainerSmall = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const MenuItem = styled(motion.span)`
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 15px;

  &:last-of-type {
    color: ${colors.logoRed};
  }
`;

export const MenuSmall = styled(motion.span)`
  line-height: 160%;
  letter-spacing: 1px;
  width: 50%;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const NavigationContainerSmall = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CountryIcon = styled(motion.img)`
  width: 24px;
  height: 24px;
  margin-right: 15px;

  &:hover {
    cursor: pointer;
  }
`;
