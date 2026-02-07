import { useState } from 'react';
import {Text,View,TextInput,ScrollView,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import { postUser } from '../services/UserServices';

const AddUser = ({navigation}) => {

  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');


  async function submit(){
    if(!nome || !cognome || !email || !telefono){
      Alert.alert("Devi compilare tutti i campi!");
      return;
    } 
    await postUser(nome, cognome, email, telefono);
    navigation.goBack();
  }
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <TextInput placeholder="Nome: " style={styles.input} value={nome} onChangeText={setNome}/>
      <TextInput placeholder="Cognome: " style={styles.input} value={cognome} onChangeText={setCognome} />
      <TextInput keyboardType='email-address' placeholder="Email: " style={styles.input} value={email} onChangeText={setEmail}/>
      <TextInput keyboardType='numeric' placeholder="Numero Telefono: " style={styles.input} value={telefono} onChangeText={setTelefono} />

      <TouchableOpacity style={styles.button} onPress={()=>submit()}><Text>Invia</Text></TouchableOpacity>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 2,
    margin: 8,
    borderColor: '#000000',
    padding: 10,
    marginBottom: 10,
    width: '90%',
    borderRadius: 5,
  },
  button:{
    backgroundColor:'#008000',
    padding:10,
    alignItems:'center',
    borderRadius:5,
  }
})


export default AddUser