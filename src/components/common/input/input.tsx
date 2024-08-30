import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FontFamily} from '@/themes/variables';
import {responsiveSize} from '@/utils/utils';
import VectorIcons from '@/themes/vectorIcons';

type InputProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
  icon?: {
    type: string;
    name: string;
    size: number;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
  };
  props?: TextInputProps;
  multiLine?: boolean;
  autoFocus?: boolean;
  error?: string;
};

export function InputComp({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
  icon,
  props,
  multiLine,
  autoFocus,
  error,
}: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.BLACK}
        style={[styles.inputStyle, style]}
        // maxLength={multiLine ? undefined : 50}
        onChangeText={(text: string) => onChangeText?.(text)}
        value={value}
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}
        multiline={multiLine}
        {...props}
      />
      {icon && (
        <VectorIcons
          type={icon.type}
          name={icon.name}
          size={icon.size}
          onPress={icon.onPress}
          style={[icon.style]}
          color={COLORS.BLACK}
        />
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: responsiveSize(2),
  },
  inputStyle: {
    backgroundColor: COLORS.WHITE,
    fontSize: responsiveSize(5),
    color: COLORS.BLACK,
    borderRadius: 6,
    paddingHorizontal: responsiveSize(2),
    fontFamily: FontFamily.FredokaCondensedMedium,
  },
  errorText: {
    color: COLORS.RED,
    fontSize: responsiveSize(5),
    marginTop: 5,
    fontFamily: FontFamily.FredokaCondensedRegular,
  },
});
