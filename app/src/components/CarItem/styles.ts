import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: #1d1f24;
  border-radius: 15px;
  padding: 16px 16px 8px 16px;
  margin: 0 8px 8px 0;
  justify-content: space-between;
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
export const CarNameContainer = styled.View`
  margin-top: 16px;
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

export const CarImage = styled.Image`
  width: 160px;
  height: 120px;
`;

export const ButtonGoToDetail = styled(RectButton)`
  background: #3a3737;
  padding: 12px;
  border-radius: 30px;
`;
