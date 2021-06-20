import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PlaceDetailScreen = props => {
  return (
    <View>
      <Text>PlaceDetailScreen</Text>
    </View>
  );
};

export const navOptions = navData => {
  return {
    headerTitle: navData.route.params.placeTitle,
  };
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
