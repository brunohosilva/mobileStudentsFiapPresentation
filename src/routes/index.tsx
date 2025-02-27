import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens';

const Stack = createStackNavigator();

function StackRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}

export {Router};
