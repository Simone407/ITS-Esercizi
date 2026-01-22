import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {StatusBar} from 'expo-status-bar'
import {Stylesheet, Text, View} from 'react-native'
import Home from './components/Home'
import AddEditUser from './components/AddEditUser'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddEditUser" component={AddEditUser} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}