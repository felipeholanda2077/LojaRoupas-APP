import React from 'react';
import { View, Text, Button } from 'react-native';

function Categorias( { navigation } ) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Categorias</Text>
            <Button 
                title="Ir para Sobre"
                onPress= {() => {navigation.navigate('Sobre')}}
            />
        </View>
    );
}

export default Categorias;