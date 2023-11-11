import axios from './axios';
import * as Endpoints from './endpoints';

export const createExpense = (expense) => axios.post(Endpoints.EXPENSES, expense);
export const getExpenses = (expense) => axios.get(Endpoints.EXPENSES, expense);
export const patchExpense = (id, updates) => axios.patch(`/expenses/${id}.json`, updates);
export const deleteExpense = (id) => axios.delete(`/expenses/${id}.json`);
