import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Text } from 'react-native';

const ManageExpenses = () => {
  const { params = {} } = useRoute();
  const { setOptions } = useNavigation();

  const { expenseId, editMode } = params;

  useLayoutEffect(() => {
    setOptions({
      title: editMode ? 'Edit Expense' : 'Add Expense',
    });
  }, [setOptions, editMode]);

  return <Text>ManageExpenses {expenseId}</Text>;
};

export default ManageExpenses;
