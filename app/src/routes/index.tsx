import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StoreState } from '../store/createStore';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';
import MainRoutes from './MainRoutes';

const Routes: React.FC = () => {
  // useEffect(() => {
  //     // eslint-disable-next-line consistent-return
  //     (async function checkUserToken() {
  //         const token = await AsyncStorage.getItem('@Rentz:token');

  //         return token && <MainRoutes />;
  //     })();
  // }, []);

  const { token, loadingSignInRequest, error } = useSelector(
    (state: StoreState) => state.auth,
  );

  console.log(token, error);

  if (loadingSignInRequest) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#9a9a9a" />
      </View>
    );
  }

  return token ? <MainRoutes /> : <AuthRoutes />;
};

export default Routes;
