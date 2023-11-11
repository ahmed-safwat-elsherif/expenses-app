import React, { useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../utils/theme';
import IconButton from '../shared/IconButton';
import useExpenses from '../../hooks/useExpenses';
import ExpenseForm from './ExpenseForm';

const EditExpense = ({ id }) => {
  const { goBack } = useNavigation();
  const { removeExpense, expenses } = useExpenses();

  const expense = useMemo(() => expenses.find((exp) => exp.id === id), [expenses, id]);

  const handleDelete = useCallback(() => {
    goBack();
    removeExpense(id);
  }, [id, goBack, removeExpense]);

  const handleCancel = useCallback(() => goBack(), [goBack]);

  const handleEdit = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <View style={styles.container}>
      <ExpenseForm
        defaultValues={expense}
        onSubmit={handleEdit}
        onCancel={handleCancel}
        submitLabel="Update"
      />
      <View style={styles.deleteContainer}>
        <IconButton name="trash" color={COLORS.error500} size={36} onPress={handleDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 2,
    borderTopColor: COLORS.primary200,
    alignItems: 'center',
  },
});

export default EditExpense;
