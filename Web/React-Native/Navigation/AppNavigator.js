import React from 'react'

const stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
    </Stack.Navigator>
  )
}