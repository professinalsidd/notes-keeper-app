import {ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as THEME from '@/themes/variables';
import {useCustomNavigation} from '@/utils/utils';
import VectorIcons from '@/themes/vectorIcons';
import {WrapperComp} from '@/components/common/wrapper/wrapper';
import {CText} from '@/components/common/text/textComp';

export function PrivacyPolicyScreen() {
  const navigate = useCustomNavigation();

  return (
    <WrapperComp>
      <View style={[THEME.Layout.rowJCenter]}>
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
            <CText type="sm">Privacy Policy for Notes Keeper</CText>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[THEME.MARGIN_H_LARGE]}>
          <CText type="tiny">
            <CText type="tiny">
              {'\n'}
              <CText type="sm">Effective Date:</CText> 08 Aug 2024
              {'\n\n'}
              <CText type="sm">1. Introduction</CText>
              {'\n'}Welcome to Notes Keeper! We are committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our
              application.
              {'\n\n'}
              <CText type="sm">2. Information We Collect</CText>
              {'\n'}- <CText type="sm">Personal Data:</CText> We collect
              personal information that you provide to us, such as your full
              name, username, email address, and contact information.
              {'\n'}- <CText type="sm">Usage Data:</CText> We collect
              information about your interactions with the app, such as the
              features you use, the pages you visit, and other actions within
              the app.
              {'\n'}- <CText type="sm">Device Information:</CText> We collect
              information about the device you use to access our app, including
              the hardware model, operating system, and device identifiers.
              {'\n\n'}
              <CText type="sm">3. How We Use Your Information</CText>
              {'\n'}We use the information we collect for various purposes,
              including:
              {'\n'}- Providing and maintaining our service
              {'\n'}- Improving, personalizing, and expanding our service
              {'\n'}- Communicating with you, including customer support
              {'\n'}- Sending you updates and promotional materials
              {'\n'}- Monitoring and analyzing usage and trends
              {'\n\n'}
              <CText type="sm">4. Sharing Your Information</CText>
              {'\n'}We may share your information with:
              {'\n'}- <CText type="sm">Service Providers:</CText> Third-party
              vendors who perform services on our behalf, such as hosting and
              analytics.
              {'\n'}- <CText type="sm">Legal Requirements:</CText> When required
              by law or to protect our rights and interests.
              {'\n\n'}
              <CText type="sm">5. Data Security</CText>
              {'\n'}We implement appropriate technical and organizational
              measures to protect your information. However, no security system
              is impenetrable, and we cannot guarantee the security of your
              data.
              {'\n\n'}
              <CText type="sm">6. Your Data Rights</CText>
              {'\n'}Depending on your location, you may have the following
              rights regarding your personal data:
              {'\n'}- Access to your data
              {'\n'}- Correction of inaccurate data
              {'\n'}- Deletion of your data
              {'\n'}- Restriction of processing
              {'\n'}- Data portability
              {'\n\n'}
              <CText type="sm">7. Contact Us</CText>
              {'\n'}If you have any questions or concerns about this Privacy
              Policy, please contact us at [jsidd06@gmai.com].
              {'\n\n'}
              <CText type="sm">8. Changes to This Policy</CText>
              {'\n'}We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page.
              {'\n'}
              {'\n'}
            </CText>
          </CText>
        </View>
      </ScrollView>
    </WrapperComp>
  );
}
