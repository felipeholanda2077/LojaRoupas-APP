import React, {useState} from "react";
import {View, Text, Button, Modal, StyleSheet} from "react-native"

export default function(){

    const [visivel,setVisivel]=useState(true)
    
    return(
        <View>
            <Modal 
                animationType="fade"
                transparent={true}
                visible={visivel}
            >
                <View style={estilos.modal}>
                    <Text style={{color:'black',fontSize: 20, textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipiscing elit, eros proin taciti dictum feugiat elementum quam congue, cursus venenatis vestibulum malesuada fames quis</Text>
                    <Text style={{color:'black',fontSize: 20, textAlign: 'center' }}></Text>
                    <Button title="Comprar" color={'red'}  style={{boxshadow: '10px 5px 5px #7D00FF'}} />
                    <Text style={{  textAlign: 'center' }}></Text>
                    <Button title="Fechar" borderRadius={50} color={'black'} onPress={() => {setVisivel(false)}} />
                </View>
            </Modal>
            <Button title="Mostrar" color={'black'} onPress={() => {setVisivel(true)}} />
        </View>
    )
}

const estilos=StyleSheet.create({
    modal:{
        backgroundColor: 'white', margin: 50,marginTop:350, padding: 20, borderRadius: 10, elevation:10,
    }
})