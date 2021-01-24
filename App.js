import { StatusBar } from 'expo-status-bar';
import React from 'react';

//import NavigationRouter - Handling Routes
import { NavigationContainer } from '@react-navigation/native';

//import Stack
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './components/auth/Landing';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


