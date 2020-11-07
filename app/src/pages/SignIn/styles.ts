import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  /* padding: 16px 32px 64px 32px; */
  background: #1d1f24;
  justify-content: center;
`;

export const TopContent = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 0px;
  padding: 0px 24px;
`;

export const LogoNameText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ffc700;
  position: absolute;
  left: 32px;
  top: 26px;
  font-family: Ubuntu_500Medium;
`;
export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 180px;
  position: relative;
  color: #000;
`;
export const Content = styled.View`
  margin-top: 24px;
  padding: 0px 24px 0px 24px;
`;

export const BottomContent = styled.View`
  align-items: center;
  justify-content: center;
`;
export const ForgotPasswordButton = styled(BorderlessButton)``;
export const ForgotPasswordButtonText = styled.Text`
  color: #878282;
  font-size: 14px;
  font-family: Ubuntu_400Regular;
`;
export const CreateAccountButton = styled(BorderlessButton)``;
export const CreateAccountButtonText = styled.Text`
  color: #878282;
  font-size: 14px;
  font-family: Ubuntu_400Regular;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 16px;
  padding: 0px 24px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  margin-top: 64px;
  padding: 0px 24px;
`;
