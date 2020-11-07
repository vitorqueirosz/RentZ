import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

import { darken } from 'polished';

interface ButtonProps {
  disabled?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 319px;
  height: 56px;
  width: 100%;

  border-radius: 4px;
  justify-content: center;
  align-items: center;

  background: ${darken(0.2, '#ffc700')};

  ${props =>
    props.disabled &&
    css`
      background: #ffc700;
    `};
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
