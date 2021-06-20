import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={IonIcons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primary}
    />
  );
};

export default CustomHeaderButton;