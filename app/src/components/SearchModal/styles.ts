import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

import Slider from '@react-native-community/slider';

interface TypeButtonProps {
  selected?: boolean;
}

export const Container = styled.Modal``;

export const Modal = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.Text`
  color: #494949;
  font-family: Ubuntu_700Bold;
  font-size: 22px;
`;

export const CleanInputButton = styled.TouchableOpacity``;
export const CleanInputButtonText = styled.Text`
  color: #848484;
  font-family: Ubuntu_500Medium;
  font-size: 16px;
`;

export const Content = styled.View`
  margin-top: 84px;
  background: #fff;
  flex: 1;
  padding: 32px 32px 0 32px;
`;

export const PricePerDayTitle = styled.Text`
  color: #494949;
  font-family: Ubuntu_700Bold;
  font-size: 18px;
`;

export const ValuePerDay = styled.Text`
  color: #ffc700;
  font-family: Ubuntu_500Medium;
  font-size: 16px;
`;

export const SliderInput = styled(Slider)`
  height: 50px;
  padding: 8px;
  background: #1d1f24;
  margin-top: 16px;
`;

export const PriceContainer = styled.View`
  margin-top: 48px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TypeContainer = styled.View`
  margin-top: 32px;
`;
export const TypeButtonsContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-around;
`;

export const TypeButton = styled.View<TypeButtonProps>`
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  width: 140px;
  height: 100px;
  border-radius: 4px;
  border-width: 3px;
  border-color: transparent;

  ${props =>
    props.selected &&
    css`
      background: #1d1f24;
      border-color: #d7bd63;
    `}
`;
export const TypeTitle = styled.Text`
  color: #494949;
  font-family: Ubuntu_700Bold;
  font-size: 18px;
`;

export const TransmissionButtonText = styled.Text<TypeButtonProps>`
  color: #a0a0a0;
  font-family: Ubuntu_700Bold;
  margin-top: 8px;
  font-size: 16px;

  ${props =>
    props.selected &&
    css`
      color: #f0f0f0;
    `}
`;

export const TrasmissionContainer = styled.View`
  margin-top: 24px;
`;
export const TrasmissionButtonContainer = styled.View`
  margin: 8px 0 32px 0;
  flex-direction: row;
  justify-content: space-around;
`;
export const TrasmissionTitle = styled.Text`
  color: #494949;
  font-family: Ubuntu_700Bold;
  margin-top: 8px;
  font-size: 16px;
`;

export const TransmissionButton = styled.View<TypeButtonProps>`
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border-width: 3px;
  border-color: transparent;

  width: 140px;
  height: 100px;
  border-radius: 4px;

  ${props =>
    props.selected &&
    css`
      background: #1d1f24;
      border-color: #d7bd63;
    `}
`;

export const TypeButtonText = styled.Text<TypeButtonProps>`
  color: #a0a0a0;
  font-family: Ubuntu_700Bold;
  margin-top: 8px;
  font-size: 16px;

  ${props =>
    props.selected &&
    css`
      color: #f0f0f0;
    `}
`;

export const FetchButton = styled.TouchableOpacity`
  background: #ffc700;
  height: 54px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const FetchButtonText = styled.Text`
  color: #fff;
  font-family: Ubuntu_700Bold;
  font-size: 16px;
`;
