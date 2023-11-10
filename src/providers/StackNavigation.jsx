import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ManageExpenses from '../screens/ManageExpenses';
import ExploreExpenses from './ExploreExpenses';
import { COLORS } from '../utils/theme';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: COLORS.primary500 },
      headerTintColor: 'white',
    }}>
    <Stack.Screen
      name="ExploreExpenses"
      component={ExploreExpenses}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ManageExpenses"
      component={ManageExpenses}
      options={{
        presentation: 'modal',
      }}
    />
  </Stack.Navigator>
);

export default StackNavigation;
