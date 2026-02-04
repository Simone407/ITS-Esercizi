import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [goals, setGoals] = useState([]);

  function addGoalHandler() {
    if (userInput.trim().length === 0) return;
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: userInput }
    ]);
    setUserInput('');
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => 
      currentGoals.filter((goal) => goal.id !== id)
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Inserisci obiettivo"
          value={userInput}
          onChangeText={setUserInput}
        />
        <Button title="Aggiungi" onPress={addGoalHandler} color="#5e0acc" />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{item.text}</Text>
              <Button title="X" onPress={() => deleteGoalHandler(item.id)} color="#ff0000" />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderRadius: 4,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    fontSize: 16,
  },
});
