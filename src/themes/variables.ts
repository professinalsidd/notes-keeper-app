import {responsiveSize} from '@/utils/utils';

export const Layout = {
  alignCenter: {
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
  },
  rowJCenter: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between' as 'space-between',
    alignItems: 'center' as 'center',
  },
  rowARCenter: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-around' as 'space-around',
    alignItems: 'center' as 'center',
  },
  justifyCContent: {
    justifyContent: 'center' as 'center',
  },
  row: {
    flexDirection: 'row' as 'row',
  },
  justifySBContent: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between' as 'space-between',
  },
  fill: {
    flex: 1,
  },
  fillB: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  positionA: {position: 'absolute' as 'absolute'},
  positionR: {position: 'relative' as 'relative'},
  rowACenter: {
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
  },
  rowCCenter: {
    flexDirection: 'row' as 'row',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
  },
  columnSFlexStart: {
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between' as 'space-between',
    alignItems: 'flex-start' as 'flex-start',
  },
  column: {
    flexDirection: 'column' as 'column',
  },
  flexAStart: {
    justifyContent: 'flex-start' as 'flex-start',
    alignItems: 'flex-start' as 'flex-start',
  },
  flexAEnd: {
    justifyContent: 'flex-end' as 'flex-end',
    alignItems: 'flex-end' as 'flex-end',
  },
  rowFlexEnd: {
    flexDirection: 'row' as 'row',
    justifyContent: 'flex-end' as 'flex-end',
    alignItems: 'flex-end' as 'flex-end',
  },
  rowFlexStart: {
    flexDirection: 'row' as 'row',
    justifyContent: 'flex-start' as 'flex-start',
    alignItems: 'flex-start' as 'flex-start',
  },
  flexStart: {
    justifyContent: 'flex-start' as 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end' as 'flex-end',
  },
  textCenter: {
    textAlign: 'center' as 'center',
  },
  rowSpaceEvenly: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-evenly' as 'space-evenly',
    alignItems: 'center' as 'center',
  },
  columnCenter: {
    flexDirection: 'column' as 'column',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
  },
  wrapB: {
    flexWrap: 'wrap' as 'wrap',
    flexDirection: 'row' as 'row',
    display: 'flex' as 'flex',
    justifyContent: 'space-between' as 'space-between',
  },
  flexEndA: {
    alignItems: 'flex-end' as 'flex-end',
  },
};

export const FontFamily = {
  FBlack: 'Poppins-Black',
  FBlackItalic: 'Poppins-BlackItalic',
  FBold: 'Poppins-Bold',
  FBoldItalic: 'Poppins-BoldItalic',
  FExtraBold: 'Poppins-ExtraBold',
  FItalic: 'Poppins-Italic',
  FLight: 'Poppins-Light',
  FMedium: 'Poppins-Medium',
  FMediumItalic: 'Poppins-MediumItalic',
  FRegular: 'Poppins-Regular',
  FSemiBold: 'Poppins-SemiBold',
  FGreatVibesRegular: 'GreatVibes-Regular',
  FSatisfyRegular: 'Satisfy-Regular',
  FPacificoRegular: 'Pacifico-Regular',
  FredokaCondensedBold: 'Fredoka_Condensed-Bold',
  FredokaCondensedLight: 'Fredoka_Condensed-Light',
  FredokaCondensedMedium: 'Fredoka_Condensed-Medium',
  FredokaCondensedRegular: 'Fredoka_Condensed-Regular',
  FredokaCondensedSemiBold: 'Fredoka_Condensed-SemiBold',
};

export const COLORS = {
  PRIMARY: '#FFEEAD',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GREY: '#CCCCCC',
  LIGHT_GREY: '#707B81',
  LIGHT_PRIMARY: '#FEFAE0',
  CREAM: '#F0ECF3',
  BLUE: '#179BAE',
  LIGHT_BLACK: '#707B81',
  LIGHT_BLUE: '#5B9EE1',
  LIGHT_WHITE: '#F2F2F2',
  LIGHT_WHITE2: '#F8F9FA',
  RED: '#C80036',
  DARK_BLUE: '#2D3B48',
};

export const ICONS_NAME = {
  filterVariant: 'filter',
  storefront: 'storefront',
  plus: 'plus',
  heart: 'heart',
  hearto: 'hearto',
  arrowRight: 'arrowright',
  arrowLeft: 'arrowleft',
  star: 'star',
  minus: 'minus',
  bell: 'bell',
  cart: 'cart',
  home: 'home',
  user: 'user',
  right: 'right',
  google: 'google',
  facebook: 'facebook',
  apple1: 'apple',
  delete: 'delete-forever',
  cross: 'closecircle',
  cartArrowDown: 'cart-arrow-down',
  eye: 'eye-outline',
  eyeOff: 'eye-off-outline',
  storefrontOutline: 'storefront-outline',
  dotsGrid: 'dots-grid',
  heartOutline: 'heart-outline',
  mapMarker: 'map-marker',
  magnify: 'magnify',
  homeOutline: 'home-outline',
  bellOutline: 'bell-outline',
  accountOutline: 'account-outline',
  account: 'account',
  mail: 'mail',
  phone: 'phone',
  edit: 'edit',
  down: 'menu-down',
  up: 'menu-up',
  logout: 'logout',
  camera: 'camerao',
};

export const ICONS_TYPE = {
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  AntDesign: 'AntDesign',
};

export const MARGIN_H_SMALL = {
  marginHorizontal: responsiveSize(1),
};
export const MARGIN_H_MEDIUM = {
  marginHorizontal: responsiveSize(2),
};
export const MARGIN_H_LARGE = {
  marginHorizontal: responsiveSize(3),
};
export const PADDING_H_SMALL = {
  paddingHorizontal: responsiveSize(1),
};
export const PADDING_H_MEDIUM = {
  paddingHorizontal: responsiveSize(2),
};
export const PADDING_H_LARGE = {
  paddingHorizontal: responsiveSize(3),
};

export const MARGIN_V_TINY = {
  marginVertical: responsiveSize(0.5),
};
export const MARGIN_V_SMALL = {
  marginVertical: responsiveSize(1),
};
export const MARGIN_V_MEDIUM = {
  marginVertical: responsiveSize(2),
};
export const MARGIN_V_LARGE = {
  marginVertical: responsiveSize(3),
};
export const PADDING_V_SMALL = {
  paddingVertical: responsiveSize(1),
};
export const PADDING_V_MEDIUM = {
  paddingVertical: responsiveSize(2),
};
export const PADDING_V_LARGE = {
  paddingVertical: responsiveSize(3),
};
