import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import RNPickerSelect from 'react-native-picker-select';
import ptBR, { parseISO, format } from 'date-fns';

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
  SelectTimeContainer,
  SelectTimeTitle,
  SelectContainer,
  Input,
  SelectSessionTime,
  SessionTitle,
} from './styles';
import api from '../../services/api';
import { StoreState } from '../../store/createStore';
import ModalFinishRent from '../../components/ModalFinishRent';
import { fetchAppointmentsRequest } from '../../store/ducks/appointments/actions';

interface FinishRentProps {
  car: Car;
}

const FinishRent: React.FC<FinishRentProps> = () => {
  const [requestTime, setRequestTime] = useState<string>('');
  const [returnTime, setReturnTime] = useState<string>('');
  const [rentedDays, setRentedDays] = useState<number>(0);

  const [initialDate, setInitialDate] = useState<string>('');
  const [finalDate, setFinalDate] = useState<string>('');

  const [showModal, setShowModal] = useState<boolean>(false);

  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const { car } = route.params as FinishRentProps;
  const { from, to } = useSelector((state: StoreState) => state.schedule);

  const hours = [
    { label: '00:00', value: '00:00' },
    { label: '01:00', value: '01:00' },
    { label: '03:00', value: '03:00' },
    { label: '04:00', value: '04:00' },
    { label: '05:00', value: '05:00' },
    { label: '06:00', value: '06:00' },
    { label: '07:00', value: '07:00' },
    { label: '08:00', value: '08:00' },
    { label: '09:00', value: '09:00' },
    { label: '10:00', value: '10:00' },
    { label: '11:00', value: '11:00' },
    { label: '12:00', value: '12:00' },
    { label: '13:00', value: '13:00' },
    { label: '14:00', value: '14:00' },
    { label: '15:00', value: '15:00' },
    { label: '16:00', value: '16:00' },
    { label: '17:00', value: '17:00' },
    { label: '18:00', value: '18:00' },
    { label: '20:00', value: '20:00' },
    { label: '21:00', value: '21:00' },
    { label: '22:00', value: '22:00' },
    { label: '23:00', value: '23:00' },
  ];

  useEffect(() => {
    if (from && to) {
      const initialDay = from.replace(from, `${from[8]}${from[9]}`);
      const finalDay = to.replace(to, `${to[8]}${to[9]}`);

      const fromISO = parseISO(from);
      const toISO = parseISO(to);

      setInitialDate(format(fromISO, 'dd MMMM yyyy', { locale: ptBR }));
      setFinalDate(format(toISO, 'dd MMMM yyyy', { locale: ptBR }));

      setRentedDays(Number(finalDay) - Number(initialDay) + 1);
    }
  }, [from, to, rentedDays]);

  async function handleRentCar() {
    try {
      await api.post('/rents', {
        car_id: car.id,
        from,
        to,
        request_time: requestTime,
        return_time: returnTime,
        total_price: Math.floor(rentedDays * Number(car.price)),
      });

      dispatch(fetchAppointmentsRequest());
      setShowModal(true);

      setTimeout(() => {
        navigation.navigate('Appointments');
      }, 7000);
    } catch {
      console.log('Error');
    }
  }

  return (
    <Container>
      {showModal && <ModalFinishRent show={showModal} setShow={setShowModal} />}

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

      <Content contentContainerStyle={{ paddingBottom: 32 }}>
        <CategoryName>{car.category}</CategoryName>

        <NameContainer>
          <BrandName>{car.brand}</BrandName>
          <CarName>{car.name}</CarName>
        </NameContainer>

        <CarImage resizeMode="cover" source={{ uri: car.image }} />

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
            <TimeText>{initialDate}</TimeText>
          </PeriodContainer>

          <Arrow source={arrowIcon} />

          <PeriodContainer>
            <PeriodText>Até</PeriodText>
            <TimeText>{finalDate}</TimeText>
          </PeriodContainer>
        </ScheduleContainer>

        <SelectTimeContainer>
          <SelectTimeTitle>Selecione os horários</SelectTimeTitle>

          <SelectContainer>
            <SelectSessionTime>
              <SessionTitle>Retirada</SessionTitle>

              <RNPickerSelect
                onValueChange={(value: string) => setRequestTime(value)}
                items={hours.map(hour => ({
                  label: hour.label,
                  value: hour.value,
                }))}
              >
                <Input
                  placeholder="Horário"
                  placeholderTextColor="#E1B30D"
                  value={requestTime}
                />
              </RNPickerSelect>
            </SelectSessionTime>

            <SelectSessionTime>
              <SessionTitle>Entrega</SessionTitle>

              <RNPickerSelect
                onValueChange={(value: string) => setReturnTime(value)}
                items={hours.map(hour => ({
                  label: hour.label,
                  value: hour.value,
                }))}
              >
                <Input
                  placeholder="Horário"
                  placeholderTextColor="#E1B30D"
                  value={returnTime}
                />
              </RNPickerSelect>
            </SelectSessionTime>
          </SelectContainer>
        </SelectTimeContainer>
      </Content>

      <ButtonContainer>
        <PriceContainerButton>
          <PricePerDayMultiText>
            {rentedDays} dias x{` R$${car.price}`}
          </PricePerDayMultiText>

          <TotalPriceContainer>
            <TotalPrice>
              {`R$ ${Math.floor(rentedDays * Number(car.price))}`}
            </TotalPrice>
            <TotalPriceText>Total</TotalPriceText>
          </TotalPriceContainer>
        </PriceContainerButton>

        <FinishRentButton onPress={handleRentCar}>
          <FinishRentButtonText>Finalizar</FinishRentButtonText>
        </FinishRentButton>
      </ButtonContainer>
    </Container>
  );
};

export default FinishRent;
