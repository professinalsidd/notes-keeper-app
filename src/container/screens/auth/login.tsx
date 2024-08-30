import {Alert, View, StyleSheet, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as THEME from '@/themes/variables';
import {useCustomNavigation} from '@/utils/utils';
import {useDispatch} from 'react-redux';
import LoadingComp from '@/components/common/loading/loading';
import {WrapperComp} from '@/components/common/wrapper/wrapper';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {CText} from '@/components/common/text/textComp';
import {ButtonComp} from '@/components/common/button/button';
import {setLogin} from '@/redux/auth/authSlice';

export function LoginScreen() {
  const navigate = useCustomNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '934253091339-o5662g2em8edil4sc8r0cok5i9l03ap9.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const GoogleSignUp = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const result = await GoogleSignin.signIn();
      dispatch(setLogin({token: result.idToken, user: result.user}));
      navigate.navigate('home');
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('User cancelled the login flow!');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signin in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Google play services not available or outdated!');
      } else {
        console.log(error);
      }
    }
  };

  return (
    <WrapperComp>
      <View style={[THEME.MARGIN_V_LARGE]}>
        <CText type="lg">Welcome to NotesKeeper </CText>
        <CText type="lg">Sign In</CText>
      </View>
      <View style={[THEME.MARGIN_V_LARGE]}>
        {loading ? (
          <LoadingComp />
        ) : (
          <ButtonComp
            onPress={() => navigate.navigate('home')}
            style={[styles.button]}>
            <CText type="sm">Login</CText>
          </ButtonComp>
        )}
      </View>
      <Button title="sigin" onPress={GoogleSignUp} />
    </WrapperComp>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.COLORS.LIGHT_PRIMARY,
  },
});
