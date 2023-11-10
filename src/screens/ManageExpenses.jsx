import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import EditExpense from '../components/manageExpenses/EditExpense';
import AddExpense from '../components/manageExpenses/AddExpense';

const ManageExpenses = () => {
  const { params = {} } = useRoute();
  const { setOptions } = useNavigation();

  const { expenseId, editMode } = params;

  useLayoutEffect(() => {
    setOptions({
      title: editMode ? 'Edit Expense' : 'Add Expense',
    });
  }, [setOptions, editMode]);

  return editMode ? <EditExpense id={expenseId} /> : <AddExpense />;
};

export default ManageExpenses;
