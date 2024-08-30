import {StyleSheet, View, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {COLORS, Layout} from '@/themes/variables';
import {useCustomNavigation} from '@/utils/utils';
import {CText} from '@/components/common/text/textComp';

export const SplashScreen = () => {
  const navigate = useCustomNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();

    const timeout = setTimeout(() => {
      navigate.navigate('login');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <View style={[Layout.fill, Layout.rowCCenter, styles.ctn]}>
      <Animated.View
        style={{opacity: fadeAnim, transform: [{scale: scaleAnim}]}}>
        <CText type="exLarge">Notes Keeper</CText>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  ctn: {backgroundColor: COLORS.PRIMARY},
});
