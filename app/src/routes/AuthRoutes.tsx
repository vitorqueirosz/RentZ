import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: { backgroundColor: '#f2f3f5' },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export default AppStack;
