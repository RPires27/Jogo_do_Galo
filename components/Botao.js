import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Botao = ({onpress, texto}) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onpress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  )
}

export default Botao

const styles = StyleSheet.create({

    botao:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        height:80,
        width:200,
        alignSelf:'center',
        borderColor:'red',
        borderWidth:4,
        borderRadius:20,
        marginBottom:20,
    },

    texto:{
        color:'red',
        fontWeight:'bold',
        fontSize:40
    }
})
