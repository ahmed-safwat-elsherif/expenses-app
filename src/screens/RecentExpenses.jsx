import React from 'react';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { EXPENSES } from '../utils/dummyData';

const RecentExpenses = () => <ExpensesOutput expenses={EXPENSES} periodName="Last 7 days" />;
export default RecentExpenses;
