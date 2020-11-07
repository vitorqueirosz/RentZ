import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { parseISO } from 'date-fns/esm';
import React, { useState } from 'react';

import { Calendar, RangeType } from 'react-native-calendario';
import { useDispatch } from 'react-redux';
import setIcon from '../../assets/seta.png';
import Button from '../../components/Button';
import { scheduleDateRequest } from '../../store/ducks/schedule/actions';

import {
  Container,
  Header,
  HeaderTitle,
  BottomContent,
  SelectedInitialDateText,
  SelectedFinalDateText,
  ArrowImage,
  FromText,
  ToText,
  SelectInitialDateContainer,
  SelectFinalDateContainer,
  ButtonContainer,
} from './styles';

const Schedule: React.FC = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [initialDate, setInitialDate] = useState<Date>(new Date());
  const [finalDate, setFinalDate] = useState<Date>(new Date());

  const [selectedInitialDate, setSelectedInitialDate] = useState<string>('');
  const [selectedFinalDate, setSelectedFinalDate] = useState<string>('');

  const [showInitialDate, setShowInitialDate] = useState<string>('');
  const [showFinalDate, setShowFinalDate] = useState<string>('');

  function handleSelectedDay(day: RangeType) {
    setInitialDate(day.startDate);
    setFinalDate(day?.endDate);

    setShowInitialDate(
      format(parseISO(day.startDate.toISOString()), 'dd MMMM yyyy'),
    );

    if (day.endDate) {
      setShowFinalDate(
        format(parseISO(day.endDate.toISOString()), 'dd MMMM yyyy'),
      );
      setSelectedInitialDate(
        format(parseISO(day.startDate.toISOString()), 'yyyy-MM-dd'),
      );
      setSelectedFinalDate(
        format(parseISO(day.endDate.toISOString()), 'yyyy-MM-dd'),
      );
    }
  }

  function handleSelectDate() {
    dispatch(
      scheduleDateRequest({ from: selectedInitialDate, to: selectedFinalDate }),
    );

    navigation.navigate('VehiclesList');
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Escolha a data de aluguel</HeaderTitle>

        <BottomContent>
          <SelectInitialDateContainer>
            <FromText>De</FromText>
            <SelectedInitialDateText>{showInitialDate}</SelectedInitialDateText>
          </SelectInitialDateContainer>

          <ArrowImage source={setIcon} />

          <SelectFinalDateContainer>
            <ToText>Até</ToText>
            <SelectedFinalDateText>{showFinalDate}</SelectedFinalDateText>
          </SelectFinalDateContainer>
        </BottomContent>
      </Header>

      <Calendar
        onChange={date => handleSelectedDay(date)}
        startDate={initialDate}
        endDate={finalDate}
        theme={{
          monthTitleTextStyle: {
            color: '#ffc700',
            fontWeight: '300',
            fontSize: 16,
          },
          emptyMonthTextStyle: {
            fontWeight: '200',
          },
          weekColumnStyle: {
            paddingVertical: 10,
          },
          weekColumnTextStyle: {
            color: '#b6c1cd',
            fontSize: 13,
          },
          dayTextStyle: {
            color: '#2d4150',
            fontWeight: '200',
            fontSize: 15,
          },
          todayTextStyle: {
            color: '#1d1f24',
          },
          activeDayContainerStyle: {
            backgroundColor: '#1d1f24',
          },
          activeDayTextStyle: {
            color: 'white',
          },
        }}
      />

      <ButtonContainer>
        <Button disabled onPress={handleSelectDate}>
          Escolher
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Schedule;
