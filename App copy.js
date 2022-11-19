import React, { Component }  from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './Home.js';
import Detail from './Detail.js';


const Stack = createNativeStackNavigator();
function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
        option={{
          title:'Data Karyawan',
          headerStyle: {backgroundColor:'#006aff'},
          headerTintColor:'#fff'
        }}/>
                <Stack.Screen name="Detail" component={Detail}
        option={{
          title:'Data Karyawan',
          headerStyle: {backgroundColor:'#006aff'},
          headerTintColor:'#fff'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

export default App;