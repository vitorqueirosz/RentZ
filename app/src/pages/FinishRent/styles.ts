import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f2f2f2;
`;

export const Header = styled.View`
  background: #1d1f24;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 16px 16px 16px 16px;
`;
export const HeaderTitle = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: Ubuntu_700Bold;
`;

export const CategoryName = styled.Text`
  font-size: 12px;
  font-family: Ubuntu_700Bold;
  color: #b8b8b8;
`;
export const NameContainer = styled.View`
  margin-top: 16px;
`;
export const BrandName = styled.Text`
  color: #494949;
  font-size: 22px;
  font-family: Ubuntu_700Bold;
`;
export const CarName = styled.Text`
  color: #ffc700;
  font-size: 20px;
  font-family: Ubuntu_500Medium;
  margin-top: 2px;
`;
export const CarImage = styled.Image`
  width: 100%;
  height: 140px;
  margin-bottom: 10px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const PricePerDayText = styled.Text`
  color: #8c8c8c;
  font-family: Ubuntu_700Bold;
  font-size: 18px;
`;
export const PricePerDayContainer = styled.View`
  background: #1d1f24;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px;
`;
export const PriceText = styled.Text`
  color: #dbab00;
  font-family: Ubuntu_700Bold;
  font-size: 16px;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
`;
export const ScheduleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  background: #1d1f24;
  padding: 8px 12px;
  border-radius: 4px;
`;
export const PeriodContainer = styled.View``;
export const PeriodText = styled.Text`
  color: #8c8c8c;
  font-family: Ubuntu_500Medium;
`;
export const TimeText = styled.Text`
  color: #dbab00;
  font-family: Ubuntu_700Bold;
  font-size: 14px;
  margin-top: 4px;
`;

export const Arrow = styled.Image``;

export const CardRentContainer = styled.View``;
export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #111112;
  width: 100%;
  padding: 18px;
`;

export const TotalPriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;
export const TotalPrice = styled.Text`
  font-family: Ubuntu_700Bold;
  color: #fff;
  font-size: 20px;
  margin-right: 8px;
`;
export const TotalPriceText = styled.Text`
  color: #acacac;
  font-family: Ubuntu_400Regular;
`;

export const FinishRentButton = styled(RectButton)`
  background: #ffc700;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 50px;
  border-radius: 4px;
`;
export const FinishRentButtonText = styled.Text`
  color: #fff;
  font-family: Ubuntu_700Bold;
`;
export const PricePerDayMultiText = styled.Text`
  font-family: Ubuntu_500Medium;
  color: #a4a4a4;
`;
export const PriceContainerButton = styled.View``;
