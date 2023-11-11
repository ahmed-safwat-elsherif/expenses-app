import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../shared/Input';
import { fontSize } from '../../utils/theme';
import Button from '../shared/Button';

const initialValues = {
  amount: '',
  date: null,
  description: '',
};
const ExpenseForm = ({ defaultValues, submitLabel = 'Add', onSubmit, onCancel }) => {
  const [expense, setExpense] = useState({ ...initialValues, ...defaultValues });

  const handleChange = useCallback((name, value) => {
    setExpense((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const handleSubmit = useCallback(() => {
    onSubmit({
      ...expense,
      amount: +expense.amount,
    });
  }, [expense, onSubmit]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.formGroup}>
        <Input
          rootStyles={styles.formGroupField}
          label="Amount"
          textInputProps={{
            keyboardType: 'decimal-pad',
            onChangeText: (value) => handleChange('amount', value),
            value: String(expense.amount),
          }}
        />
        <Input
          rootStyles={styles.formGroupField}
          label="Date"
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
        textInputProps={{
          multiline: true,
          autoCorrect: false,
          onChangeText: (value) => handleChange('description', value),
          value: expense.description,
        }}
      />
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
