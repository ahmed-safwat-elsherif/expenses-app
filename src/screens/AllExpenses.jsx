import React from 'react';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import useExpenses from '../hooks/useExpenses';
import EmptyExpenses from '../components/expenses/EmptyExpenses';

const AllExpenses = () => {
  const { expenses } = useExpenses();
  return (
    <ExpensesOutput
      expenses={expenses}
      periodName="Total"
      ListEmptyComponent={() => <EmptyExpenses message="No expenses were added" />}
    />
  );
};

export default AllExpenses;
