import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  width: 160px;
  padding: 16px;
  border-radius: 4px;
  background: #1d1f24;
  height: 80px;
  align-items: center;
`;

export const SpecTypeContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  justify-content: space-between;
`;
export const SpecTypeText = styled.Text`
  font-family: Ubuntu_500Medium;
  color: #a19c9c;
  margin-left: 6px;
`;
export const SpecCarText = styled.Text`
  font-family: Ubuntu_500Medium;
  color: #ddd;
  font-size: 15px;
`;
