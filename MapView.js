import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

class MapViewComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.78925, longitude: -122.4334 }}
            title="Hello"
            description="World!"
          />

        <Marker
            coordinate={{ latitude: 37.791, longitude: -122.4378 }}
            title="Alta Plaza Park"
            description="Hiyaaaa!!!"
          />
          
          {/* Adding a Polygon to the Map */}
          <Polygon
            coordinates={[
              { latitude: 37.79181305864152, longitude: -122.43943082728823 },
              { latitude: 37.7922120797487, longitude: -122.43629040131351 },
              { latitude: 37.79056544845168, longitude: -122.43595123642251 },
              { latitude: 37.79016643081609, longitude: -122.4391010038529 },
            ]}
            strokeColor="#000" // Optional: Border color of the polygon
            fillColor="rgba(255,0,0,0.5)" // Optional: Fill color of the polygon with opacity
            strokeWidth={2} // Optional: Width of the polygon border
          />
        </MapView>
      </View>
    );
  }
}

export default MapViewComponent;
