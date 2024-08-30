import {TouchableOpacity, View, Alert, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as THEME from '@/themes/variables';
import {responsiveSize, useCustomNavigation, validateForm} from '@/utils/utils';
import VectorIcons from '@/themes/vectorIcons';
import {fetchSignUp} from '@/api/auth/authApis';
import {useDispatch} from 'react-redux';
import {setSignup} from '@/redux/auth/authSlice';
import LoadingComp from '@/components/common/loading/loading';
import {WrapperComp} from '@/components/common/wrapper/wrapper';
import {CText} from '@/components/common/text/textComp';
import {InputComp} from '@/components/common/input/input';
import {ButtonComp} from '@/components/common/button/button';

export function SignUp() {
  const dispatch = useDispatch();
  const navigate = useCustomNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [fieldsTouched, setFieldsTouched] = useState({
    fullName: false,
    email: false,
    userName: false,
    password: false,
    confirmPassword: false,
  });

  useEffect(() => {
    const validationErrors = validateForm(
      fullName,
      email,
      userName,
      password,
      confirmPassword,
    );
    setErrors(validationErrors);
    setIsFormValid(validationErrors.length === 0);
  }, [fullName, email, userName, password, confirmPassword]);

  const toggleHandle = () => {
    setShowPassword(!showPassword);
  };

  const confirmPasswordToggleHandler = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = async () => {
    setLoading(true);
    const validationErrors = validateForm(
      fullName,
      email,
      userName,
      password,
      confirmPassword,
    );

    if (validationErrors.length > 0) {
      Alert.alert('Error', validationErrors.join('\n'));
      return;
    }

    const userData = {
      fullName,
      userName,
      email,
      password,
      confirmPassword,
    };

    try {
      const data = await fetchSignUp(userData);
      setLoading(false);
      dispatch(setSignup(data));
      Alert.alert('Success', 'Signup successful');
      navigate.navigate('login');
    } catch (error: any) {
      setLoading(false);
      Alert.alert(error);
    }
  };

  return (
    <WrapperComp>
      <View style={[THEME.Layout.rowJCenter]}>
        <TouchableOpacity
          onPress={() => navigate.navigate('login')}
          style={[THEME.Layout.rowACenter]}>
          <VectorIcons
            type={THEME.ICONS_TYPE.MaterialCommunityIcons}
            name="keyboard-backspace"
            size={30}
            color={THEME.COLORS.BLACK}
          />
        </TouchableOpacity>
      </View>
      <View style={[THEME.MARGIN_V_MEDIUM]}>
        <CText type="lg">Sign Up</CText>
      </View>
      <View>
        <InputComp
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
          props={{
            onFocus: () =>
              setFieldsTouched(prev => ({...prev, fullName: true})),
          }}
          error={
            fieldsTouched.fullName &&
            errors.includes('Please enter a full name')
              ? 'Please enter a full name'
              : undefined
          }
        />
      </View>
      <View style={[THEME.MARGIN_V_MEDIUM]}>
        <InputComp
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          props={{
            onFocus: () => setFieldsTouched(prev => ({...prev, email: true})),
          }}
          error={
            fieldsTouched.email &&
            errors.includes('Please enter a valid email address')
              ? 'Please enter a valid email address'
              : undefined
          }
        />
      </View>
      <View>
        <InputComp
          placeholder="Enter your username"
          value={userName}
          onChangeText={setUserName}
          props={{
            onFocus: () =>
              setFieldsTouched(prev => ({...prev, userName: true})),
          }}
          error={
            fieldsTouched.userName &&
            (errors.includes('Please enter a username') ||
              errors.includes('Username must start with a letter'))
              ? 'Username must start with a letter'
              : undefined
          }
        />
      </View>
      <View style={[THEME.MARGIN_V_MEDIUM]}>
        <InputComp
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          props={{
            secureTextEntry: !showPassword,
            onFocus: () =>
              setFieldsTouched(prev => ({...prev, password: true})),
          }}
          icon={{
            type: 'MaterialCommunityIcons',
            name: !showPassword ? 'eye-off' : 'eye',
            size: 20,
            onPress: toggleHandle,
            style: {
              position: 'absolute',
              right: responsiveSize(5),
              top: responsiveSize(3),
            },
          }}
        />
      </View>
      <View>
        <InputComp
          placeholder="Enter your confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          props={{
            secureTextEntry: !showConfirmPassword,
            onFocus: () =>
              setFieldsTouched(prev => ({...prev, confirmPassword: true})),
          }}
          icon={{
            type: 'MaterialCommunityIcons',
            name: !showConfirmPassword ? 'eye-off' : 'eye',
            size: 20,
            onPress: confirmPasswordToggleHandler,
            style: {
              position: 'absolute',
              right: responsiveSize(5),
              top: responsiveSize(3),
            },
          }}
          error={
            fieldsTouched.confirmPassword &&
            errors.includes('Passwords do not match')
              ? 'Passwords do not match'
              : undefined
          }
        />
      </View>
      <View style={[THEME.MARGIN_V_MEDIUM]}>
        {loading ? (
          <LoadingComp />
        ) : (
          <ButtonComp
            props={{
              disabled: !isFormValid,
            }}
            style={[styles.button, !isFormValid && styles.buttonDisabled]}
            onPress={handleSignUp}>
            <CText type="sm">Sign Up</CText>
          </ButtonComp>
        )}
      </View>
      <View style={[THEME.Layout.rowCCenter]}>
        <CText type="sm">Already have an account? Go to </CText>
        <CText
          onPress={() => navigate.navigate('login')}
          style={{
            fontSize: responsiveSize(5),
            fontFamily: THEME.FontFamily.FredokaCondensedSemiBold,
            color: THEME.COLORS.BLUE,
            textDecorationLine: 'underline',
          }}>
          Login
        </CText>
      </View>
    </WrapperComp>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.COLORS.LIGHT_PRIMARY,
  },
  buttonDisabled: {
    backgroundColor: THEME.COLORS.GREY,
  },
});
