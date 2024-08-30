import {ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as THEME from '@/themes/variables';
import {useCustomNavigation} from '@/utils/utils';
import VectorIcons from '@/themes/vectorIcons';
import {WrapperComp} from '@/components/common/wrapper/wrapper';
import {CText} from '@/components/common/text/textComp';

export function TermsConditionScreen() {
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
            <CText type="tiny">Terms and Conditions for Notes Keeper</CText>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <CText type="tiny">
            <CText type="tiny">
              {'\n'}
              <CText type="sm">Effective Date:</CText> 8 Aug 2024
              {'\n\n'}
              <CText type="sm">1. Introduction</CText>
              {'\n'}Welcome to Notes Keeper! By using our app, you agree to
              these terms and conditions. Please read them carefully.
              {'\n\n'}
              <CText type="sm">2. Use of the App</CText>
              {'\n'}- <CText type="sm">Eligibility:</CText> You must be at least
              13 years old to use our app.
              {'\n'}- <CText type="sm">Account:</CText> You are responsible for
              maintaining the confidentiality of your account information and
              for all activities that occur under your account.
              {'\n'}- <CText type="sm">Prohibited Activities:</CText> You agree
              not to engage in any illegal or unauthorized activities when using
              our app.
              {'\n\n'}
              <CText type="sm">3. User Content</CText>
              {'\n'}- <CText type="sm">Ownership:</CText> You retain ownership
              of the content you create within our app.
              {'\n'}- <CText type="sm">License:</CText> By using our app, you
              grant us a license to use, display, and distribute your content as
              necessary to provide the service.
              {'\n'}- <CText type="sm">Responsibility:</CText> You are solely
              responsible for the content you create and share within our app.
              {'\n\n'}
              <CText type="sm">4. Intellectual Property</CText>
              {'\n'}- <CText type="sm">Our Rights:</CText> We retain all rights,
              title, and interest in and to our app and its content, including
              all intellectual property rights.
              {'\n'}- <CText type="sm">Restrictions:</CText> You may not copy,
              modify, distribute, or reverse engineer any part of our app
              without our written permission.
              {'\n\n'}
              <CText type="sm">5. Termination</CText>
              {'\n'}We may terminate or suspend your access to our app at any
              time, without prior notice or liability, for any reason, including
              if you breach these terms.
              {'\n\n'}
              <CText type="sm">6. Disclaimer of Warranties</CText>
              {'\n'}Our app is provided "as is" and "as available" without
              warranties of any kind, either express or implied.
              {'\n\n'}
              <CText type="sm">7. Limitation of Liability</CText>
              {'\n'}To the maximum extent permitted by law, we shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or in connection with your use of
              our app.
              {'\n\n'}
              <CText type="sm">8. Governing Law</CText>
              {'\n'}These terms and conditions are governed by and construed in
              accordance with the laws of [India/uttarPradesh], without regard
              to its conflict of law principles.
              {'\n\n'}
              <CText type="sm">9. Changes to These Terms</CText>
              {'\n'}We may update these terms and conditions from time to time.
              We will notify you of any changes by posting the new terms on this
              page.
              {'\n\n'}
              <CText type="sm">10. Contact Us</CText>
              {'\n'}If you have any questions about these terms and conditions,
              please contact us at [jsidd06@gmail.com].
              {'\n'}
              {'\n'}
            </CText>
          </CText>
        </View>
      </ScrollView>
    </WrapperComp>
  );
}
