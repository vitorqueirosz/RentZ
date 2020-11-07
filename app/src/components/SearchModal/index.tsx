import { Feather } from '@expo/vector-icons';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button as B, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import carIcon from '../../assets/carIcon5.png';
import { fetchCarsRequest } from '../../store/ducks/cars/actions';

import Button from '../Button';

import {
  Container,
  Modal,
  Header,
  HeaderTitle,
  SliderInput,
  CleanInputButton,
  CleanInputButtonText,
  Content,
  PricePerDayTitle,
  ValuePerDay,
  PriceContainer,
  TypeContainer,
  TypeButtonsContainer,
  TypeTitle,
  TypeButton,
  TypeButtonText,
  TrasmissionContainer,
  TransmissionButtonText,
  TrasmissionTitle,
  TransmissionButton,
  TrasmissionButtonContainer,
  FetchButton,
  FetchButtonText,
} from './styles';

interface ModalProps {
  show: boolean;
  brand: string;
  setShow(value: React.SetStateAction<boolean>): void;
}

const SearchModal: React.FC<ModalProps> = ({ show, brand, setShow }) => {
  const [price, setPrice] = useState(0);

  const [type, setType] = useState('');
  const [transmission, setTrasmission] = useState('');

  const dispatch = useDispatch();

  function handleSelectedTypeButton(value: string) {
    setType(value);
  }

  function handleSelectedTransmissionButton(value: string) {
    setTrasmission(value);
  }

  function handleFetchCarsByFilters() {
    setShow(false);

    if (brand) {
      dispatch(
        fetchCarsRequest({
          type,
          transmission,
          initial_price: 0,
          final_price: price,
          brand_id: brand,
        }),
      );

      return;
    }

    dispatch(
      fetchCarsRequest({
        type,
        transmission,
        initial_price: 0,
        final_price: price,
      }),
    );
  }

  function handleCleanAll() {
    console.log('ok');
    setPrice(0);
    setType('');
    setTrasmission('');
  }

  return (
    <Container transparent visible={show}>
      <Modal>
        <Content>
          <Header>
            <HeaderTitle>Filtros</HeaderTitle>

            <CleanInputButton onPress={handleCleanAll}>
              <CleanInputButtonText>Limpar</CleanInputButtonText>
            </CleanInputButton>
          </Header>

          <PriceContainer>
            <PricePerDayTitle>Preço por dia</PricePerDayTitle>

            <ValuePerDay>
              R$ 00 - R$
              {price.toFixed(0)}
            </ValuePerDay>
          </PriceContainer>

          <SliderInput
            minimumValue={0}
            maximumValue={2000}
            minimumTrackTintColor="#FFC700"
            maximumTrackTintColor="#1D1F24"
            thumbImage={carIcon}
            value={price}
            onValueChange={value => setPrice(value)}
          />

          <TypeContainer>
            <TypeTitle>Tipo</TypeTitle>

            <TypeButtonsContainer>
              <TypeButton selected={type === 'Gasolina'}>
                <Feather
                  name="droplet"
                  size={25}
                  color={type === 'Gasolina' ? '#FFC700' : '#938D8D'}
                  onPress={() => handleSelectedTypeButton('Gasolina')}
                />
                <TypeButtonText selected={type === 'Gasolina'}>
                  Gasolina
                </TypeButtonText>
              </TypeButton>

              <TypeButton selected={type === 'Elétrico'}>
                <Feather
                  name="zap"
                  size={25}
                  color={type === 'Elétrico' ? '#FFC700' : '#938D8D'}
                  onPress={() => handleSelectedTypeButton('Elétrico')}
                />
                <TypeButtonText selected={type === 'Elétrico'}>
                  Elétrico
                </TypeButtonText>
              </TypeButton>
            </TypeButtonsContainer>
          </TypeContainer>

          <TrasmissionContainer>
            <TrasmissionTitle>Transmissao</TrasmissionTitle>

            <TrasmissionButtonContainer>
              <TransmissionButton selected={transmission === 'Automático'}>
                <Feather
                  name="cpu"
                  size={25}
                  color={transmission === 'Automático' ? '#FFC700' : '#938D8D'}
                  onPress={() => handleSelectedTransmissionButton('Automático')}
                />
                <TransmissionButtonText
                  selected={transmission === 'Automático'}
                >
                  Automatico
                </TransmissionButtonText>
              </TransmissionButton>

              <TransmissionButton selected={transmission === 'manual'}>
                <Feather
                  name="key"
                  size={25}
                  color={transmission === 'manual' ? '#FFC700' : '#938D8D'}
                  onPress={() => handleSelectedTransmissionButton('manual')}
                />
                <TransmissionButtonText selected={transmission === 'manual'}>
                  Manual
                </TransmissionButtonText>
              </TransmissionButton>
            </TrasmissionButtonContainer>
          </TrasmissionContainer>

          <FetchButton onPress={handleFetchCarsByFilters}>
            <FetchButtonText>Filtrar</FetchButtonText>
          </FetchButton>
        </Content>
      </Modal>
    </Container>
  );
};

export default SearchModal;
