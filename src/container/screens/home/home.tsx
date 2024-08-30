import {
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  Text,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import * as THEME from '@/themes/variables';
import {responsiveSize, useCustomNavigation} from '@/utils/utils';
import VectorIcons from '@/themes/vectorIcons';
import {useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import LoadingComp from '@/components/common/loading/loading';
import {CardComp} from '@/components/common/card/card';
import {CText} from '@/components/common/text/textComp';
import {InputComp} from '@/components/common/input/input';
import {BottomSheetComp} from '@/components/bottomSheet/bottomSheet';

export function HomeScreen() {
  const navigate = useCustomNavigation();
  const user = useSelector((state: any) => state.auth.login?.user);
  const data = useSelector((state: any) => state?.user?.addContent);
  const [search, setSearch] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const placeholderOpacity = useRef(new Animated.Value(1)).current;
  const placeholderTranslateY = useRef(new Animated.Value(0)).current;

  const handleOpen = () => {
    setSheetOpen(true);
  };

  useEffect(() => {
    Animated.sequence([
      Animated.delay(3000),
      Animated.parallel([
        Animated.timing(placeholderOpacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(placeholderTranslateY, {
          toValue: -10,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      setShowPlaceholder(false);
    });
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      setFilteredData(data);
    } catch (error) {
      console.log('error', error);
      Alert.alert('Error', 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [data]),
  );

  useEffect(() => {
    filterData();
  }, [search, data]);

  const filterData = () => {
    const filtered = data?.filter((item: any) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  return (
    <View style={[THEME.Layout.fill, {backgroundColor: THEME.COLORS.PRIMARY}]}>
      <View
        style={[
          THEME.MARGIN_H_MEDIUM,
          {marginBottom: responsiveSize(18), marginTop: 20},
        ]}>
        <View style={[THEME.Layout.rowJCenter, styles.headerRoot]}>
          <InputComp
            value={search}
            onChangeText={setSearch}
            placeholder={showPlaceholder ? '' : 'Search'}
          />
          {showPlaceholder && (
            <Animated.View
              style={[
                styles.animatedPlaceholder,
                {
                  opacity: placeholderOpacity,
                  transform: [{translateY: placeholderTranslateY}],
                },
              ]}>
              <Text style={styles.placeholderText}>Notes Keeper</Text>
            </Animated.View>
          )}
          <TouchableOpacity
            onPress={() => handleOpen()}
            style={[THEME.Layout.alignCenter, styles.headerBox]}>
            <CText style={styles.label}>{user?.givenName?.[0]}</CText>
          </TouchableOpacity>
        </View>
        {loading ? (
          <LoadingComp />
        ) : filteredData.length > 0 ? (
          <CardComp data={filteredData} />
        ) : (
          <View style={[THEME.Layout.alignCenter, THEME.MARGIN_V_MEDIUM]}>
            <CText type="sm">No Data Available</CText>
          </View>
        )}
      </View>
      <TouchableOpacity
        onPress={() => navigate.navigate('addContent')}
        style={styles.plusCtn}>
        <View style={[THEME.Layout.alignCenter, styles.plus]}>
          <VectorIcons name="plus" color={THEME.COLORS.WHITE} size={20} />
        </View>
      </TouchableOpacity>
      <BottomSheetComp open={sheetOpen} onClose={() => setSheetOpen(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerRoot: {
    backgroundColor: THEME.COLORS.WHITE,
    borderRadius: 6,
  },
  plusCtn: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  plus: {
    backgroundColor: THEME.COLORS.BLUE,
    borderRadius: 99,
    width: 50,
    height: 50,
  },
  animatedPlaceholder: {
    position: 'absolute',
    left: 15,
    top: 18,
  },
  placeholderText: {
    color: THEME.COLORS.BLUE,
    fontSize: responsiveSize(5),
    fontFamily: THEME.FontFamily.FredokaCondensedSemiBold,
    letterSpacing: 1.2,
  },
  headerBox: {
    backgroundColor: THEME.COLORS.BLUE,
    borderRadius: 99,
    width: 40,
    height: 40,
    right: responsiveSize(5),
  },
  label: {
    color: THEME.COLORS.WHITE,
    textTransform: 'uppercase',
    fontSize: responsiveSize(3),
  },
});
