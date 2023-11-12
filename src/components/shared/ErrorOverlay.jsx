import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../utils/theme';
import Button from './Button';

const ErrorOverlay = ({ message, onConfirm, confirmLabel }) => (
  <View style={styles.container}>
    <Text style={[styles.text, styles.title]}>An error occurred!</Text>
    <Text style={styles.text}>{message}</Text>
    <Button onPress={onConfirm}>{confirmLabel}</Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: COLORS.primary700,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ErrorOverlay;
