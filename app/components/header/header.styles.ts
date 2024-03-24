import styled from 'styled-components';
import { device } from '@/theme/media';
import { Container } from '@/theme/global-styles';

export const HeaderComponent = styled.div`
  height: 7rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 111;
  width: 100%;

  /* left: 12px;
  right: 12px; */

  /* @media ${device.tablet} {
    width: 720px;
  }
  @media ${device.laptop} {
    width: 1385px;
  }

  @media ${device.desktop} {
    width: 1600px;
  } */
`;

export const HeaderContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    &:hover {
      color: #457b9d;
    }
  }
`;

export const MenuItem = styled.span`
  margin-right: 3rem;
`;
