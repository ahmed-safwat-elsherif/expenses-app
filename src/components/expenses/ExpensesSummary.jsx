import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, fontSize } from '../../utils/theme';

const ExpensesSummary = ({ expenses, periodName }) => {
  const total = useMemo(() => expenses.reduce((acc, curr) => acc + curr.amount, 0), [expenses]);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${total.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: COLORS.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  period: {
    fontSize: fontSize(12),
    color: COLORS.primary400,
  },
  sum: {
    fontSize: fontSize(16),
    fontWeight: 'bold',
    color: COLORS.primary500,
  },
});

export default ExpensesSummary;
