import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';

import { StoreState } from '../store/createStore';

import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';

const Routes: React.FC = () => {
  const { token, loadingSignInRequest } = useSelector(
    (state: StoreState) => state.auth,
  );

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

  return token ? <MainRoutes /> : <AuthRoutes /> || <AuthRoutes />;
};

export default Routes;
