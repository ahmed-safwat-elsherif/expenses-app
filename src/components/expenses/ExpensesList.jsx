import React from 'react';
import { FlatList, View } from 'react-native';
import ExpenseItem from './ExpenseItem';

const renderItem = ({ item }) => <ExpenseItem {...item} />;

const ExpensesList = ({ expenses }) => (
  <View style={{ flex: 1 }}>
    <FlatList data={expenses} renderItem={renderItem} />
  </View>
);

export default ExpensesList;
