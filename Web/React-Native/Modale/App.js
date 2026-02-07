import {View,Text,Button, Modal} from 'react-native';
import{useState} from 'react';

export default function App(){

  const[isModalVisible, setIsModalVisible] = useState(false);

return (  
  <View style={{flex:1, backgroundColor:'lightblue', padding:70}}>
    <Button title="Press" onPress={()=>setIsModalVisible(true)} color="midnightblue"></Button>
    <Modal visible={isModalVisible} animationType='slide' presentationStyle='pageSheet'> 
      <View style={{flex:1, backgroundColor:'lightblue', padding:70}}>
        <Text>Ciao sono una Modale</Text>
        <Button title = "Close" color="red" onPress={()=>setIsModalVisible(false)}></Button>
      </View>
    </Modal>
  </View>
);
}   