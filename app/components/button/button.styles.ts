import { colors } from '@/theme/color';
import styled from 'styled-components';

interface ButtonContainerProps {
  secondary?: boolean;
}

export const ButtonContainer = styled.span<ButtonContainerProps>`
  padding: 9px 40px;
  font-size: 1.063rem;
  background: ${(props) => (props.secondary ? colors.logoRed : colors.lightBlue)};
  color: ${colors.white};
  border-radius: 5px;
  box-shadow: 0 6px 13px 2px rgb(0 0 0 / 11%);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    outline-color: ${colors.logoBlue};
    transform: translateY(-2px);
    box-shadow: 0 6px 13px 2px rgb(0 0 0 / 25%);
  }
`;
