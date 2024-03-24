import styled from 'styled-components';
import { colors } from '@/theme/color';

const getWindowWidth = () => window.innerWidth;

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const isMobile = () => {
  const width = getWindowWidth();
  return width < 768;
};

export const isTablet = () => {
  const width = getWindowWidth();
  const tabletWidth = parseInt(size.tablet, 10);
  const desktopWidth = parseInt(size.desktop, 10);
  return width >= tabletWidth && width < desktopWidth;
};

export const isDesktop = () => {
  const width = getWindowWidth();
  const desktopWidth = parseInt(size.desktop, 10);
  return width >= desktopWidth;
};

export const HighlightBlue = styled.span`
  color: ${colors.lightBlue};
`;

export const HighlightRed = styled.span`
  color: ${colors.logoRed};
`;
