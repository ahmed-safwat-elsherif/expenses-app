import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AllExpenses from '../screens/AllExpenses';
import RecentExpenses from '../screens/RecentExpenses';

const BottomTabs = createBottomTabNavigator();

const ExploreExpenses = () => (
  <BottomTabs.Navigator>
    <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
    <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
  </BottomTabs.Navigator>
);

export default ExploreExpenses;
