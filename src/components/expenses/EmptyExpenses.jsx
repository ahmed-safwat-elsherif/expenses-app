import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, fontSize } from '../../utils/theme';

const EmptyExpenses = ({ children, message }) => (
  <View>
    <Text style={styles.message}>{children || message}</Text>
  </View>
);

const styles = StyleSheet.create({
  message: {
    fontSize: fontSize(16),
    color: COLORS.primary100,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 20,
  },
});

export default EmptyExpenses;
