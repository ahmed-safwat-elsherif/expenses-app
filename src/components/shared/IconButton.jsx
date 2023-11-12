import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 *
 * @param {import('react').ComponentProps<typeof import('@expo/vector-icons').Ionicons> & {onPress?:import('react-native').PressableProps['onPress'],loading:boolean, disabled:boolean}} param0
 * @returns
 */
const IconButton = ({ loading, disabled, onPress, ...iconProps }) => (
  <Pressable
    disabled={loading || disabled}
    onPress={onPress}
    style={({ pressed }) => pressed && styles.pressed}>
    <View style={styles.buttonContainer}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="white" />
        </View>
      ) : (
        <Ionicons {...iconProps} />
      )}
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
  loadingContainer: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButton;
