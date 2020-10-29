import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import setIcon from '../../assets/seta.png';
import Button from '../../components/Button';

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

  return (
    <Container>
      <Header>
        <HeaderTitle>Escolha a data de aluguel</HeaderTitle>

        <BottomContent>
          <SelectInitialDateContainer>
            <FromText>De</FromText>
            <SelectedInitialDateText>20</SelectedInitialDateText>
          </SelectInitialDateContainer>

          <ArrowImage source={setIcon} />

          <SelectFinalDateContainer>
            <ToText>Ate</ToText>
            <SelectedFinalDateText>25</SelectedFinalDateText>
          </SelectFinalDateContainer>
        </BottomContent>
      </Header>

      <Calendar
        markingType="period"
        markedDates={{
          '2020-10-22': { marked: true, dotColor: '#50cebb' },
          '2020-10-23': { marked: true, dotColor: '#50cebb' },
          '2020-10-24': {
            startingDay: true,
            color: '#50cebb',
            textColor: 'white',
          },
          '2020-10-22': { color: '#70d7c7', textColor: 'white' },
          '2020-10-23': {
            color: '#70d7c7',
            textColor: 'white',
            marked: true,
            dotColor: 'white',
          },
          '2020-10-24': { color: '#70d7c7', textColor: 'white' },
          '2020-10-25': {
            endingDay: true,
            color: '#50cebb',
            textColor: 'white',
          },
        }}
      />

      <ButtonContainer>
        <Button disabled onPress={() => navigation.navigate('VehiclesList')}>
          Escolher
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Schedule;
