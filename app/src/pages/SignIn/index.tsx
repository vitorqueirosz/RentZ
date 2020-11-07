import React, { useEffect, useState } from 'react';

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button';
import Input from '../../components/Input';

import backgroundImg from '../../assets/background-img.png';

import {
  Container,
  TopContent,
  LogoNameText,
  Content,
  BackgroundImage,
  BottomContent,
  ActionsContainer,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  CreateAccountButton,
  CreateAccountButtonText,
  ButtonContainer,
} from './styles';

import { signInRequest } from '../../store/ducks/auth/actions';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const dispatch = useDispatch();

  function handleSignInRequest() {
    dispatch(signInRequest({ email, password }));
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <TopContent>
            <LogoNameText>RentZ</LogoNameText>
            <BackgroundImage source={backgroundImg} resizeMode="contain" />
          </TopContent>
          <Content>
            <Input
              icon="mail"
              placeholder="E-mail"
              returnKeyType="next"
              value={email}
              name="email"
              keyboardType="email-address"
              onChangeText={(text: string) => setEmail(text)}
            />
            <Input
              icon="lock"
              name="password"
              placeholder="Senha"
              returnKeyType="send"
              value={password}
              onChangeText={text => setPassword(text)}
              isPassword
            />
          </Content>

          <BottomContent>
            <ActionsContainer>
              <ForgotPasswordButton>
                <ForgotPasswordButtonText>
                  Esqueci a senha
                </ForgotPasswordButtonText>
              </ForgotPasswordButton>

              <CreateAccountButton
                onPress={
                  () => navigation.navigate('SignUp')
                  // eslint-disable-next-line react/jsx-curly-newline
                }
              >
                <CreateAccountButtonText>Criar conta</CreateAccountButtonText>
              </CreateAccountButton>
            </ActionsContainer>

            <ButtonContainer>
              <Button
                onPress={handleSignInRequest}
                disabled={(password && email) !== '' && password.length >= 6}
              >
                Entrar
              </Button>
            </ButtonContainer>
          </BottomContent>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
