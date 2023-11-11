import React, { createContext, useCallback, useMemo, useState } from 'react';
import { EXPENSES } from '../utils/dummyData';
import createRandomId from '../utils/createRandomId';

export const ExpensesContext = createContext({
  expenses: EXPENSES,
  // eslint-disable-next-line no-unused-vars
  addExpense: ({ date, amount, description }) => {},
  // eslint-disable-next-line no-unused-vars
  removeExpense: (id) => {},
  // eslint-disable-next-line no-unused-vars
  updateExpense: (id, { date, amount, description }) => {},
});

const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(EXPENSES);

  const addExpense = useCallback(({ date, amount, description }) => {
    const newExp = { date, amount, description, id: createRandomId() };
    setExpenses((prevExp) => [...prevExp, newExp]);
  }, []);

  const removeExpense = useCallback((id) => {
    setExpenses((prevExp) => prevExp.filter((exp) => exp.id !== id));
  }, []);

  const updateExpense = useCallback((id, { date, amount, description }) => {
    setExpenses((prevExp) =>
      prevExp.map((exp) =>
        exp.id === id
          ? {
              ...exp,
              date: date && exp.date,
              amount: amount && exp.amount,
              description: description && exp.description,
            }
          : exp,
      ),
    );
  }, []);

  const contextValues = useMemo(
    () => ({
      expenses,
      addExpense,
      removeExpense,
      updateExpense,
    }),
    [expenses, addExpense, removeExpense, updateExpense],
  );

  return <ExpensesContext.Provider value={contextValues}>{children}</ExpensesContext.Provider>;
};

export default ExpensesProvider;
