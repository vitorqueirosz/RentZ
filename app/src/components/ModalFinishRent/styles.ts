import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const Content = styled.View`
  flex: 1;
  background: #1d1f24;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
`;
export const CarImage = styled.Image`
  width: 200px;
  height: 200px;
`;
export const DetailsContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
export const RentTitle = styled.Text`
  color: #fff;
  font-family: Ubuntu_700Bold;
  font-size: 22px;
`;
export const FooterTitle = styled.Text`
  margin-top: 8px;
  font-size: 12px;
  color: #828282;
  font-family: Ubuntu_500Medium;
`;
export const ButtonContainer = styled.View`
  width: 160px;
  margin-top: 64px;
`;

export const Button = styled.TouchableOpacity`
  background: #ffc700;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 4px;
`;
export const ButtonText = styled.Text`
  color: #ffffff;
  font-family: Ubuntu_500Medium;
`;

export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 32px;
`;
export const SubFooterTitle = styled.Text`
  margin-top: 16px;
  max-width: 300px;
  font-family: Ubuntu_500Medium;
  color: #b7b7b7;
`;
