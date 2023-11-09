import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StackNavigation from './src/providers/StackNavigation';

const App = () => (
  <View style={styles.container}>
    <StatusBar style="light" />
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
