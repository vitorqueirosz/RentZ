import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

interface ButtonProps {
  disabled?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 319px;
  height: 56px;
  width: 100%;

  /* background: #ffc700; */
  border-radius: 4px;
  justify-content: center;
  align-items: center;

  ${props =>
    props.disabled
      ? css`
          background: #ffc700;
        `
      : css`
          background: #b6b6b6;
        `}
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
