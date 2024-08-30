import React from 'react';
import {View, Linking, Alert, TouchableOpacity} from 'react-native';
import * as THEME from '@/themes/variables';
import {useCustomNavigation} from '@/utils/utils';
import VectorIcons from '@/themes/vectorIcons';
import {WrapperComp} from '@/components/common/wrapper/wrapper';
import {CText} from '@/components/common/text/textComp';
import {ButtonComp} from '@/components/common/button/button';

export const ContactScreen = () => {
  const navigate = useCustomNavigation();
  const handleContactPress = () => {
    const email = 'mailto:siddharth@trioford.com';
    Linking.canOpenURL(email)
      .then(supported => {
        if (supported) {
          Linking.openURL(email);
        } else {
          Alert.alert('Contact us', 'siddharth@trioford.com');
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  return (
    <WrapperComp>
      <TouchableOpacity
        onPress={() => navigate.navigate('home')}
        style={[THEME.Layout.rowACenter]}>
        <VectorIcons
          type={THEME.ICONS_TYPE.MaterialCommunityIcons}
          name="keyboard-backspace"
          size={30}
          color={THEME.COLORS.BLACK}
        />
        <View style={[THEME.MARGIN_H_SMALL]}>
          <CText type="sm">Contact Us</CText>
        </View>
      </TouchableOpacity>
      <ButtonComp style={[THEME.MARGIN_V_LARGE]} onPress={handleContactPress}>
        <CText type="sm">Contact Us</CText>
      </ButtonComp>
    </WrapperComp>
  );
};
