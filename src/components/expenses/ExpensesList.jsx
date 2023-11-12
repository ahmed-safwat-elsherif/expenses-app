import React from 'react';
import { FlatList, View, RefreshControl } from 'react-native';
import ExpenseItem from './ExpenseItem';

const renderItem = ({ item }) => <ExpenseItem {...item} />;

const ExpensesList = ({ loading, expenses, ListEmptyComponent, onRefresh }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      refreshControl={
        <RefreshControl tintColor="white" refreshing={loading} onRefresh={onRefresh} />
      }
      ListEmptyComponent={ListEmptyComponent}
      data={expenses}
      renderItem={renderItem}
    />
  </View>
);

export default ExpensesList;
