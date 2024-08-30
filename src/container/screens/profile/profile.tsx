import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as THEME from '@/themes/variables';
import VectorIcons from '@/themes/vectorIcons';
import {useCustomNavigation} from '@/utils/utils';
import {useSelector} from 'react-redux';
import {WrapperComp} from '@/components/common/wrapper/wrapper';
import {CText} from '@/components/common/text/textComp';
import {InputComp} from '@/components/common/input/input';

export function ProfileScreen() {
  const store = useSelector((state: any) => state?.auth?.login?.user);
  const navigate = useCustomNavigation();

  return (
    <WrapperComp>
      <View style={[THEME.Layout.rowACenter]}>
        <TouchableOpacity onPress={() => navigate.navigate('home')}>
          <VectorIcons
            name="keyboard-backspace"
            size={30}
            color={THEME.COLORS.BLACK}
            type={THEME.ICONS_TYPE.MaterialCommunityIcons}
          />
        </TouchableOpacity>
        <View style={[THEME.MARGIN_H_SMALL]}>
          <CText type="sm">Profile</CText>
        </View>
      </View>
      <View style={[{marginTop: 20}]}>
        <InputComp placeholder={store?.givenName} props={{readOnly: true}} />
      </View>
      {/* <View style={[THEME.MARGIN_V_MEDIUM]}>
        <InputComp placeholder={store?.userName} props={{readOnly: true}} />
      </View> */}
      <View>
        <InputComp placeholder={store?.email} props={{readOnly: true}} />
      </View>
    </WrapperComp>
  );
}
