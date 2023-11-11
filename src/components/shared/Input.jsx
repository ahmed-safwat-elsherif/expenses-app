import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS, fontSize } from '../../utils/theme';

/**
 *
 * @param {{label:string,rootStyles:import('react-native').StyleProp<import('react-native').ViewStyle>, textInputProps:import('react-native').TextInputProps}} param0
 * @returns
 */
const Input = ({ label, rootStyles, textInputProps = {} }) => (
  <View style={rootStyles}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      {...textInputProps}
      style={[
        styles.input,
        textInputProps?.multiline && styles.inputMultiline,
        textInputProps?.style,
      ]}
    />
  </View>
);

const styles = StyleSheet.create({
  label: {
    fontSize: fontSize(12),
    color: COLORS.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: COLORS.primary100,
    color: COLORS.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: fontSize(18),
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});

export default Input;
