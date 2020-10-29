import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
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
} from './styles';

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
}

const CarItem: React.FC<CarItemProps> = ({ car, details }) => {
  const navigation = useNavigation();

  const handleNavigateToCar = (carDetails: Car) => {
    navigation.navigate('Car', { car: carDetails });
  };

  return (
    <Container>
      <TopContent>
        <CategoryName>{car.category}</CategoryName>

        {details && (
          <ButtonGoToDetail onPress={() => handleNavigateToCar(car)}>
            <Feather size={20} color="#FFC700" name="chevron-right" />
          </ButtonGoToDetail>
        )}
      </TopContent>

      <Content>
        <CarNameContainer>
          <CarBrandName>{car.brand}</CarBrandName>
          <CarTextName>{car.name}</CarTextName>
        </CarNameContainer>

        <CarImage source={{ uri: car.image }} />
      </Content>
    </Container>
  );
};

export default CarItem;
