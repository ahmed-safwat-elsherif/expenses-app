import React from 'react';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import useExpenses from '../hooks/useExpenses';
import EmptyExpenses from '../components/expenses/EmptyExpenses';
import ErrorOverlay from '../components/shared/ErrorOverlay';

const AllExpenses = () => {
  const { expenses, error, retry } = useExpenses();

  if (error) {
    return <ErrorOverlay confirmLabel="OK" message="Couldn't get expenses!" onConfirm={retry} />;
  }

  return (
    <ExpensesOutput
      expenses={expenses}
      periodName="Total"
      ListEmptyComponent={() => <EmptyExpenses message="No expenses were added" />}
    />
  );
};

export default AllExpenses;
