import React, { useState, useEffect } from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Input, Avatar, Header, ListItem } from "react-native-elements";
import reactDom from "react-dom";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

export default function ListaScreen({ route, navigation }) {
  
    const [list, setList] = useState([]);
    const refresh = useIsFocused();

  useEffect(() => {
    function consultarDados() {
      axios
        .get("http://professornilson.com/testeservico/clientes")
        .then(function (response) {
          setList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    consultarDados();
  }, [refresh]);

  return (
    <View>
      <Header
        centerComponent={{ text: "Lista de contatos", style: { color: "#fff", fontSize:20 } }}
        rightComponent={
          <Button title="+" onPress={() => navigation.navigate("Inserir")} />
        }
        leftComponent={
          <Button title="<" onPress={() => navigation.navigate("Home")} />
        }
    />
      <ScrollView>
        {list.map((linha, i) => (
          <ListItem
            key={i}
            bottomDivider
            onPress={() =>
              navigation.navigate("Alterar", {
                nome: linha.nome,
                telefone: linha.telefone,
                cpf: linha.cpf,
                id: linha.id,
              })
            }
          >
            <Avatar source={{ uri: linha.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{linha.nome}</ListItem.Title>
              <ListItem.Subtitle>{linha.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}
