import { TextInput } from 'react-native';
import { useState } from 'react';

function MyComponent() {
  const [userInput, setUserInput] = useState('');
  
  return (
    <TextInput
      value={userInput}
      onChangeText={(text) => setUserInput(text)}
    />
  );
}
export default MyComponent;