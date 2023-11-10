import React, { useCallback } from 'react';
import IconButton from '../shared/IconButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../routes';

const AddExpenseButton = ({ tintColor }) => {
  const { navigate } = useNavigation();

  const handleOnPress = useCallback(() => navigate(ROUTES.MANAGE_EXPENSES), [navigate]);

  return <IconButton name="add" size={24} color={tintColor} onPress={handleOnPress} />;
};

export default AddExpenseButton;
