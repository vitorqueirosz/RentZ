import React from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';

import { format } from 'date-fns';

import { useNavigation } from '@react-navigation/native';
import { parseISO } from 'date-fns/esm';

import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  TopContent,
  CategoryName,
  Content,
  CarNameContainer,
  CarBrandName,
  CarTextName,
  CarImage,
  ButtonGoToDetail,
  PriceContainer,
  PricePerDay,
  PerDayText,
  RentContainer,
  PeriodRentContainer,
  RentTimeText,
} from './styles';
import { Rent } from '../../pages/Appointments';
import { removeToFavorites } from '../../store/ducks/favorites/actions';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pt } = require('date-fns/locale');

export interface Car {
  id: string;
  name: string;
  image: string;
  transmission?: string;
  category: string;
  type?: string;
  brand: string;
  kms?: string;
  price?: string;
  seats?: number;
}

interface CarItemProps {
  car: Car;
  details?: boolean;
  rent?: Rent;
  favorite?: boolean;
}

const CarItem: React.FC<CarItemProps> = ({ car, details, rent, favorite }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleNavigateToCar = (carDetails: Car) => {
    navigation.navigate('Car', { car: carDetails });
  };

  function formattedDate(date: string) {
    const formattedISO = parseISO(date);

    const dateFormatted = format(formattedISO, 'dd  MMMM yyyy', {
      locale: pt,
    });

    return dateFormatted;
  }

  const handleFavoriteCar = async () => {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    dispatch(removeToFavorites({ car, favoritedsCars: favoritesArray }));

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  };

  console.log(car.image);

  return (
    <Container>
      <TopContent>
        <CategoryName>{car.category}</CategoryName>

        {details && (
          <ButtonGoToDetail onPress={() => handleNavigateToCar(car)}>
            <Feather size={20} color="#FFC700" name="chevron-right" />
          </ButtonGoToDetail>
        )}

        {favorite && (
          <ButtonGoToDetail onPress={handleFavoriteCar}>
            <AntDesign size={20} color="#FFC700" name="heart" />
          </ButtonGoToDetail>
        )}
      </TopContent>

      <Content>
        <CarNameContainer rent={!!rent}>
          <CarBrandName>{car.brand}</CarBrandName>
          <CarTextName>{car.name}</CarTextName>

          {rent && (
            <PriceContainer>
              <PricePerDay>{`R$ ${car.price}`}</PricePerDay>
              <PerDayText>/dia</PerDayText>
            </PriceContainer>
          )}
        </CarNameContainer>

        <CarImage uri={car.image} />
      </Content>
      {rent && (
        <RentContainer>
          <Feather size={20} color="#FFC700" name="calendar" />

          <PeriodRentContainer>
            <RentTimeText>{formattedDate(rent.from)}</RentTimeText>
            <RentTimeText>{formattedDate(rent.to)}</RentTimeText>
          </PeriodRentContainer>
        </RentContainer>
      )}
    </Container>
  );
};

export default CarItem;
