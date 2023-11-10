import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../shared/Button';
import { COLORS } from '../../utils/theme';
import { StyleSheet } from 'react-native';

const AddExpense = () => {
  const { goBack } = useNavigation();
  const handleCancel = useCallback(() => goBack(), [goBack]);
  const handleAdd = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button variant="text" style={styles.button} onPress={handleCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleAdd}>
          Add
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

export default AddExpense;
