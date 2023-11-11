import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

/**
 *
 * @param {import('react').ComponentProps<typeof import('@expo/vector-icons').Ionicons> & {onPress?:import('react-native').PressableProps['onPress']}} param0
 * @returns
 */
const IconButton = ({ onPress, ...iconProps }) => (
  <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
    <View style={styles.buttonContainer}>
      <Ionicons {...iconProps} />
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default IconButton;
