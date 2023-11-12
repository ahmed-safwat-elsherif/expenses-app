import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../utils/theme';
import { StyleSheet } from 'react-native';
import ExpenseForm from './ExpenseForm';
import useExpenses from '../../hooks/useExpenses';
import ErrorOverlay from '../shared/ErrorOverlay';

const AddExpense = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const { goBack } = useNavigation();
  const { addExpense } = useExpenses();
  const handleCancel = useCallback(() => goBack(), [goBack]);

  const handleAdd = useCallback(
    (data) => {
      setIsSubmitting(true);
      addExpense(data)
        .then(() => {
          goBack();
        })
        .catch(() => {
          setError("Couldn't add your expense!");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    },
    [goBack, addExpense],
  );

  if (error) {
    return (
      <ErrorOverlay confirmLabel="Try again" message={error} onConfirm={() => setError(null)} />
    );
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        isSubmitting={isSubmitting}
        submitLabel="Add"
        onSubmit={handleAdd}
        onCancel={handleCancel}
      />
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
