import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HistoricoCardO = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name='circle-outline' style = {styles.x}></MaterialCommunityIcons>
      <View style = {styles.quadrado}>
        <Text style = {styles.texto}>Vencedor</Text>
      </View>
    </View>
  )
}

export default HistoricoCardO

const styles = StyleSheet.create({

    container:{
        height:150,
        width:350,
        borderColor:'blue',
        borderWidth:2,
        borderRadius:30,
        alignSelf:'center',
        marginVertical:15,
        justifyContent:'center',
    },
    x:{
        color: "blue",
        fontSize:80,
        position:'absolute',
        left:45,
    
      },

    quadrado:{
        height:150,
        width:175,
        backgroundColor:'blue',
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
