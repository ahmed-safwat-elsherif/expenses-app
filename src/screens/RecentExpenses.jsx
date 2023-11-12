import React, { useMemo } from 'react';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import useExpenses from '../hooks/useExpenses';
import subtractDays from '../utils/subtractDays';
import EmptyExpenses from '../components/expenses/EmptyExpenses';
import ErrorOverlay from '../components/shared/ErrorOverlay';

const RecentExpenses = () => {
  const { expenses, error, retry } = useExpenses();

  const recentExp = useMemo(
    () =>
      expenses.filter((exp) => {
        const date = new Date(exp.date);
        const isWeekAgo = date > subtractDays(new Date(), 7);
        return isWeekAgo;
      }),
    [expenses],
  );

  if (error) {
    return <ErrorOverlay confirmLabel="OK" message="Couldn't get expenses!" onConfirm={retry} />;
  }

  return (
    <ExpensesOutput
      expenses={recentExp}
      periodName="Last 7 days"
      ListEmptyComponent={() => <EmptyExpenses message="No expenses for the last 7 days" />}
    />
  );
};
export default RecentExpenses;
