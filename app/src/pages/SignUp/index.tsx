import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';

import backgroundImg from '../../assets/background-img.png';
import { signUpRequest } from '../../store/ducks/signUp/actions';
import { StoreState } from '../../store/createStore';

import {
  Container,
  TopContent,
  LogoNameText,
  Content,
  BackgroundImage,
  BottomContent,
  ButtonContainer,
  AlreadyHaveAccountButton,
  AlreadyHaveAccountButtonText,
} from './styles';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const { user } = useSelector((state: StoreState) => state.signUp);

  useEffect(() => {
    if (user) {
      navigation.navigate('SignIn');
    }
  }, [user, navigation]);

  function handleSignUp() {
    dispatch(signUpRequest({ name, cpf, email, password }));
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // enabled
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <TopContent>
              <LogoNameText>RentZ</LogoNameText>
              <BackgroundImage source={backgroundImg} resizeMode="contain" />
            </TopContent>

            <Content>
              <Input
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                value={name}
                name="name"
                onChangeText={(text: string) => setName(text)}
              />

              <Input
                icon="alert-circle"
                placeholder="CPF"
                returnKeyType="next"
                keyboardType="numeric"
                value={cpf}
                name="cpf"
                onChangeText={(text: string) => setCpf(text)}
              />
              <Input
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                keyboardType="email-address"
                value={email}
                name="email"
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
              <ButtonContainer>
                <Button
                  onPress={handleSignUp}
                  disabled={(name && email && cpf && password) !== ''}
                >
                  Entrar
                </Button>
              </ButtonContainer>

              <AlreadyHaveAccountButton
                onPress={() => navigation.navigate('SignIn')}
              >
                <Feather name="arrow-left" size={20} color="#FFC700" />
                <AlreadyHaveAccountButtonText>
                  Já tenho conta
                </AlreadyHaveAccountButtonText>
              </AlreadyHaveAccountButton>
            </BottomContent>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
