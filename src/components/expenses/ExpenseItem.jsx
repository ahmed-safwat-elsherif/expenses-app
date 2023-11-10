import React, { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../utils/theme';
import formatDate from '../../utils/formatDate';

const ExpenseItem = ({ description, amount, date }) => {
  const formattedDate = useMemo(() => formatDate(new Date(date)), [date]);
  const { navigate } = useNavigation();

  return (
    <Pressable
      onPress={() => navigate('ManageExpenses')}
      android_ripple={{ color: COLORS.primary700 }}
      style={({ pressed }) => pressed && styles.pressable}>
      <View style={styles.expenseItem}>
        <View style={styles.itemInfo}>
          <Text style={[styles.textBase, styles.description]}>{description}</Text>
          <Text style={[styles.textBase, { textAlign: 'right' }]}>{formattedDate}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    opacity: 0.5,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: COLORS.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: COLORS.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  itemInfo: { flex: 1, paddingRight: 10 },
  textBase: {
    color: COLORS.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  amount: {
    color: COLORS.primary500,
    fontWeight: 'bold',
  },
});

export default ExpenseItem;
