import React from "react";
import { View, Text, Button, Alert } from "react-native";
// import MeuTexto from "./components/MeuTexto";
// import MinMax from "./components/MinMax";
// import Contador from "./components/Contador";
import Botao from "./components/Botao";
import Estilo from "./estilo";


export default () => (
    <View style={Estilo.App}>
        <Botao valor="1"/>
        <Botao valor="2"/>
        <Botao valor="3"/>
        <Botao valor="4"/>

        {/* <Contador inicial={10}/>
        <MinMax min={4} max={15}/>
        <MinMax min={8} max={30}/>
        <MinMax min={6} max={11}/>
         <Text>Primeiro App!</Text>
        <MeuTexto/>
        <Button
        title="Cadastro"
        onPress={() => Alert.alert('Botão presionado!')}
        /> */}
    </View>
)