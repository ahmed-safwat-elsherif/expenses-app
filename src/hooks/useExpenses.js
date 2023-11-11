import { useContext } from 'react';
import { ExpensesContext } from '../providers/ExpensesProvider';

export default () => useContext(ExpensesContext);
