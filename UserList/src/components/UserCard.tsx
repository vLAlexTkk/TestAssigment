import {View, Image, Text, StyleSheet} from 'react-native';

interface IUserCard {
  name: string;
  email: string;
  phoneNumber: string;
}

const UserCard = ({name, email, phoneNumber}: IUserCard) => {
  return (
    <View style={styles.container}>
      <Image />
      <View style={{width: '100%'}}>
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
    backgroundColor: '#FFF',
  },
});

export default UserCard;
