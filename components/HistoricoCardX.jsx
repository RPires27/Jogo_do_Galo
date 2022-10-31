import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HistoricoCardX = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name='close' style = {styles.x}></MaterialCommunityIcons>
      <View style = {styles.quadrado}>
        <Text style = {styles.texto}>Vencedor</Text>
      </View>
    </View>
  )
}

export default HistoricoCardX

const styles = StyleSheet.create({

    container:{
        height:150,
        width:350,
        borderColor:'red',
        borderWidth:2,
        borderRadius:30,
        alignSelf:'center',
        marginVertical:15,
        justifyContent:'center',
    },
    x:{
        color: "red",
        fontSize:80,
        position:'absolute',
        left:45,
    
      },

    quadrado:{
        height:150,
        width:175,
        backgroundColor:'red',
        position:'absolute',
        right:0,
        borderRadius:30,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
        justifyContent:'center',
        alignItems:'center'

    },

    texto:{

        fontSize:30,
        fontWeight:'bold',
        color:'white'


    }
})
