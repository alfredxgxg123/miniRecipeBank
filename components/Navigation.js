/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FavoritedScreen from './FavoritedScreen';
import HomeScreen from './HomeScreen';

const Tab = createMaterialBottomTabNavigator();

const Navbar = () => (
  <NavigationContainer>
    <Tab.Navigator barStyle={{ backgroundColor: '#41B3A3' }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={FavoritedScreen}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="barcode-scan" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navbar;
