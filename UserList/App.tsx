import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {UserDataProvider} from './src/context/UserDataListContext';
import DetailsScreen from './src/pages/DetailsScreen';
import HomeScreen from './src/pages/HomeScreen';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: any;
  Details: {
    name: string;
    email: string;
    website: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
};

const App: React.FC = () => {
  return (
    <UserDataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen as any} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserDataProvider>
  );
};

export default App;
