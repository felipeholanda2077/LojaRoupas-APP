// Importamos as bibliotecasecomponentes principais para nosso projeto
import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
// Criamosanossa classe App para renderizar nosso projeto
class App extends Component {
  render() {

    //Imagens Links
    let Banner1 = require ('../LojadeRoupas/img/Banner.jpeg');
    let Roupas_F = require ('../LojadeRoupas/img/Mulher1.jpeg');
    let Roupas_F1 = require ('../LojadeRoupas/img/Mulher2.jpeg');
    let Roupas_F2 = require ('../LojadeRoupas/img/Mulher3.jpeg');
    let Roupas_M = require ('../LojadeRoupas/img/Homem1.jpeg');
    let Roupas_M2 = require ('../LojadeRoupas/img/Homem2.jpeg');
    let Roupas_M3 = require ('../LojadeRoupas/img/Homem3.jpeg');
    let Roupas_M4 = require ('../LojadeRoupas/img/Homem4.jpeg');

    //Carossel Banner
    let imagens = []
    for (let i = 0; i < 1; i++) {
      imagens.push(<Image style={{ alignItems: 'center', width: 580, height: 270, margin: 10, borderRadius: 10 }} source={{ uri: Banner1 }} />)
    }
    //Carrosel Feminino
    let Carrosel = []
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F }} />)
    }
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F1 }} />)
    }
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F2 }} />)
    }

    //Carrosel Masculino
    let Masculino = []
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{margin: 10, borderRadius: 5 }} source={{ uri: Roupas_M }} />)
    }
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{margin: 10, borderRadius: 5 }} source={{ uri: Roupas_M2 }} />)
    }
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{margin: 10, borderRadius: 5 }} source={{ uri: Roupas_M3 }} />)
    }
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{margin: 10, borderRadius: 5 }} source={{ uri: Roupas_M4 }} />)
    }


    return (
      <ScrollView>
        <View>
          <Text style={{ color: 'black', fontSize: 20, textTransform: 'uppercase', margin: 7, paddingTop: 20 }}>BAZAAR</Text>
          <Text style={{ color: 'black', fontSize: 10, textTransform: 'uppercase', textAlign: 'left', paddingTop: 10 }}></Text>

          <ScrollView>
            {imagens}
          </ScrollView>

          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', margin: 7, paddingTop: 20 }}>Moda Feminina</Text>
          <Text style={{ color: 'black', fontSize: 10, textTransform: 'uppercase', textAlign: 'left', paddingTop: 10 }}></Text>
          <ScrollView horizontal={true}>

            {/* Chamada do Array que ira inserir as imagens vezes */}
            {Carrosel}
          </ScrollView>


          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', paddingTop: 40 }}>Moda Masculina</Text>
          <Text style={{ color: 'black', fontSize: 10, textTransform: 'uppercase', textAlign: 'left', paddingTop: 10 }}></Text>
          <ScrollView horizontal={true}>

            {/* Chamada do Array que ira inserir as imagens vezes */}
            {Masculino}
          </ScrollView>


          <Text style={{ color: 'black', fontSize: 20, textAlign: 'left', margin: 50, paddingTop: 40 }}>Bem Vindo ao BAZAAR</Text>
          <Text style={{ color: 'black', fontSize: 16, textAlign: 'left', margin: 50 }}>Nossos produtos são inspirados pelas pessoas que esão á nossa volta, com suas belezas e qualidades.\n Produtos de bom gosto especialmente para você.\n Descubra "our story" e aproveite as promoçôes.</Text>

        </View>
      </ScrollView>
    )
  }
}
export default App;