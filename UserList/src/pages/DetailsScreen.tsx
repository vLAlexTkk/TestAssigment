import * as React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../App';
import UserLocationMap from '../components/UserLocation';

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

function DetailsScreen({route, navigation}: DetailsScreenProps) {
  const {name, email, website, address, company} = route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{margin: 20, gap: 10}}>
          <View style={styles.container}>
            <Image
              source={require('../assets/images/default-pic.png')}
              style={styles.image}
            />
            <Text>{name}</Text>
            <Text>{email}</Text>
            <Text>{website}</Text>
          </View>
          <View style={{gap: 10}}>
            <Text style={styles.mainTextStyle}>Detail Info</Text>
            <View style={styles.detailInfo}>
              <View>
                <Text style={styles.textInfoStyle}>City</Text>
                <Text>{address.city}</Text>
              </View>
              <View>
                <Text style={styles.textInfoStyle}>Street</Text>
                <Text>{address.street}</Text>
              </View>
              <View>
                <Text style={styles.textInfoStyle}>Suite</Text>
                <Text>{address.suite}</Text>
              </View>
              <View>
                <Text style={styles.textInfoStyle}>Zipcode</Text>
                <Text>{address.zipcode}</Text>
              </View>
            </View>
            <View style={styles.detailInfo}>
              <View>
                <Text style={styles.textInfoStyle}>Company Name</Text>
                <Text>{company.name}</Text>
              </View>
              <View>
                <Text style={styles.textInfoStyle}>Catch Phrase</Text>
                <Text>{company.catchPhrase}</Text>
              </View>
              <View>
                <Text style={styles.textInfoStyle}>Business Solutions</Text>
                <Text>{company.bs}</Text>
              </View>
            </View>
          </View>
          <View style={{gap: 10}}>
            <Text style={styles.mainTextStyle}>User Location</Text>
            <UserLocationMap
              latitude={address.geo.lat}
              longtitude={address.geo.lng}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 5,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#FFF',
  },
  detailInfo: {
    backgroundColor: '#FFF',
    gap: 5,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 999,
  },
  textInfoStyle: {
    fontSize: 10,
  },
  mainTextStyle: {
    fontSize: 18,
  },
});

export default DetailsScreen;
