import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet,Dimensions, TouchableOpacity, Text, Button, Image, ScrollView } from 'react-native';
import { form } from '../LojadeRoupas/index';

class App extends Component {
  render() {

    //Imagens Links
    let Banner1 = "https://siberian.vteximg.com.br/arquivos/ids/177011/NOVIDADES%20MASCULINO%20MOBILE.jpg?v=637758892402070000";
    let Roupas_F = "https://img.lojasrenner.com.br/item/624063528/zoom/1.jpg"
    let Roupas_F1 = "https://img.lojasrenner.com.br/item/624030110/zoom/1.jpg";
    let Roupas_F2 = "https://img.lojasrenner.com.br/item/598798600/zoom/1.jpg";
    let Roupas_F3 = "https://universo.mobonline.com.br/wp-content/uploads/2021/06/como-se-vestir-bem-1.jpg";
    let Roupas_M = "https://damyller.vteximg.com.br/arquivos/ids/597598-475-713/Jaqueta-Biker-Resinada-Masculina-Frente--.jpg?v=637497653752370000";
    let Roupas_M2 = "https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-masculina/camisetas-masculinas/camiseta-manga-longa-gola-role-preta_23170_301_1.jpg";
    let Roupas_M3 = "https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-masculina/camiseta-manga-curta/camiseta-at-roger-marinho_307888_301_1.jpg";
    let Roupas_M4 = "https://mhmcdn.manualdohomemmoderno.com.br/?w=750&h=450&quality=31&clipping=landscape&url=https://manualdohomemmoderno.com.br/files/2019/06/onde-comprar-roupa-masculina-barata-as-melhores-lojas-da-internet-onde-comprar-roupa-masculina-barata-as-melhores-lojas-da-internet-4.jpg";
    let Redes = "https://s2.glbimg.com/d6oXwb6hUgp9jEujFafrEsjtvOY=/0x0:1080x288/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/N/J/qWlChvQkGwkNWK3lRpbQ/socialmedias.png"
    let Meiospagamento = "https://cdn.shopify.com/s/files/1/0495/6241/9360/files/imagem_2021-12-24_112908_x200.png?v=1640356151";

    //Carossel Banner
    let imagens = []
    for (let i = 0; i < 1; i++) {
      imagens.push(<Image style={{ alignSelf: 'center', width: 540, height: 400, margin: 10, borderRadius: 10}}  source={{ uri: Banner1 }} />)
    }
    //Carrosel Feminino
    let Carrosel = []
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{ width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F }} />)
    }
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{ width: 200, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F1 }} />)
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

    //Redes sociais Footer
    let RedesSociais = []
    for (let i = 0; i < 1; i++) {
      RedesSociais.push(<Image style={{ alignSelf: 'center', width: 540, height: 140, margin: 10, borderRadius: 45 }} source={{ uri: Redes }} />)
    }

    //Meios de Pagamento
    let Meiosdepagamento = []
    for (let i = 0; i < 1; i++) {
      Meiosdepagamento.push(<Image style={{ alignSelf: 'center', width: 540, height: 190, margin: 10 }} source={{ uri: Meiospagamento }} />)
    }


      return (

        <ScrollView>
          
          <View style={form.container}>
          
            <View style={{justifyContent: "space-around", display: 'flex', flex: 1, flexDirection: 'row', margin: 10,}}>
              <Button color='black' borderRadius='100' title='    HOME PAGE    ' width='150' height='50' />
              <Text style={{ color: 'black', fontSize: 10, textTransform: 'uppercase', textAlign: 'left', paddingTop: 10 }}>            </Text>
              <Button color='black' title='    Categorias    '></Button>
              <Text style={{ color: 'black', fontSize: 10, textTransform: 'uppercase', textAlign: 'left', paddingTop: 10 }}>            </Text>
              <Button color='black' title='      Sobre     '></Button>
              <Text style={{ color: 'black', fontSize: 30, textAlign: 'left', marginLeft: 100 , textAlign: 'right'}}>BAZAAR</Text>
            </View>

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
            <Button onPress={() => alert('Você pressionou o botão!')} paddingTop={10} color={'black'} title='VER MAIS'></Button>


            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', paddingTop: 40 }}>Moda Masculina</Text>
            <Text style={{ color: 'black', fontSize: 10, textTransform: 'uppercase', textAlign: 'left', paddingTop: 10 }}></Text>
            <ScrollView horizontal={true}>

              {/* Chamada do Array que ira inserir as imagens vezes */}
              {Masculino}
            </ScrollView>
            <Button paddingTop={10} color={'black'} title='VER MAIS'></Button>

            <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', margin: 40 }}>Bem Vindo ao BAZAAR{'\n'}{'\n'}{'\n'}Nossos produtos são inspirados pelas pessoas que estão á nossa volta, com suas belezas e qualidades.{'\n'}{'\n'}Produtos de bom gosto especialmente para você.{'\n'}Descubra "our story" e aproveite as promoçôes imperdiveis.{'\n'}{'\n'}{'\n'}------------------------------------------------------------------------------------------------------------------------</Text>
            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', margin: 50 }}>Rua Eusébio 10{'\n'}Centro, Cidade das Águas{'\n'}{'\n'}Abertura de segunda a sexta das 10:00 ás 21:00{'\n'}{'\n'}</Text>

            <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>------------------------------------------------------------------------------------------------------------------------</Text>

            <Text style={{ color: 'black', fontSize: 20, textAlign: 'left', margin: 50 }}>Siga-nos nas nossas redes sociais:</Text>

            <ScrollView>
              {RedesSociais}
            </ScrollView>

            <Text style={{ color: 'black', fontSize: 20, textAlign: 'left', margin: 50, paddingTop: 10 }}>Aceitamos as segintes bandeiras:</Text>

            <ScrollView>
              {Meiosdepagamento}
            </ScrollView>

            <Text style={{ color: 'black', fontSize: 13, textAlign: 'center', paddingTop: 50 }}>© Felipe Holanda - BAZAAR 2022</Text>


          </View>
        </ScrollView>
      );
    };
  };

export default App;