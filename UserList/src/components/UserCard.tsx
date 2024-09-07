import {View, Image, Text, StyleSheet} from 'react-native';

interface IUserCard {
  name: string;
  email: string;
  phoneNumber: string;
}

const UserCard = ({name, email, phoneNumber}: IUserCard) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/default-pic.png')}
        style={{width: 60, height: 60, borderRadius: 999}}
      />
      <View style={{width: '100%', flexDirection: "column", borderRadius: 20}}>
        <Text>{name}</Text>
        <Text>{email}</Text>
        <Text>{phoneNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#FFF',
  },
});

export default UserCard;
