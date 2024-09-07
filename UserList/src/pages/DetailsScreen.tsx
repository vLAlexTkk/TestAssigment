// screens/DetailsScreen.tsx
import * as React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

function DetailsScreen({route, navigation}: DetailsScreenProps) {
  const {name, email, website, address, company} =
    route.params;

  return (
    <SafeAreaView>
      <View style={{margin: 20}}>
        <Image />
        <View
          style={{
            flexDirection: 'column',
            gap: 5,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: '#FFF',
          }}>
          <Text>{name}</Text>
          <Text>{email}</Text>
          <Text>{website}</Text>
        </View>
        <View style={{gap: 10}}>
          <Text>Detail Info</Text>
          <View
            style={{
              backgroundColor: '#FFF',
              gap: 5,
              padding: 10,
              borderRadius: 10,
            }}>
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
          <View
            style={{
              backgroundColor: '#FFF',
              gap: 5,
              padding: 10,
              borderRadius: 10,
            }}>
            <View>
              <Text style={styles.textInfoStyle}>City</Text>
              <Text>{company.name}</Text>
            </View>
            <View>
              <Text style={styles.textInfoStyle}>Street</Text>
              <Text>{company.catchPhrase}</Text>
            </View>
            <View>
              <Text style={styles.textInfoStyle}>Suite</Text>
              <Text>{company.bs}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInfoStyle: {
    fontSize: 10,
  },
});

export default DetailsScreen;
