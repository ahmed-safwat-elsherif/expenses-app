import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../utils/theme';
import IconButton from '../shared/IconButton';
import useExpenses from '../../hooks/useExpenses';
import ExpenseForm from './ExpenseForm';
import ErrorOverlay from '../shared/ErrorOverlay';

const EditExpense = ({ id }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const { goBack } = useNavigation();
  const { removeExpense, expenses, updateExpense } = useExpenses();

  const expense = useMemo(() => expenses.find((exp) => exp.id === id), [expenses, id]);

  const handleDelete = useCallback(() => {
    setIsDeleting(true);
    removeExpense(id)
      .then(() => {
        goBack();
      })
      .catch(() => {
        setError("Couldn't delete your expense!");
      })
      .finally(() => {
        setIsDeleting(false);
      });
  }, [id, goBack, removeExpense]);

  const handleCancel = useCallback(() => goBack(), [goBack]);

  const handleEdit = useCallback(
    (data) => {
      setIsSubmitting(true);
      updateExpense(id, data)
        .then(() => {
          goBack();
        })
        .catch(() => {
          setError("Couldn't edit your expense!");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    },
    [id, goBack, updateExpense],
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
        defaultValues={expense}
        onSubmit={handleEdit}
        onCancel={handleCancel}
        submitLabel="Update"
      />
      <View style={styles.deleteContainer}>
        <IconButton
          loading={isDeleting}
          disabled={isSubmitting}
          name="trash"
          color={COLORS.error500}
          size={36}
          onPress={handleDelete}
        />
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
