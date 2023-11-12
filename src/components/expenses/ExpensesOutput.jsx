import React from 'react';
import { StyleSheet, View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { COLORS } from '../../utils/theme';
import useExpenses from '../../hooks/useExpenses';

const ExpensesOutput = ({ expenses, periodName, ListEmptyComponent }) => {
  const { retry, loading } = useExpenses();
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      <ExpensesList
        loading={loading}
        ListEmptyComponent={ListEmptyComponent}
        expenses={expenses}
        onRefresh={retry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.primary700,
  },
});

export default ExpensesOutput;
