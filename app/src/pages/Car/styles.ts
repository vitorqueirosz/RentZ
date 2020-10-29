import styled from 'styled-components/native';

export const Container = styled.View`
  background: #f2f2f2;
  flex: 1;
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
  height: 180px;
  margin-bottom: 20px;
`;
export const ButtonFavorite = styled.TouchableOpacity`
  position: absolute;
  top: 250px;
  right: 24px;
  padding: 12px;
  border-radius: 24px;
  background: #1d1f24;
`;
export const DetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const ButtonContainer = styled.View`
  background: #111112;
  padding: 24px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 100%;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const PricePerDayText = styled.Text`
  color: #a4a4a4;
  font-family: Ubuntu_500Medium;
`;
export const PriceText = styled.Text`
  color: #fff;
  font-family: Ubuntu_700Bold;
  font-size: 20px;
`;

export const CardRentContainer = styled.View`
  /* padding: 4px; */
`;
