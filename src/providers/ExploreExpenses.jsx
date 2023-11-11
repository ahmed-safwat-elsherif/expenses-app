import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AllExpenses from '../screens/AllExpenses';
import RecentExpenses from '../screens/RecentExpenses';
import { COLORS } from '../utils/theme';
import { Ionicons } from '@expo/vector-icons';
import AddExpenseButton from '../components/expenses/AddExpenseButton';
import { ROUTES } from '../routes';

const BottomTabs = createBottomTabNavigator();

const ExploreExpenses = () => (
  <BottomTabs.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: COLORS.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: COLORS.primary500 },
      tabBarActiveTintColor: COLORS.accent500,
      headerRight: AddExpenseButton,
    }}>
    <BottomTabs.Screen
      name={ROUTES.RECENT_EXPENSES}
      component={RecentExpenses}
      options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" size={size} color={color} />,
      }}
    />
    <BottomTabs.Screen
      name={ROUTES.ALL_EXPENSES}
      component={AllExpenses}
      options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />,
      }}
    />
  </BottomTabs.Navigator>
);

export default ExploreExpenses;
