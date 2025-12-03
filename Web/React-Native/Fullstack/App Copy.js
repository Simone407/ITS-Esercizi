import { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [messaggio, setMessaggio] = useState("Ciao");
  const [visible, setVisible] = useState(false);
  const [nome, setNome] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [somma, setSomma] = useState(null);

  const dati = [
    { id: "1", nome: "Mario" },
    { id: "2", nome: "Rob" },
    { id: "3", nome: "Gino" },
  ];

  const calcolaSomma = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
  
    setSomma(num1 + num2);
    
  };

  return (
    <View style={styles.container}>
      {visible && <Text>{messaggio}</Text>}
      
      <Text>Inserisci un nome: {nome}</Text>
      <TextInput
        placeholder="Inserisci testo..."
        onChangeText={setNome}
        style={styles.inputText}
        value={nome}
      />
      <Button
        title="Cambia testo"
        onPress={() => setMessaggio("Ho premuto il pulsante")}
      />
      <Button
        title={visible ? "Nascondi" : "Visualizza"}
        onPress={() => setVisible(!visible)}
      />

      <View style={styles.containerList}>
        <FlatList
          data={dati}
          renderItem={({ item }) => <Text>{item.nome}</Text>}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.containerList}>
        <Button title="Apri" onPress={() => setOpenModal(true)} />
        <Modal visible={openModal} animationType="slide">
          <View style={styles.container}>
            <Text>Sono una moda</Text>
            <Button title="Chiudi" onPress={() => setOpenModal(false)} />
          </View>
        </Modal>
      </View>

      <View style={styles.sommaContainer}>
        <Text>Inserisci due numeri:</Text>
        <TextInput
          placeholder="Numero 1"
          keyboardType="numeric"
          onChangeText={setNumero1}
          style={styles.inputText}
          value={numero1}
        />
        <TextInput
          placeholder="Numero 2"
          keyboardType="numeric"
          onChangeText={setNumero2}
          style={styles.inputText}
          value={numero2}
        />
        <Button title="Calcola Somma" onPress={calcolaSomma} />
        <Text>Somma: {somma}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#857EC4",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  containerList: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  inputText: {
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 15,
    textAlign: "center",
  },
  sommaContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "80%",
  },
});


// https://kirillzyusko.github.io/react-native-keyboard-controller/docs/installation