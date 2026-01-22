import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'



const Home = () => {
    const [users, setUsers] = React.useState([]);
    const navigation = useNavigation();

    return (
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => {navigation.navigate('AddEditUser')}}>
                <Text>Add User</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#fff',},
    fab: {position: 'absolute', width: 60, height: 60, alignItems: 'center', justifyContent: 'center', right: 20, bottom: 20, backgroundColor: '#03A9F4', borderRadius: 30, elevation: 8},
})