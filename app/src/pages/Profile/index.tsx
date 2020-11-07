import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import camIcon from '../../assets/camera.png';
import CarItem, { Car } from '../../components/CarItem';
import { StoreState } from '../../store/createStore';

import {
  Container,
  Header,
  Content,
  HeaderTitle,
  DetailsContainer,
  ProfileImage,
  UserName,
  LevelContainer,
  LevelTitle,
  LevelDetailSideContainer,
  LevelDetailsContainer,
  UserLevel,
  UserLevelText,
  FavoritesContainer,
  FavoritesTitle,
  AmountAppointments,
  TotalAppointmentsText,
  AmountAppointmentsText,
  FavoritesScroll,
  EmptyFavoriteContainer,
  EmptyContainer,
  EmptyFavoriteTitle,
  NavigationContainer,
  NavigationButton,
  NavigationButtonText,
  ProfileImageContainer,
  SelectImageContainer,
  SelectButtonImage,
} from './styles';

import { User } from '../../store/ducks/auth/types';
import { updateUserRequest } from '../../store/ducks/user/actions';
import { signOutRequest } from '../../store/ducks/signOut/actions';

import { Appointment } from '../Appointments';

import { fetchAppointmentsRequest } from '../../store/ducks/appointments/actions';

const Profile: React.FC = () => {
  const [carFavorites, setCarFavorites] = useState<Car[]>([]);
  const [userAppointments, setUserAppointments] = useState<Appointment[]>([]);

  const [userData, setUserData] = useState<User | null>({} as User);
  const [image, setImage] = useState('');

  const { user, token } = useSelector((state: StoreState) => state.auth);
  const { user: updatedUser } = useSelector((state: StoreState) => state.user);

  const { appointments, loadingAppointmentsRequest } = useSelector(
    (state: StoreState) => state.appointments,
  );
  const { favorites } = useSelector((state: StoreState) => state.favorites);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    (async function getAllFavorites() {
      const carsFavorites = await AsyncStorage.getItem('favorites');

      if (carsFavorites) {
        setCarFavorites(JSON.parse(carsFavorites));
      }
    })();
  }, [favorites]);

  useEffect(() => {
    dispatch(fetchAppointmentsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (appointments && loadingAppointmentsRequest) {
      setUserAppointments(appointments);
    }
  }, [appointments, loadingAppointmentsRequest]);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  useEffect(() => {
    if (updatedUser) {
      setUserData(updatedUser);
    }
  }, [updatedUser]);

  useEffect(() => {
    if (image) {
      const formData = new FormData();

      const avatarData: any = {
        type: 'Image/jpeg',
        uri: image,
        name: `${user?.id}.jpg`,
      };

      formData.append('avatar', avatarData);

      dispatch(updateUserRequest({ avatar: formData }));
    }
  }, [image, dispatch, user?.id]);

  function handleLogout() {
    if (token) {
      dispatch(signOutRequest({ token }));
    }
  }

  async function handleSelectImage() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    // if (status !== 'granted') {
    //   alert('Precisamos de acessoa as suas fotos');
    //   return;
    // }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri } = result;
    setImage(uri);
  }

  if (!userData) {
    return <AppLoading />;
  }

  console.log(appointments.length);

  return (
    <Container>
      <Header>
        <Feather name="edit" size={25} color="#aaa" />

        <HeaderTitle>Perfil</HeaderTitle>

        <Feather name="power" size={25} color="#aaa" onPress={handleLogout} />
      </Header>
      <Content>
        <DetailsContainer>
          {userData.avatar ? (
            <ProfileImage source={{ uri: userData.avatar }} />
          ) : (
            <ProfileImageContainer>
              <ProfileImage
                source={{
                  uri:
                    image ||
                    'https://clipartart.com/images/driver-icon-clipart-1.png',
                }}
              />
              <SelectButtonImage onPress={handleSelectImage}>
                <SelectImageContainer source={camIcon} />
              </SelectButtonImage>
            </ProfileImageContainer>
          )}

          <UserName>{userData.name}</UserName>
        </DetailsContainer>

        <LevelContainer>
          <LevelDetailSideContainer>
            <LevelTitle>Nivel</LevelTitle>

            <LevelDetailsContainer>
              <UserLevel>{userData.level}</UserLevel>

              {/* <Feather name="loader" size={25} color="#FFC700" /> */}
              <UserLevelText>Iniciante</UserLevelText>
            </LevelDetailsContainer>
          </LevelDetailSideContainer>

          <AmountAppointments>
            <TotalAppointmentsText>Total de agendamentos</TotalAppointmentsText>

            <AmountAppointmentsText>
              {appointments.length ? appointments.length : '0'}
            </AmountAppointmentsText>
          </AmountAppointments>
        </LevelContainer>

        <FavoritesContainer>
          <FavoritesTitle>Favoritos</FavoritesTitle>

          {carFavorites.length ? (
            <FavoritesScroll contentContainerStyle={{ paddingBottom: 4 }}>
              {carFavorites?.map((car: Car) => (
                <CarItem key={car.id} car={car} favorite />
              ))}
            </FavoritesScroll>
          ) : (
            <EmptyFavoriteContainer>
              <EmptyContainer>
                <EmptyFavoriteTitle>
                  Você não possui favoritos
                </EmptyFavoriteTitle>
                <Feather name="heart" size={25} color="#FFC700" />
              </EmptyContainer>

              <NavigationContainer>
                <NavigationButton
                  onPress={() => navigation.navigate('Schedule')}
                >
                  <NavigationButtonText>
                    Ir para Lista de Carros
                  </NavigationButtonText>
                </NavigationButton>
                <Feather name="chevron-right" size={25} color="#FFC700" />
              </NavigationContainer>
            </EmptyFavoriteContainer>
          )}
        </FavoritesContainer>
      </Content>
    </Container>
  );
};

export default Profile;
