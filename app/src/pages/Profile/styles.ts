import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: #1d1f24;
  height: 200px;
  padding: 42px 24px;
  flex-direction: row;
  justify-content: space-between;
`;
export const Content = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: -100px;
  padding: 0 16px;
  flex: 1;
`;
export const HeaderTitle = styled.Text`
  color: #ffc700;
  font-family: Ubuntu_500Medium;
  font-size: 16px;
`;
export const DetailsContainer = styled.View`
  align-items: center;
`;
export const ProfileImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;
export const UserName = styled.Text`
  color: #494949;
  font-family: Ubuntu_500Medium;
  font-size: 18px;
  margin-top: 8px;
`;
export const LevelDetailSideContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LevelContainer = styled.View`
  background: #0c64a4;
  height: 90px;
  width: 100%;
  border-radius: 4px;
  margin-top: 32px;
  padding: 16px;

  align-items: center;
  justify-content: space-between;
`;
export const LevelTitle = styled.Text`
  color: #d0d0d0;
  font-size: 16px;
  font-family: Ubuntu_500Medium;
`;
export const LevelDetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserLevelText = styled.Text`
  color: #ffc700;
  font-family: Ubuntu_700Bold;
`;

export const UserLevel = styled.Text`
  font-family: Ubuntu_500Medium;
  color: #ffffff;
  font-size: 16px;
  margin-right: 8px;
`;
export const FavoritesContainer = styled.View`
  width: 100%;
  margin-top: 24px;
  flex: 1;
`;
export const FavoritesTitle = styled.Text`
  color: #494949;
  font-size: 16px;
  font-family: Ubuntu_500Medium;
`;

export const AmountAppointments = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
export const TotalAppointmentsText = styled.Text`
  color: #d0d0d0;
  font-family: Ubuntu_700Bold;
`;
export const AmountAppointmentsText = styled.Text`
  color: #fff;
  align-self: flex-end;
  font-family: Ubuntu_500Medium;
  font-size: 16px;
`;

export const FavoritesScroll = styled.ScrollView`
  margin-top: 16px;
`;

export const EmptyFavoriteContainer = styled.View`
  width: 100%;
  background: #1d1f24;
  border-radius: 4px;
  padding: 16px;
  margin-top: 16px;
  align-items: center;
`;
export const EmptyContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const EmptyFavoriteTitle = styled.Text`
  margin-right: 8px;
  color: #d0d0d0;
  font-family: Ubuntu_500Medium;
`;
export const NavigationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  margin-top: 16px;
`;

export const NavigationButton = styled.TouchableOpacity``;
export const NavigationButtonText = styled.Text`
  color: #999;
  font-size: 12px;
  font-family: Ubuntu_400Regular;
  padding-bottom: 1px;
  border-bottom-width: 1px;
  border-bottom-color: #b6900c;
`;

export const ProfileImageContainer = styled.View``;
export const SelectImageContainer = styled.Image`
  width: 40px;
  height: 40px;
`;

export const SelectButtonImage = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 0;
`;
