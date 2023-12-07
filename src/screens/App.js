import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import FormPage from './FormPage';
import ResultPage from './ResultPage';

const Stack = createStackNavigator();

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('Home');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={HomePage}
          listeners={{
            focus: () => setCurrentRoute('Home'),
          }}
        />
        <Stack.Screen
          name="Form"
          component={FormPage}
          listeners={{
            focus: () => setCurrentRoute('Form'),
          }}
        />
        <Stack.Screen
          name="Result"
          component={ResultPage}
          listeners={{
            focus: () => setCurrentRoute('Result'),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
