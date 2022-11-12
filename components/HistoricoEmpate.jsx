import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HistoricoEmpate = () => {
  return (
    <View style={styles.container}>
      
        <Text style = {styles.texto}>Empate</Text>
      
    </View>
  )
}

export default HistoricoEmpate

const styles = StyleSheet.create({

    container:{
        height:150,
        width:350,
        borderColor:'gray',
        backgroundColor:'gray',
        borderWidth:2,
        borderRadius:30,
        alignSelf:'center',
        marginVertical:15,
        justifyContent:'center',
        alignItems:'center'
    },

    

    texto:{

        fontSize:30,
        fontWeight:'bold',
        color:'white'


    }
})