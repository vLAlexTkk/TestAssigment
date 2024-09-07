import * as React from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../App';
import {UserDataContext} from '../context/UserDataListContext';
import UserCard from '../components/UserCard';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const {usersData} = React.useContext(UserDataContext);
  return (
    <View
      style={{
        width: '100%',
        height: "100%",
        padding: 20,
      }}>
      <Text style={styles.mainTextStyle}>Users List</Text>
      <FlatList
        data={usersData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableHighlight
            style={{width: '100%', height: 'auto', marginBottom: 10}}
            onPress={() =>
              navigation.navigate('Details', {
                name: item.name,
                email: item.email,
                website: item.website,
                address: item.address as any,
                company: item.company,
              })
            }>
            <UserCard
              name={item.name}
              email={item.email}
              phoneNumber={item.phone}
            />
          </TouchableHighlight>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainTextStyle: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HomeScreen;
