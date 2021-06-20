import React from 'react';
import { Platform } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import PlacesListScreen, {navOptions as placesScreenNavOptions} from '../screens/PlacesListScreen';
import PlaceDetailScreen, {navOptions as placeDetailScreenNavOptions} from '../screens/PlaceDetailScreen';
import NewPlaceScreen, {navOptions as newPlaceScreenNavOptions} from '../screens/NewPlaceScreen';
import MapScreen, {navOptions as mapScreenNavOptions} from '../screens/MapScreen';
import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const PlacesStackNavigator = createStackNavigator();

export const PlacesNavigator = () => {
  return (
    <PlacesStackNavigator.Navigator >
      <PlacesStackNavigator.Screen
        name="Places"
        component={PlacesListScreen}
        options={placesScreenNavOptions}
      />
      <PlacesStackNavigator.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={placeDetailScreenNavOptions}
      />
      <PlacesStackNavigator.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={newPlaceScreenNavOptions}
      />
      <PlacesStackNavigator.Screen
        name="Map"
        component={MapScreen}
        options={mapScreenNavOptions}
      />
    </PlacesStackNavigator.Navigator>
  );
};

