import React from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function About() {
  return (
    <View style={styles.container}><Text style = {styles.texto}>
      Projeto desenvolvido na disciplina de Programação
      para Dispositivos Móveis III.</Text>
      <Text style={styles.texto}>Feito por Rodrigo Pires.</Text>
      <MaterialCommunityIcons name='github' style={styles.git} onPress={() =>{Linking.openURL("https://github.com/RPires27/Jogo_do_Galo")}}></MaterialCommunityIcons>
    </View>
    
  )
}

const styles = StyleSheet.create({

    texto:{
        fontWeight:"bold",
        fontSize:20,
        color:"black",
        
    },

    container:{
      flex:1,
      padding:15,
      justifyContent:'center'
    },

    git:{
      fontSize:60,
      alignSelf:'center',
      color:'black',
      marginTop:50
    }
})

export default About