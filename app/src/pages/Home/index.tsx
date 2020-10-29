import React, { useEffect, useState } from 'react';

import { Feather } from '@expo/vector-icons';

import AsyncStorage from '@react-native-community/async-storage';
import { useSelector } from 'react-redux';
import { AppLoading } from 'expo';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import CarItem, { Car } from '../../components/CarItem';

import api from '../../services/api';
import { StoreState } from '../../store/createStore';

import {
  Container,
  Header,
  ProfileInfos,
  ProfileImage,
  ProfileNameContainer,
  ProfileNameText,
  Content,
  SalesTitle,
  ScrollView,
  AvailableBrands,
  BrandItem,
  BrandImage,
  BrandName,
  ButtonStartRent,
  ButtonStartRentText,
  BrandCars,
  SaudationName,
  AvailableBrandsTitle,
  AmountCars,
  CarTitle,
} from './styles';

interface Brand {
  id: string;
  name: string;
  image: string;
  cars: [];
}

const Home: React.FC = () => {
  const [brands, setBrands] = useState([]);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const { user } = useSelector((state: StoreState) => state.auth);

  useEffect(() => {
    setLoading(true);

    (async function findAllBrands() {
      const { data } = await api.get('/brands');
      const response = await api.post(
        `/brands/7c7094e0-f448-48b1-8d93-fe258a5f8644`,
      );

      setCars(response.data.cars);
      setBrands(data);
      setLoading(false);
    })();
  }, []);

  if (!user) {
    return <AppLoading />;
  }

  return (
    <Container>
      <Header>
        <ProfileInfos>
          <ProfileImage source={{ uri: user.avatar }} />

          <ProfileNameContainer>
            <SaudationName>Olá,</SaudationName>
            <ProfileNameText>{user.name}</ProfileNameText>
          </ProfileNameContainer>
        </ProfileInfos>

        <Feather name="power" size={25} color="#635F5F" />
      </Header>

      <Content>
        {loading && cars ? (
          <ActivityIndicator
            size="large"
            color="#999"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 64,
            }}
          />
        ) : (
          <>
            <SalesTitle>Mais vendidos</SalesTitle>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {cars.map((car: Car) => (
                <CarItem car={car} key={car.id} />
              ))}
            </ScrollView>

            <AvailableBrandsTitle>Marcas disponiveis</AvailableBrandsTitle>

            <AvailableBrands horizontal showsHorizontalScrollIndicator={false}>
              {brands.map((brand: Brand) => (
                <BrandItem key={brand.id}>
                  <BrandName>{brand.name}</BrandName>
                  <BrandImage
                    resizeMode="cover"
                    source={{
                      uri: brand.image,
                    }}
                  />

                  <BrandCars>
                    <AmountCars>{brand.cars.length}</AmountCars>
                    <CarTitle>carros</CarTitle>
                  </BrandCars>
                </BrandItem>
              ))}
            </AvailableBrands>

            <ButtonStartRent onPress={() => navigation.navigate('Schedule')}>
              <ButtonStartRentText>Comece a alugar</ButtonStartRentText>
              <Feather name="chevron-right" size={25} color="#FFC700" />
            </ButtonStartRent>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Home;
