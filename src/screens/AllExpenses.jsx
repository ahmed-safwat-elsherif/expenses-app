import React from 'react';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { EXPENSES } from '../utils/dummyData';

const AllExpenses = () => <ExpensesOutput expenses={EXPENSES} periodName="Total" />;

export default AllExpenses;
