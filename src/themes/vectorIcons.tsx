import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

type IconsProps = {
  type?: string;
  color?: string | '#000000';
  size?: number;
  style?: any;
  onPress?: () => void;
  name: string;
};

const VectorIcons = ({type, color, size, style, onPress, name}: IconsProps) => {
  return type === 'MaterialCommunityIcons' ? (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      onPress={onPress}
      style={style}
    />
  ) : (
    <AntDesign
      name={name}
      size={size}
      color={color}
      onPress={onPress}
      style={style}
    />
  );
};

export default VectorIcons;
