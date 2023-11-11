import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StackNavigation from './src/providers/StackNavigation';
import ExpensesProvider from './src/providers/ExpensesProvider';

const App = () => (
  <View style={styles.container}>
    <StatusBar style="light" />
    <ExpensesProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </ExpensesProvider>
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
