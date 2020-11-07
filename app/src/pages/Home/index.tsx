import React, { useEffect, useState } from 'react';

import { Feather } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { AppLoading } from 'expo';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import CarItem, { Car } from '../../components/CarItem';

import api from '../../services/api';
import { StoreState } from '../../store/createStore';
import { signOutRequest } from '../../store/ducks/signOut/actions';

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
import { User } from '../../store/ducks/auth/types';

interface Brand {
  id: string;
  name: string;
  image: string;
  cars: [];
}

const Home: React.FC = () => {
  const [brands, setBrands] = useState([]);
  const [userData, setUserData] = useState<User | null>({} as User);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { user, token } = useSelector((state: StoreState) => state.auth);
  const { user: updatedUser } = useSelector((state: StoreState) => state.user);

  console.log(user);

  useEffect(() => {
    setLoading(true);
    setUserData(user);

    (async function findAllBrands() {
      const { data } = await api.get('/brands');
      const response = await api.post(
        `/brands/7c7094e0-f448-48b1-8d93-fe258a5f8644`,
      );

      setCars(response.data.cars);
      setBrands(data);
      setLoading(false);
    })();
  }, [user]);

  useEffect(() => {
    if (updatedUser) {
      setUserData(updatedUser);
      console.log('TESTE');
    }
  }, [updatedUser]);

  if (!userData) {
    return <AppLoading />;
  }

  function handleLogout() {
    if (token) {
      dispatch(signOutRequest({ token }));
    }
  }

  console.log(userData);

  return (
    <Container>
      <Header>
        <ProfileInfos>
          <ProfileImage
            source={{
              uri:
                userData.avatar ||
                'https://clipartart.com/images/driver-icon-clipart-1.png',
            }}
          />

          <ProfileNameContainer>
            <SaudationName>Olá,</SaudationName>
            <ProfileNameText>{userData.name}</ProfileNameText>
          </ProfileNameContainer>
        </ProfileInfos>

        <Feather name="power" size={25} color="#aaa" onPress={handleLogout} />
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
