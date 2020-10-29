import styled, { css } from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View<InputProps>`
  background: #272930;
  height: 56px;
  padding: 0 16px;
  border-radius: 4px;
  margin-top: 8px;
  align-items: center;
  flex-direction: row;

  border-bottom-width: 1px;
  border-bottom-color: #272930;

  ${props =>
    props.isFocused &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: #ffc700;
    `}
`;

export const TextInput = styled.TextInput<InputProps>`
  color: #fff;
  padding: 16px;
  flex: 1;
  font-size: 16px;

  ${props =>
    props.isFilled &&
    css`
      color: #ffc700;
    `}

  ${props => props.isFocused && 1}
`;

export const Icon = styled(Feather)`
  margin-right: 8px;
`;
