import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: #1d1f24;
  height: 240px;
  padding: 64px 8px 8px 16px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 22px;
  max-width: 160px;
  font-family: Ubuntu_500Medium;
`;
export const BottomContent = styled.View`
  margin-top: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ArrowImage = styled.Image``;

export const SelectInitialDateContainer = styled.View``;
export const SelectFinalDateContainer = styled.View``;

export const SelectedInitialDateText = styled.Text`
  margin-top: 8px;
  color: #fff;
`;
export const SelectedFinalDateText = styled.Text`
  margin-top: 8px;
  color: #fff;
`;

export const FromText = styled.Text`
  color: #8c8c8c;
`;
export const ToText = styled.Text`
  color: #8c8c8c;
`;

export const ButtonContainer = styled.View`
  padding: 16px 24px 24px 24px;
`;
