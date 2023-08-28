import React from "react";
import { View, Text, Button, Alert } from "react-native";
// import MeuTexto from "./components/MeuTexto";
// import MinMax from "./components/MinMax";
// import Contador from "./components/Contador";
// import Botao from "./calculadora/Botao";
// import Display from "./calculadora/Display";
import Estilo from "./estilo";
import Contador from "./contador/Contador";


export default () => (
    <View style={Estilo.App}>
        <Contador inicial={5} />
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