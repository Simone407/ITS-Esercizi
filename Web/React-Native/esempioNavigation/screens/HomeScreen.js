import { View, Text, Button} from "react-native"

export default function HomeScreen() {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Vai al Dettaglio" 
            onpress={() => navigation.navigate('Details')}
            />
        </View>
    )
}