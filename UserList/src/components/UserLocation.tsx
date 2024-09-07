import React, {useEffect, useState} from 'react';

import {StyleSheet,View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

interface IUserLocation {
  latitude: string;
  longtitude: string;
}

const UserLocation = ({latitude, longtitude}: IUserLocation) => {
  const [address, setAddress] = useState<string | null>(null);

  const userLocation = {
    lat: parseFloat(latitude),
    lng: parseFloat(longtitude),
  };

  const fetchAddress = async () => {
    const apiKey = 'AIzaSyDN5ys8qvUdulnxJcaAs729S8YNlZ3ONAk';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLocation.lat},${userLocation.lng}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setAddress(data.results[0].formatted_address);
      } else {
        setAddress('Address not found');
      }
    } catch (error) {
      console.error(error);
      setAddress('Error retrieving address');
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: userLocation.lat,
          longitude: userLocation.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{width: '100%', height: 300, borderRadius: 10}}>
        <Marker
          coordinate={{
            latitude: userLocation.lat,
            longitude: userLocation.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          title={address || 'User Location'}
          description={address ? `Full address: ${address}` : 'No description'}
        />
      </MapView>
      {/* {address && <Text style={styles.addressText}>Address: {address}</Text>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addressText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default UserLocation;
