import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: #1d1f24;
  height: 120px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
`;
export const HeaderTitle = styled.Text`
  color: #ffff;
  font-family: Ubuntu_500Medium;
  font-size: 20px;
`;

export const AmountAppointments = styled.Text`
  color: #ccc;
  font-size: 12px;
  font-family: Ubuntu_500Medium;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  padding: 32px 16px 16px 16px;
`;

export const EmptyContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
export const EmptyAppointmentText = styled.Text`
  color: #1d1f24;
`;
