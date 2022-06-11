import React from 'react';
import { View, Text, Button } from 'react-native';

function Home( { navigation } ) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <Button 
                title="Ir para Sobre"
                onPress= {() => {navigation.navigate('Sobre')}}
            />
        </View>
    );
}

export default Home;