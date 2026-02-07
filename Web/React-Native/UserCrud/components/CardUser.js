import { View, Text, StyleSheet } from 'react-native';

const CardUser = ({nome,cognome,email,telefono}) => {
  return (
    <View style={styles.card}>
        <Text>{nome}</Text>
        <Text>{cognome}</Text>
        <Text>{email}</Text>
        <Text>{telefono}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  card:{
    borderWidth:1,
    borderColor:'#000000',
    padding:10,
    margin:10,
    borderRadius:5,
  }
})

export default CardUser