import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../utils/theme';
import IconButton from '../shared/IconButton';
import Button from '../shared/Button';

const EditExpense = ({ id }) => {
  const { goBack } = useNavigation();
  const handleDelete = useCallback(() => {
    goBack();
  }, [id, goBack]);
  const handleCancel = useCallback(() => goBack(), [goBack]);
  const handleEdit = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button variant="text" style={styles.button} onPress={handleCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleEdit}>
          Update
        </Button>
      </View>
      <View style={styles.deleteContainer}>
        <IconButton name="trash" color={COLORS.error500} size={36} onPress={handleDelete} />
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 2,
    borderTopColor: COLORS.primary200,
    alignItems: 'center',
  },
});

export default EditExpense;
