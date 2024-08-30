import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {WrapperComp} from '@/components/common/wrapper/wrapper';
import * as THEME from '@/themes/variables';
import VectorIcons from '@/themes/vectorIcons';
import {CText} from '@/components/common/text/textComp';
import {useCustomNavigation} from '@/utils/utils';
import {ButtonComp} from '@/components/common/button/button';

const BackUp = () => {
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
          <CText type="sm">Back-up</CText>
        </View>
      </View>
      <View style={[THEME.MARGIN_V_LARGE]}>
        <View>
          <CText type="sm">Backup settings</CText>
          <View style={[THEME.MARGIN_V_LARGE]}>
            <CText type="tiny">
              Back up your notes data to your google account's storage. you can
              restore them on a new phone after you download Notes keeper on it.
            </CText>
          </View>
          <CText type="sm">Last BackUp: 02:08pm</CText>
          <CText type="sm">Size: 1.2 GB</CText>
          <View style={[THEME.MARGIN_V_LARGE]}>
            <ButtonComp
              onPress={() => {}}
              style={{backgroundColor: THEME.COLORS.LIGHT_WHITE2}}>
              <CText type="sm">Back up</CText>
            </ButtonComp>
          </View>
          <View>
            <CText type="sm">Manage Google Storage</CText>
            <View style={[THEME.MARGIN_V_LARGE]}>
              <CText type="sm">Select Google Account</CText>
              <CText type="sm">example@gmail.com</CText>
            </View>
          </View>
        </View>
      </View>
    </WrapperComp>
  );
};

export default BackUp;
