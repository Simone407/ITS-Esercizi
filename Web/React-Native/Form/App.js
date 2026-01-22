import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

const FormContatti = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');




  return (
    <View>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Inserisci il nome"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Inserisci email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
 

    </View>
  );
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titolo}>Form </Text>
      <FormContatti />
    </View>
  );
}

