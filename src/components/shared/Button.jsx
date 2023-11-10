import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../utils/theme';

const Button = ({ children, onPress, variant, style }) => (
  <View style={style}>
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <View style={[styles.button, variant === 'text' && styles.flat]}>
        <Text style={[styles.buttonText, variant === 'text' && styles.flatText]}>{children}</Text>
      </View>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: COLORS.primary500,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: COLORS.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: COLORS.primary100,
    borderRadius: 4,
  },
});

export default Button;
