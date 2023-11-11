import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../shared/Input';
import { COLORS, fontSize } from '../../utils/theme';
import Button from '../shared/Button';

const initialValues = {
  amount: '',
  date: '',
  description: '',
};

const validate = (expense) => {
  const errors = {};

  const inValidAmount = isNaN(expense.amount) || expense.amount <= 0;
  const inValidDate = new Date(expense.date).toString() === 'Invalid Date';
  const inValidDesc = expense.description.trim().length === 0;

  if (inValidAmount) errors.amount = 'Invalid amount';
  if (inValidDate) errors.date = 'Invalid amount';
  if (inValidDesc) errors.description = 'Invalid description';

  return {
    errors,
    invalid: inValidAmount || inValidDate || inValidDesc,
  };
};

const ExpenseForm = ({ defaultValues, submitLabel = 'Add', onSubmit, onCancel }) => {
  const [expense, setExpense] = useState({ ...initialValues, ...defaultValues });
  const [formState, setFormState] = useState({ errors: {}, isSubmitted: false, invalid: false });

  const isFormValid = useMemo(() => {
    const { isSubmitted, invalid } = formState;
    if (!isSubmitted) return true;
    return !invalid;
  }, [formState]);

  const handleChange = useCallback((name, value) => {
    setExpense((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const handleSubmit = useCallback(() => {
    const data = {
      ...expense,
      amount: +expense.amount,
    };
    const { errors, invalid } = validate(data);
    setFormState({ errors, isSubmitted: true, invalid });
    if (invalid) return;
    onSubmit(data);
  }, [expense, onSubmit]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.formGroup}>
        <Input
          rootStyles={styles.formGroupField}
          label="Amount"
          error={formState.errors.amount}
          textInputProps={{
            keyboardType: 'decimal-pad',
            onChangeText: (value) => handleChange('amount', value),
            value: String(expense.amount),
          }}
        />
        <Input
          rootStyles={styles.formGroupField}
          label="Date"
          error={formState.errors.date}
          textInputProps={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: (value) => handleChange('date', value),
            value: expense.date,
          }}
        />
      </View>
      <Input
        label="Description"
        error={formState.errors.description}
        textInputProps={{
          multiline: true,
          autoCorrect: false,
          onChangeText: (value) => handleChange('description', value),
          value: expense.description,
        }}
      />
      {!isFormValid && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Please check your entered values</Text>
        </View>
      )}
      <View style={styles.buttons}>
        <Button variant="text" style={styles.button} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleSubmit}>
          {submitLabel}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    gap: 8,
    marginBottom: 16,
    marginHorizontal: 4,
  },
  title: {
    fontSize: fontSize(25),
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  formGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  formGroupField: {
    flex: 1,
  },
  errorContainer: {
    padding: 6,
    borderRadius: 6,
    backgroundColor: COLORS.error500,
  },
  errorText: {
    color: COLORS.primary50,
    fontSize: fontSize(14),
  },
  buttons: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

export default ExpenseForm;
