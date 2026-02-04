import {View,Text,StyleSheet,Button, TextInput} from 'react-native';
import {useState} from 'react';



export default function App(){

  const [count, setCount] = useState(0);
  
  
  
  return(

  <View style={styles.container}>

      <Text style={styles.text} > Hello World </Text>
      <Button title= "Prova Alert" onPress={() => alert('Hai premuto il bottone!')} />

      <Button title= "Aggiungi" onPress={() => setCount(count + 1)} />
      <Text style={styles.text} > {count} </Text>

      <Button title="Rimuovi" onPress={() => { if (count > 0) { setCount(count - 1);}}} />


        

  </View>

  )
}

const styles = StyleSheet.create({

container:{
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  backgroundColor:'lightgreen',

},
text: {
  fontSize: 30,
  color: 'blue',
},

});