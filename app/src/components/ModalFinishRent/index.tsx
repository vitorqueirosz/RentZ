import { useNavigation } from '@react-navigation/native';
import React from 'react';

import backgroundImg from '../../assets/background-img.png';

import {
  Container,
  Content,
  CarImage,
  DetailsContainer,
  RentTitle,
  Button,
  ButtonText,
  TitleContainer,
  ButtonContainer,
  SubFooterTitle,
  FooterTitle,
} from './styles';

interface ModalProps {
  show: boolean;
  setShow(value: React.SetStateAction<boolean>): void;
}

const ModalFinishRent: React.FC<ModalProps> = ({ show, setShow }) => {
  const navigation = useNavigation();

  function handleToggleModal() {
    setShow(false);
    navigation.navigate('Appointments');
  }

  return (
    <Container visible={show}>
      <Content>
        <CarImage source={backgroundImg} resizeMode="contain" />

        <DetailsContainer>
          <RentTitle>Reserva realizada com sucesso!</RentTitle>

          <TitleContainer>
            <FooterTitle>Você receberá um e-mail de confirmação!</FooterTitle>
            <SubFooterTitle>
              Compareça a unidade RentZ mais próxima de você no horário
              agendado!
            </SubFooterTitle>
          </TitleContainer>
        </DetailsContainer>

        <ButtonContainer>
          <Button onPress={handleToggleModal}>
            <ButtonText>Ok</ButtonText>
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default ModalFinishRent;
