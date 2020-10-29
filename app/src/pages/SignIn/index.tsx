import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import * as WebBrowser from 'expo-web-browser';
import {
  makeRedirectUri,
  ResponseType,
  useAuthRequest,
} from 'expo-auth-session';
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

import { Creators } from '../../store/ducks/auth';
import { StoreState } from '../../store/createStore';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://15e78e99d0e4.ngrok.io/sessions/spotify-auth',
};

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: '13d12ef8e36b41aeab3ffdb5df538c21',
      scopes: [
        'user-read-private',
        'user-read-email',
        'user-read-recently-played',
        'user-read-currently-playing',
        'user-modify-playback-state',
      ],
      usePKCE: false,
      redirectUri: makeRedirectUri({
        native: 'exp://192.168.0.119:19000',
      }),
    },
    discovery,
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      console.log(response);
    }
  }, [response]);

  const { loadingSignInRequest, token } = useSelector(
    (state: StoreState) => state.auth,
  );

  function handleSignInRequest() {
    // dispatch(Creators.signInRequest({ email, password }));
    promptAsync();
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <TopContent>
            <LogoNameText>RentZ</LogoNameText>
            <BackgroundImage source={backgroundImg} resizeMode="cover" />
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
