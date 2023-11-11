import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { EXPENSES } from '../utils/dummyData';
import { createExpense, deleteExpense, getExpenses, patchExpense } from '../api/expenses';

export const ExpensesContext = createContext({
  expenses: EXPENSES,
  error: null,
  loading: false,
  // eslint-disable-next-line no-unused-vars
  addExpense: ({ date, amount, description }) => Promise.resolve({ name: '' }),
  // eslint-disable-next-line no-unused-vars
  removeExpense: (id) => Promise.resolve(),
  // eslint-disable-next-line no-unused-vars
  updateExpense: (id, { date, amount, description }) => Promise.resolve(),
});

const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(EXPENSES);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addExpense = useCallback(
    ({ date, amount, description }) =>
      createExpense({ date, amount, description }).then((res) => {
        const newExp = {
          id: res.data.name,
          date,
          amount,
          description,
        };
        setExpenses((prevExp) => [newExp, ...prevExp]);
        return res;
      }),
    [],
  );

  const removeExpense = useCallback(
    (id) =>
      deleteExpense(id).then(() => {
        setExpenses((prevExp) => prevExp.filter((exp) => exp.id !== id));
      }),
    [],
  );

  const updateExpense = useCallback(
    (id, updates) =>
      patchExpense(id, updates).then(() => {
        setExpenses((prevExp) =>
          prevExp.map((exp) => (exp.id === id ? { ...exp, ...updates } : exp)),
        );
      }),
    [],
  );

  useEffect(() => {
    setLoading(true),
      getExpenses()
        .then(({ data }) => {
          const allExpenses = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
          setExpenses(allExpenses.reverse());
        })
        .catch(setError)
        .finally(() => {
          setLoading(true);
        });
  }, []);

  const contextValues = useMemo(
    () => ({
      expenses,
      loading,
      error,
      addExpense,
      removeExpense,
      updateExpense,
    }),
    [expenses, addExpense, removeExpense, updateExpense, loading, error],
  );

  return <ExpensesContext.Provider value={contextValues}>{children}</ExpensesContext.Provider>;
};

export default ExpensesProvider;
