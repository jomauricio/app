import React , {Component} from "react";
import { Text, Button } from "react-native";
import Estilo from "../estilo";
import DisplayContador from "./DisplayContator";
import BotoesContador from "./BotoesContador";


export default class Contador extends Component {

    state = {
        numero: this.props.inicial
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - 1
        })
    }

    render() {
        return (
            <>
            <DisplayContador inicial={this.state.numero}/>
            <BotoesContador inc={this.inc} dec={this.dec}/>
            </>
        )
    }

}

