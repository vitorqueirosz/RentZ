import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from '../pages/Home';
import Schedule from '../pages/Schedule';
import Appointments from '../pages/Appointments';
import Profile from '../pages/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          height: 64,
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Ubuntu_500Medium',
          fontSize: 12,
          marginTop: 4,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#EBEBF5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#FFC700',
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                size={size}
                name="home"
                color={focused ? '#FFC700' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: 'Veiculos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                size={size}
                name="list"
                color={focused ? '#FFC700' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Appointments"
        component={Appointments}
        options={{
          tabBarLabel: 'Agendamentos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                size={size}
                name="calendar"
                color={focused ? '#FFC700' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                size={size}
                name="user"
                color={focused ? '#FFC700' : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
};
export default AppRoutes;
