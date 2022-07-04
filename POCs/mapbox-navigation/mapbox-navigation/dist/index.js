import * as React from 'react';
import {Image, requireNativeComponent, StyleSheet} from 'react-native';
const MapboxNavigation = props => {
  const points = props.points.map(element => {
    return {
      lat: element[0],
      long: element[1],
      image: Image.resolveAssetSource(element[2]),
    };
  });
  const mapProps = Object.assign(Object.assign({}, props), {points: points});
  return <RNMapboxNavigation style={styles.container} {...mapProps} />;
};
const RNMapboxNavigation = requireNativeComponent(
  'MapboxNavigation',
  MapboxNavigation,
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MapboxNavigation;
