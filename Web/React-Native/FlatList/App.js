import { StyleSheet, Text, View, FlatList,StatusBar} from 'react-native';
import React,{useState} from 'react';

export default function App() {

const [people,setPeople] = useState([
  {name: 'Simone', id: '1'},
  {name: 'Luca', id: '2'},
  {name: 'Giulia', id: '3'},
  {name: 'Francesco', id: '4'},
  {name: 'Martina', id: '5'},
  {name: 'Andrea', id: '6'},
  {name: 'Sara', id: '7'},
  {name: 'Alessandro', id: '8'},
  {name: 'Federica', id: '9'},
  {name: 'Davide', id: '10'},
]);
  
  return ( 
    <View style={styles.container}>
      <FlatList 
        keyExtractor={(item) => item.id}
        data={people}
        renderItem = {({item})=> (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b53a7',      
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'lightgreen',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }
});
