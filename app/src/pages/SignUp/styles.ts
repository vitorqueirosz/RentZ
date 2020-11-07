import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px 24px 24px;
  background: #1d1f24;
  justify-content: center;
`;

export const TopContent = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const LogoNameText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ffc700;
  position: absolute;
  left: 15px;
  top: 26px;
  font-family: Ubuntu_500Medium;
`;
export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 160px;
  position: relative;
  color: #000;
`;
export const Content = styled.View`
  margin-top: 24px;
`;

export const BottomContent = styled.View`
  align-items: center;
  justify-content: center;
`;
export const ForgotPasswordButton = styled(BorderlessButton)``;
export const ForgotPasswordButtonText = styled.Text`
  color: #a19d8b;
  font-size: 16px;
  font-family: Ubuntu_400Regular;
`;
export const CreateAccountButton = styled(BorderlessButton)``;
export const CreateAccountButtonText = styled.Text`
  color: #a19d8b;
  font-size: 16px;
  font-family: Ubuntu_400Regular;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 16px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  margin-top: 48px;
`;

export const AlreadyHaveAccountButton = styled(BorderlessButton)`
  flex-direction: row;
  margin-top: 16px;
  align-items: center;
`;
export const AlreadyHaveAccountButtonText = styled.Text`
  color: #ffc700;
  font-size: 18px;
  font-family: Ubuntu_700Bold;
  margin-left: 8px;
`;
