import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: #ffc700;
  height: 140px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 16px;
`;
export const ProfileInfos = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 12px;
`;
export const ProfileNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SaudationName = styled.Text`
  color: #fff;
  font-family: Ubuntu_700Bold;
  font-size: 18px;
`;
export const ProfileNameText = styled.Text`
  color: #6c6c6c;
  font-size: 20px;
  margin-left: 8px;
  font-family: Ubuntu_700Bold;
`;
export const Content = styled.View`
  padding: 16px 16px 0 16px;
`;

export const SalesTitle = styled.Text`
  font-size: 16px;
  color: #6c6c6c;
  font-family: Ubuntu_500Medium;
`;
export const ScrollView = styled.ScrollView`
  margin-top: 24px;
`;

export const AvailableBrandsTitle = styled.Text`
  margin-top: 24px;
  font-size: 16px;
  color: #6c6c6c;
  font-family: Ubuntu_500Medium;
`;
export const AvailableBrands = styled.ScrollView`
  margin: 16px 0 24px 0;
`;

export const BrandItem = styled.View`
  align-items: center;
  margin-right: 16px;
  /* background: #e1c14d; */
  background: #97a2ae;
  padding: 16px;
  border-radius: 4px;
  width: 150px;
  height: 180px;
`;

export const BrandImage = styled.Image`
  margin-top: 8px;
  width: 100%;
  height: 80px;
  /* background-color: #ffc700; */
`;
export const BrandName = styled.Text`
  color: #2f3239;
  font-size: 16px;
  font-family: Ubuntu_700Bold;
`;
export const AmountCars = styled.Text`
  color: #2f3239;
  font-size: 14px;
  font-family: Ubuntu_700Bold;
  margin-right: 4px;
`;
export const CarTitle = styled.Text`
  color: #2f3239;
  font-size: 14px;
  font-family: Ubuntu_700Bold;
`;
export const ButtonStartRent = styled(RectButton)`
  flex-direction: row;
  align-self: flex-end;
  /* background: #1d1f24; */
  padding: 8px;
  border-radius: 4px;
  /* align-items: center; */
`;
export const ButtonStartRentText = styled.Text`
  border-bottom-width: 2px;
  border-bottom-color: #ffc700;
  color: #6c6c6c;
  font-size: 16px;
  font-family: Ubuntu_500Medium;
  margin-right: 4px;
`;
export const BrandCars = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;
