import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../utils/theme';
import { StyleSheet } from 'react-native';
import ExpenseForm from './ExpenseForm';
import useExpenses from '../../hooks/useExpenses';

const AddExpense = () => {
  const { goBack } = useNavigation();
  const { addExpense } = useExpenses();
  const handleCancel = useCallback(() => goBack(), [goBack]);

  const handleAdd = useCallback(
    (data) => {
      addExpense(data);
      goBack();
    },
    [goBack, addExpense],
  );

  return (
    <View style={styles.container}>
      <ExpenseForm submitLabel="Add" onSubmit={handleAdd} onCancel={handleCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.primary800,
  },
});

export default AddExpense;
