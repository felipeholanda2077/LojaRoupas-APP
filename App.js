// Importamos as bibliotecasecomponentes principais para nosso projeto
import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
// Criamosanossa classe App para renderizar nosso projeto
class App extends Component {
  render() {

    //Imagens Links
    let Banner = "https://www.agencianectarina.com.br/lojavirtual/wp-content/uploads/2021/04/banner-home-2.jpg";
    let Roupas_F = require ('../LojadeRoupas/img/Mulher1.jpeg')
    let Roupas_F2 = require ('../LojadeRoupas/img/Mulher2.jpeg')
    let Roupas_F3 = "https://img.lojasrenner.com.br/item/631863443/zoom/1.jpg";
    let Roupas_M = "https://shopee.com.br/blog/wp-content/uploads/2022/03/shoppe0150-1.jpg";
    let Roupas_M2 = "https://mhmcdn.manualdohomemmoderno.com.br/?w=750&h=450&quality=31&clipping=landscape&url=https://manualdohomemmoderno.com.br/files/2019/06/onde-comprar-roupa-masculina-barata-as-melhores-lojas-da-internet-onde-comprar-roupa-masculina-barata-as-melhores-lojas-da-internet-4.jpg";
    let Roupas_M3 = "https://img.lojasrenner.com.br/item/551909376/zoom/1.jpg"
    let Roupas_M4 = "https://img.lojasrenner.com.br/item/601206258/zoom/1.jpg"
    
    //Carossel Banner
    let imagens = []
    for (let i = 0; i < 1; i++) { 
      imagens.push(<Image style={{alignItems: 'center', width: 580, height: 270, margin: 10, borderRadius: 10 }} source={{ uri: Banner }} />)
    }
    //Carrosel Feminino
    let Carrosel = []
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{ width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F }} />)
    }
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{ width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F2 }} />)
    }
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{ width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F3 }} />)
    }
    
    //Carrosel Masculino
    let Masculino = []
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{ width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_M }} />)
    }
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{ width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_M2 }} />)
    }
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{ width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_M3 }} />)
    }
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{ width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_M4 }} />)
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