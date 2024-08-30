import {Dimensions, ScrollView, View} from 'react-native';
import React, {ReactNode} from 'react';
import * as THEME from '@/themes/variables';

type WrapperType = {
  children: ReactNode;
};

export function WrapperComp({children}: WrapperType) {
  const {width, height} = Dimensions.get('window');

  const isTablet = width >= 768;
  const isMobile = height <= 600;

  const Container = isTablet || isMobile ? ScrollView : View;

  return (
    <View style={[THEME.Layout.fill, {backgroundColor: THEME.COLORS.PRIMARY}]}>
      <Container
        showsVerticalScrollIndicator={false}
        style={[THEME.MARGIN_H_LARGE, THEME.MARGIN_V_LARGE]}>
        {children}
      </Container>
    </View>
  );
}
