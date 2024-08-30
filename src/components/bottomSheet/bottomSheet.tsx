import React, {useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated,
  Easing,
} from 'react-native';
import {CText} from '../common/text/textComp';
import * as THEME from '@/themes/variables';
import VectorIcons from '@/themes/vectorIcons';
import {responsiveSize} from '@/utils/utils';
import {bottomSheetData} from '@/db';
import {useSelector, useDispatch} from 'react-redux';
import {setLogout} from '@/redux/auth/authSlice';
import {CommonActions, useNavigation} from '@react-navigation/native';

export const BottomSheetComp = ({open, onClose}: any) => {
  const store = useSelector((state: any) => state?.auth?.login);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (open) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        if (onClose) onClose();
      });
    }
  }, [open, slideAnim, onClose]);

  const handleLogout = () => {
    dispatch(setLogout());

    // Reset the navigation stack and navigate to the login screen
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'login'}],
        }),
      );
    }, 100);
  };

  const confirmDelete = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this account? You will lose your data permanently?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: deleteHandleSubmit,
        },
      ],
      {cancelable: false},
    );
  };

  const deleteHandleSubmit = async () => {};

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  return (
    <>
      {open && (
        <TouchableOpacity
          style={[styles.overlay]}
          activeOpacity={1}
          onPress={onClose}>
          <Animated.View
            style={[
              styles.contentContainer,
              {
                transform: [{translateY}],
              },
            ]}>
            {bottomSheetData?.map((item: any, i) => (
              <TouchableOpacity
                key={i}
                onPress={
                  item?.link === 'logout'
                    ? handleLogout
                    : item?.link === 'delete'
                    ? confirmDelete
                    : () => navigation.navigate(item?.link as never)
                }>
                <View
                  style={[
                    THEME.Layout.columnCenter,
                    {padding: responsiveSize(2)},
                  ]}>
                  <VectorIcons
                    name={item?.iconName}
                    size={responsiveSize(5)}
                    color={THEME.COLORS.BLUE}
                    type={THEME.ICONS_TYPE.MaterialCommunityIcons}
                  />
                  <CText type="tiny" style={[THEME.PADDING_H_MEDIUM]}>
                    {item?.name}
                  </CText>
                </View>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    backgroundColor: THEME.COLORS.WHITE,
    padding: responsiveSize(2),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
