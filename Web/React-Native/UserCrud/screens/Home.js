import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Button, Text, View, FlatList,ScrollView } from "react-native";
import { getUsers } from "../services/UserServices";
import CardUser from "../components/CardUser";



const Home = ({navigation}) => {
    const [users, setUsers] = useState([])

    useFocusEffect(
    useCallback(() => {

        // creo funzione asincrona per chimare get users con await
        const loadUsers = async () => {
            const data = await getUsers()
            setUsers(data)
        }

        loadUsers() // chiamo il load
    }, [])
    );

  return (
    //<ScrollView>
        <View>
        <Text>Home!</Text>
        <Button title="Aggiungi utente" onPress={() => navigation.navigate("AddUser")}>
        </Button>
        <FlatList data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
            <CardUser nome={item.nome} cognome={item.cognome} email={item.email} telefono={item.telefono}></CardUser>
        )}
        ></FlatList>
        </View>
    //</ScrollView>
    
  );
};

export default Home;