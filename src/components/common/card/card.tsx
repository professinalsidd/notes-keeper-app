import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import * as THEME from '@/themes/variables';
import React from 'react';
import {responsiveSize, useCustomNavigation} from '@/utils/utils';
import {CText} from '../text/textComp';

type CardType = {
  data: any;
};

export function CardComp({data}: CardType) {
  const navigate = useCustomNavigation();

  const renderItem = (item: {
    _id: string;
    title: string;
    description: string;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate.navigate('updateContent', {data: {item}})}
        style={[THEME.PADDING_H_MEDIUM, THEME.PADDING_V_SMALL, styles.card]}>
        <View>
          <CText style={styles.label}>{item.title}</CText>
        </View>
        <CText style={styles.para}>
          {item.description.length > 80
            ? `${item.description.slice(0, 80)}...`
            : item.description.slice(0, 80)}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: THEME.COLORS.LIGHT_BLACK,
    borderRadius: 6,
    marginTop: 10,
    elevation: 2,
    backgroundColor: THEME.COLORS.LIGHT_WHITE2,
  },
  para: {
    color: THEME.COLORS.BLACK,
    fontSize: responsiveSize(4),
    fontWeight: '400',
    fontFamily: THEME.FontFamily.FRegular,
    textTransform: 'capitalize',
  },
  label: {
    color: THEME.COLORS.BLACK,
    fontSize: responsiveSize(5),
    fontWeight: '600',
    fontFamily: THEME.FontFamily.FMedium,
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
  },
});
