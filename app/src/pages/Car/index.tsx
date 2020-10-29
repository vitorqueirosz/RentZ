import { Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';

import { Car } from '../../components/CarItem';
import { PricePerDayTitle } from '../../components/SearchModal/styles';

import SpecItem from '../../components/SpecItem';

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
  ButtonFavorite,
  DetailsContainer,
  ButtonContainer,
  PriceContainer,
  PricePerDayText,
  PriceText,
  CardRentContainer,
} from './styles';

interface CarParams {
  car: Car;
}

const CarDetails: React.FC = () => {
  const route = useRoute();

  const { car } = route.params as CarParams;

  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Feather
          name="chevron-left"
          size={25}
          color="#E1B30D"
          onPress={() => navigation.goBack()}
        />

        <HeaderTitle>Veiculo</HeaderTitle>

        <View style={{ width: 25 }} />
      </Header>

      <Content>
        <CategoryName>{car.category}</CategoryName>

        <NameContainer>
          <BrandName>{car.brand}</BrandName>
          <CarName>{car.name}</CarName>
        </NameContainer>

        <CarImage resizeMode="cover" source={{ uri: car.image }} />

        <ButtonFavorite onPress={() => {}}>
          <AntDesign name="heart" size={20} color="#fff" />
        </ButtonFavorite>

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
      </Content>

      <CardRentContainer>
        <ButtonContainer>
          <PriceContainer>
            <PricePerDayText>Preço por dia</PricePerDayText>

            <PriceText>{`R$ ${car.price}`}</PriceText>
          </PriceContainer>

          <Button
            disabled
            onPress={() => navigation.navigate('FinishRent', { car })}
          >
            Alugar
          </Button>
        </ButtonContainer>
      </CardRentContainer>
    </Container>
  );
};

export default CarDetails;
