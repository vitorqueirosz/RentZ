import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CarItem, { Car } from '../../components/CarItem';

import { StoreState } from '../../store/createStore';
import { fetchAppointmentsRequest } from '../../store/ducks/appointments/actions';

import {
  Container,
  Header,
  HeaderTitle,
  AmountAppointments,
  Content,
  ScrollView,
  EmptyContainer,
  EmptyAppointmentText,
} from './styles';

export interface Rent {
  id: string;
  from: string;
  to: string;
  request_time: string;
  return_time: string;
  total_price: string;
}
export interface Appointment {
  car: Car;
  rent: Rent;
  rents: Rent[];
}

const Appointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const dispatch = useDispatch();

  const {
    appointments: appointmentsList,
    loadingAppointmentsRequest,
  } = useSelector((state: StoreState) => state.appointments);

  useEffect(() => {
    dispatch(fetchAppointmentsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (appointmentsList) {
      setAppointments(appointmentsList);
    }
  }, [appointmentsList]);

  return (
    <Container>
      <Header>
        <HeaderTitle>Meus agendamentos</HeaderTitle>

        <AmountAppointments>
          {appointments.length && (
            <AmountAppointments>
              {appointments.length} agendamentos
            </AmountAppointments>
          )}
        </AmountAppointments>
      </Header>

      {loadingAppointmentsRequest ? (
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
        <Content>
          <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
            {appointments.length ? (
              appointments.map((a: Appointment) => (
                <CarItem key={a.rent.id} car={a.car} rent={a.rent} />
              ))
            ) : (
              <EmptyContainer>
                <EmptyAppointmentText>
                  Você não possui agendamentos
                </EmptyAppointmentText>
              </EmptyContainer>
            )}
          </ScrollView>
        </Content>
      )}
    </Container>
  );
};

export default Appointments;
