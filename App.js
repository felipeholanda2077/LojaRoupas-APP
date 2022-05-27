import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { form } from '../LojadeRoupas/index'

class App extends Component {
  render() {

    //Imagens Links
    let Banner1 = "https://siberian.vteximg.com.br/arquivos/ids/177011/NOVIDADES%20MASCULINO%20MOBILE.jpg?v=637758892402070000";
    let Roupas_F = "https://img.lojasrenner.com.br/item/624063528/zoom/1.jpg"
    let Roupas_F1 = "https://img.lojasrenner.com.br/item/624030110/zoom/1.jpg";
    let Roupas_F2 = "https://img.lojasrenner.com.br/item/598798600/zoom/1.jpg";
    let Roupas_M = "https://damyller.vteximg.com.br/arquivos/ids/597598-475-713/Jaqueta-Biker-Resinada-Masculina-Frente--.jpg?v=637497653752370000";
    let Roupas_M2 = "https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-masculina/camisetas-masculinas/camiseta-manga-longa-gola-role-preta_23170_301_1.jpg";
    let Roupas_M3 = "https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-masculina/camiseta-manga-curta/camiseta-at-roger-marinho_307888_301_1.jpg";
    let Roupas_M4 = "https://img.lojasrenner.com.br/item/597578701/zoom/1.jpg";

    //Carossel Banner
    let imagens = []
    for (let i = 0; i < 1; i++) {
      imagens.push(<Image style={{ alignItems: 'center', width: 540, height: 400, margin: 10, borderRadius: 10 }} source={{ uri: Banner1}} />)
    }
    //Carrosel Feminino
    let Carrosel = []
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F}} />)
    }
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F1}} />)
    }
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F2}} />)
    }

    //Carrosel Masculino
    let Masculino = []
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{width: 200, height: 350,margin: 10, borderRadius: 5 }} source={{ uri: Roupas_M }} />)
    }
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_M2 }} />)
    }
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_M3 }} />)
    }
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_M4 }} />)
    }


    return (
      <ScrollView>
        <View style={form.container}>
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

          <Text style={{ color: 'black', fontSize: 16, textAlign: 'left', margin: 40 }}>Bem Vindo ao BAZAAR{'\n'}{'\n'}{'\n'}Nossos produtos são inspirados pelas pessoas que estão á nossa volta, com suas belezas e qualidades.{'\n'}{'\n'}Produtos de bom gosto especialmente para você.{'\n'}Descubra "our story" e aproveite as promoçôes imperdiveis.</Text>
          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', margin: 50, paddingTop: 10 }}>----------------------------------------------------------------------------</Text>
          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', margin: 50, paddingTop: 10 }}>Nosso endereço{'\n'}{'\n'}Rua Eusébio 10{'\n'}Centro, Cidade das Águas{'\n'}{'\n'}Abertura de segunda a sexta das 10:00 ás 21:00{'\n'}{'\n'}----------------------------------------------------------------------------</Text>

          <Text style={{ color: 'black', fontSize: 20, textAlign: 'left', margin: 50, paddingTop: 10 }}>Siga-nos</Text>


          <Text style={{ color: 'black', fontSize: 20, textAlign: 'left', margin: 50, paddingTop: 10 }}>Aceitamos</Text>


          <Text style={{ color: 'black', fontSize: 13, textAlign: 'center', paddingTop: 50 }}>© Felipe Holanda - BAZAAR 2022</Text>


        </View>
      </ScrollView>
    )
  }
}
export default App;