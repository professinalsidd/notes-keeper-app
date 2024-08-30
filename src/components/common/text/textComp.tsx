import {StyleProp, StyleSheet, Text, TextStyle, Dimensions} from 'react-native';
import React, {ReactNode} from 'react';
import {responsiveSize} from '@/utils/utils';
import {COLORS, FontFamily} from '@/themes/variables';

type CTextType = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  type?: string;
  onPress?: any;
};

export function CText({children, style, type, onPress}: CTextType) {
  return (
    <Text
      onPress={onPress}
      style={[
        style,
        type === 'exLarge'
          ? styles.exLarge
          : type === 'lg'
          ? styles.large
          : type === 'md'
          ? styles.medium
          : type === 'sm'
          ? styles.small
          : type === 'tiny'
          ? styles.tiny
          : style,
      ]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  exLarge: {
    fontSize: responsiveSize(10),
    fontFamily: FontFamily.FredokaCondensedBold,
    color: COLORS.BLUE,
  },
  large: {
    fontSize: responsiveSize(10),
    fontFamily: FontFamily.FredokaCondensedMedium,
    color: COLORS.BLACK,
  },
  medium: {
    fontSize: responsiveSize(8),
    fontFamily: FontFamily.FredokaCondensedBold,
    color: COLORS.BLACK,
  },
  small: {
    fontSize: responsiveSize(5),
    color: COLORS.BLACK,
    fontFamily: FontFamily.FredokaCondensedMedium,
  },
  tiny: {
    fontSize: responsiveSize(4),
    color: COLORS.BLACK,
    fontFamily: FontFamily.FMedium,
  },
});
