import {
  StyleProp,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React, {ReactNode} from 'react';
import {COLORS} from '@/themes/variables';
import {responsiveSize} from '@/utils/utils';

type ButtonType = {
  onPress: () => void;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  props?: TouchableOpacityProps;
};

export function ButtonComp({children, style, onPress, props}: ButtonType) {
  return (
    <TouchableOpacity onPress={onPress} {...props} style={[styles.ctn, style]}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ctn: {
    backgroundColor: COLORS.LIGHT_PRIMARY,
    alignItems: 'center',
    padding: responsiveSize(1.5),
    borderRadius: 6,
  },
});
