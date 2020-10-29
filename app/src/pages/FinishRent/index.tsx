import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import React from 'react';
import { View } from 'react-native';
import { Car } from '../../components/CarItem';
import SpecItem from '../../components/SpecItem';

import arrowIcon from '../../assets/seta.png';

import {
  Container,
  Content,
  Header,
  HeaderTitle,
  CategoryName,
  NameContainer,
  BrandName,
  CarName,
  CarImage,
  PriceContainer,
  PricePerDayText,
  PricePerDayContainer,
  PriceText,
  DetailsContainer,
  ScheduleContainer,
  PeriodContainer,
  PeriodText,
  TimeText,
  Arrow,
  PriceContainerButton,
  ButtonContainer,
  TotalPriceContainer,
  TotalPrice,
  PricePerDayMultiText,
  TotalPriceText,
  FinishRentButton,
  FinishRentButtonText,
} from './styles';
import Button from '../../components/Button';

interface FinishRentProps {
  car: Car;
}

const FinishRent: React.FC<FinishRentProps> = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const { car } = route.params as FinishRentProps;

  return (
    <Container>
      <Header>
        <Feather
          name="chevron-left"
          size={25}
          color="#E1B30D"
          onPress={() => navigation.goBack()}
        />

        <HeaderTitle>Finalizacao</HeaderTitle>

        <View style={{ width: 25 }} />
      </Header>

      <Content>
        <CategoryName>{car.category}</CategoryName>

        <NameContainer>
          <BrandName>{car.brand}</BrandName>
          <CarName>{car.name}</CarName>
        </NameContainer>

        <CarImage resizeMode="contain" source={{ uri: car.image }} />

        <PriceContainer>
          <PricePerDayText>Por dia</PricePerDayText>

          <PricePerDayContainer>
            <PriceText>{`R$ ${car.price}`}</PriceText>
          </PricePerDayContainer>
        </PriceContainer>

        <DetailsContainer>
          <SpecItem
            icon={car.transmission === 'Automático' ? 'cpu' : 'key'}
            specType="Transmissao"
            specData={car.transmission}
          />

          <SpecItem
            icon="tachometer"
            specType="Velocidade Max"
            specData={`${car.kms} KM/h`}
          />
        </DetailsContainer>

        <DetailsContainer>
          <SpecItem icon="users" specType="Assentos" specData={car.seats} />

          <SpecItem icon="droplet" specType="Tipo" specData={car.type} />
        </DetailsContainer>

        <ScheduleContainer>
          <PeriodContainer>
            <PeriodText>De</PeriodText>
            <TimeText>24 Outubro 2020</TimeText>
          </PeriodContainer>

          <Arrow source={arrowIcon} />

          <PeriodContainer>
            <PeriodText>Ate</PeriodText>
            <TimeText>28 Outubro 2020</TimeText>
          </PeriodContainer>
        </ScheduleContainer>
      </Content>

      <ButtonContainer>
        <PriceContainerButton>
          <PricePerDayMultiText>
            4 dias x
{` R$${car.price}`}
          </PricePerDayMultiText>

          <TotalPriceContainer>
            <TotalPrice>R$ 1050,00</TotalPrice>
            <TotalPriceText>Total</TotalPriceText>
          </TotalPriceContainer>
        </PriceContainerButton>

        <FinishRentButton onPress={() => {}}>
          <FinishRentButtonText>Finalizar</FinishRentButtonText>
        </FinishRentButton>
      </ButtonContainer>
    </Container>
  );
};

export default FinishRent;
