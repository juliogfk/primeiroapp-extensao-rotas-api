import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from 'react-native-elements';
import HomeScreen from "./screens/Home";
import InicialScreen from "./screens/Inicial";
import ListaScreen from "./screens/Listar";
import InserirScreen from "./screens/Inserir";
import AlterarScreen from "./screens/Alterar";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Listar" component={ListaScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Inserir" component={InserirScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Alterar" component={AlterarScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Usuário" component={InicialScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
