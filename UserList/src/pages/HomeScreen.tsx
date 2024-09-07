// screens/HomeScreen.tsx
import * as React from 'react';
import {Button, View, Text, FlatList, TouchableHighlight} from 'react-native';
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
        padding: 20,
      }}>
      <Text>Home Screen</Text>
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
      {/* <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 42,
            otherParam: 'anything you want here',
          })
        }
      /> */}
    </View>
  );
}

export default HomeScreen;
