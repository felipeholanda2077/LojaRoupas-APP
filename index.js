/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

import { StyleSheet, Dimensions } from 'react-native'; 

// Tamanho da largura da tela
var width = Dimensions.get('window').width;

// Estilização do componente Form
const form = StyleSheet.create({
  container: {
    margin: 20
  },
  texts: {
    color: "#772ea2",
  },
  inputs: {
    borderBottomWidth: 1,
    borderBottomColor: '#772ea2'
  },
}
);

// Estilização do componente Header
const header = StyleSheet.create({
  background: {
    width: width,
    height: 80,
    backgroundColor: "#772ea2"
  },
  container: {
    left: 16
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    fontWeight: "500"
  },
  logo: {
    width: 80,
    height: 80,
    right: 20,
    position: "absolute",
  },
}
);

export { form, header };
