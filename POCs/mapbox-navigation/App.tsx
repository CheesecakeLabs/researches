import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxNavigation from 'mapbox-navigation';

const App = () => {
  const [point, setPoint] = React.useState<[number, number]>([59.31, 18.06]);
  return (
    <View style={styles.container}>
      <MapboxNavigation
        origin={[-97.760288, 30.273566]}
        destination={[-97.918842, 30.494466]}
        points={[[point[0], point[1], require('./assets/red_marker.png')]]}
        shouldSimulateRoute
        showsEndOfRouteFeedback
        onLocationChange={event => {
          setPoint([event.nativeEvent?.latitude, event.nativeEvent?.longitude]);
        }}
        onRouteProgressChange={_ => {}}
        onError={_ => {}}
        onCancelNavigation={() => {}}
        onArrive={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
