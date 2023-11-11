import React from 'react';
import { StyleSheet, View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { COLORS } from '../../utils/theme';

const ExpensesOutput = ({ expenses, periodName, ListEmptyComponent }) => (
  <View style={styles.container}>
    <ExpensesSummary expenses={expenses} periodName={periodName} />
    <ExpensesList ListEmptyComponent={ListEmptyComponent} expenses={expenses} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.primary700,
  },
});

export default ExpensesOutput;
