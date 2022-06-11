
  import React from 'react';
  import { View, Text, Button, StyleSheet } from 'react-native';

  function Sobre( { navigation } ) {
      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Sobre</Text>

              {/* Não funciona, pois já estamos na página sobre */}
              <Button
                  title="Ir para Sobre... denovo"
                  onPress={() => navigation('Sobre')}
              />

              {/* Adiciona uma nova rota à pilha de navegação*/}
              <Button
                  title="Ir para Sobre... denovo"
                  onPress={() => navigation.push('Sobre')}
              />

              {/* Volta para a rota anterior */}
              <Button 
                  title="Voltar rota anterior"
                  onPress= {() => {navigation.goBack()}}
              />

              {/* Volta para a primeira rota */}
              <Button
                  title="Voltar a primeira rota da pilha"
                  onPress={() => navigation.popToTop()}
              />
          </View>
      );
  }

  export default Sobre;