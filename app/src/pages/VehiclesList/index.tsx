import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Button, RefreshControl, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import {
  NativeViewGestureHandlerGestureEvent,
  NativeViewGestureHandlerProperties,
  NativeViewGestureHandlerStateChangeEvent,
  RectButtonProperties,
} from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CarItem, { Car } from '../../components/CarItem';

import {
  Container,
  Header,
  HeaderTitle,
  SearchContainer,
  Content,
  ScrollView,
  BrandItem,
  BrandName,
  TopContent,
  CarsContent,
  CarsScrollView,
} from './styles';
import api from '../../services/api';
import SearchModal from '../../components/SearchModal';
import { StoreState } from '../../store/createStore';

interface Brand {
  name: string;
  id: string;
}

interface CarsFiltered {
  cars: [];
}

const VehiclesList: React.FC = () => {
  const [brands, setBrands] = useState([]);
  const [cars, setCars] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation();

  const carsFiltered = useSelector((state: StoreState) => state.cars.cars);

  useEffect(() => {
    if (carsFiltered.cars?.length) {
      setCars(carsFiltered.cars);
    }
  }, [carsFiltered.cars]);

  useEffect(() => {
    setIsLoading(true);

    (async function findAll() {
      const { data } = await api.get('/brands');
      const response = await api.get('/cars');

      setBrands(data);
      setCars(response.data);
      setIsLoading(false);
    })();
  }, []);

  const handleSelectedBrand = useCallback(async (id: string) => {
    setSelectedId(id);

    const { data } = await api.post(`/brands/${id}`);

    setCars(data.cars);
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(false);
    setSelectedId('');

    const { data } = await api.get('/cars');

    setCars(data);
  }, []);

  return (
    <Container>
      <Header>
        <Feather
          name="chevron-left"
          size={25}
          color="#b4b4b4"
          onPress={() => navigation.goBack()}
        />

        <HeaderTitle>Veiculos</HeaderTitle>

        <SearchContainer>
          <Feather
            size={20}
            color="#FFC700"
            name="search"
            onPress={() => setShowModal(true)}
          />
        </SearchContainer>
      </Header>

      {showModal && (
        <SearchModal
          show={showModal}
          setShow={setShowModal}
          brand={selectedId}
        />
      )}

      <Content>
        {isLoading ? (
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
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <BrandItem active={selectedId === '' && true}>
                <BrandName active={selectedId === '' && true}>Todos</BrandName>
              </BrandItem>
              {brands.map((b: Brand) => (
                <BrandItem
                  key={b.id}
                  onPress={() => handleSelectedBrand(b.id)}
                  active={b.id === selectedId && true}
                >
                  <BrandName active={b.id === selectedId && true}>
                    {b.name}
                  </BrandName>
                </BrandItem>
              ))}
            </ScrollView>

            <CarsContent>
              <CarsScrollView
                refreshControl={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              >
                {cars.map((car: Car) => (
                  <CarItem details key={car.id} car={car} />
                ))}
              </CarsScrollView>
            </CarsContent>
          </>
        )}
      </Content>
    </Container>
  );
};

export default VehiclesList;
