import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Add from './Components/Screens/Add';
import HomeStack from './Components/Stack/HomeStack';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home new') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Add') {
              iconName = focused ? 'add' : 'add-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={26} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'black',
        })}>
        <Tab.Screen
          name="Home new"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Add" component={Add} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
