import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

import { Image } from 'react-native-expo-image-cache';

interface CarItemProps {
  rent?: boolean;
}

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: #1d1f24;
  border-radius: 15px;
  padding: 16px 16px 8px 16px;
  margin: 0 8px 8px 0;
  /* justify-content: space-between; */
`;

export const TopContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const CategoryName = styled.Text`
  color: #b8b8b8;
  font-size: 11px;
  font-family: Ubuntu_700Bold;
`;
export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const CarNameContainer = styled.View<CarItemProps>`
  margin-top: 16px;

  ${props =>
    props.rent &&
    css`
      align-self: flex-start;
    `}
`;
export const CarBrandName = styled.Text`
  color: #494949;
  font-size: 18px;
  font-family: Ubuntu_700Bold;
`;
export const CarTextName = styled.Text`
  color: #ffc700;
  font-size: 20px;
  font-family: Ubuntu_500Medium;
  max-width: 170px;
`;

export const CarImage = styled(Image)`
  width: 160px;
  height: 120px;
`;

export const ButtonGoToDetail = styled(RectButton)`
  background: #3a3737;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  margin-top: 12px;
`;
export const PricePerDay = styled.Text`
  color: #e1b000;
  font-family: Ubuntu_700Bold;
  font-size: 16px;
`;
export const PerDayText = styled.Text`
  color: #aca6a6;
  margin-left: 8px;
  font-family: Ubuntu_500Medium;
`;
export const RentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 4px;
`;
export const PeriodRentContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  margin-left: 16px;
`;
export const RentTimeText = styled.Text`
  color: #aca6a6;
  font-family: Ubuntu_500Medium;
  margin-right: 4px;
`;
