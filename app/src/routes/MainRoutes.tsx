import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AppRoutes from './AppRoutes';
import VehiclesList from '../pages/VehiclesList';
import Car from '../pages/Car';
import FinishRent from '../pages/FinishRent';

const { Navigator, Screen } = createStackNavigator();

const MainRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: { backgroundColor: '#f2f3f5' },
      }}
    >
      <Screen name="AppTabs" component={AppRoutes} />
      <Screen name="VehiclesList" component={VehiclesList} />
      <Screen name="Car" component={Car} />
      <Screen name="FinishRent" component={FinishRent} />
    </Navigator>
  );
};

export default MainRoutes;
