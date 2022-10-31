import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, SafeAreaView,View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Botao from '../components/Botao'

function Home() {

    const nav = useNavigation()
  return (

    <View style={styles.container}>
        <Text style={styles.texto}>Jogo do Galo</Text>
        

        <Botao texto="Jogar" onpress={() => {
        nav.navigate("Jogo");
      }}></Botao>
      <Botao texto="Histórico" onpress={() => {
        nav.navigate("Histórico");
      }}></Botao>

        <MaterialCommunityIcons name = 'information-outline' style={styles.info} onPress={() => {nav.navigate("Sobre");}}></MaterialCommunityIcons>
        

        
    </View>
    
  )
}


const styles = StyleSheet.create({

  container:{
        flex:1,  
        padding:15,  
        backgroundColor: "#fff",  
        justifyContent: "center",
        alignItems:'center'
   
  },

  info:{

    fontSize:50,
    color:'black',
    position:'absolute',
    right:20,
    bottom:20,
  },
  texto:{
    fontSize:40,
    color:'black',
    position:'absolute',
    top:100,
    fontWeight:'bold',
  }

  


})

export default Home