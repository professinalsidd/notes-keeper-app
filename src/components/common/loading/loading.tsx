import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import * as THEME from '@/themes/variables';

const LoadingComp = () => {
  return (
    <View style={[THEME.Layout.alignCenter, THEME.MARGIN_V_MEDIUM]}>
      <ActivityIndicator size="large" color={THEME.COLORS.BLUE} />
    </View>
  );
};

export default LoadingComp;
