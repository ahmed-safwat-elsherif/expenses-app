import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ManageExpenses from '../screens/ManageExpenses';
import ExploreExpenses from './ExploreExpenses';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ExploreExpenses"
      component={ExploreExpenses}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
  </Stack.Navigator>
);

export default StackNavigation;
