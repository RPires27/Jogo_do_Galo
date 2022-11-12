import React, { Component, useEffect } from 'react'

import { Pressable, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert, Button} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HistoricoCardO from '../components/HistoricoCardO';
import HistoricoCardX from '../components/HistoricoCardX';
import HistoricoEmpate from '../components/HistoricoEmpate';
import history from '../components/history';






export default class Jogo extends Component {
  
    constructor(props){
        super(props);
        this.state = {
          gameState: [
            [0,0,0],
            [0,0,0],
            [0,0,0]
          ],
          jogadorAtual:1,

          empate:0,

        }
      }

      

      

      vencedor = () => {
      const NUM_PECAS = 3
      var arr = this.state.gameState
      var soma

      for(var i = 0; i < NUM_PECAS; i++){
        sum = arr[i][0] + arr[i][1] + arr[i][2]
        if(sum == 3){return 1}
        else if (sum == -3) { return -1}
      }

      for(var i = 0; i < NUM_PECAS; i++){
        sum = arr[0][i] + arr[1][i] + arr[2][i]
        if(sum == 3){return 1}
        else if (sum == -3) { return -1}
      }

      sum = arr[0][0] + arr[1][1] + arr[2][2]
      if(sum == 3){return 1}
      else if (sum == -3) { return -1}


      sum = arr[2][0] + arr[1][1] + arr[0][2]
      if(sum == 3){return 1}
      else if (sum == -3) { return -1}

      return 0

      }

      componentDidMount(){
       
      this.iniciarJogo()
      }
 
      iniciarJogo = () =>{
        this.setState({gameState:
        [
          [0,0,0],
          [0,0,0],
          [0,0,0]
  
        ]
        } )

        this.setState({jogadorAtual:1})
        this.setState({empate:0})
        
      }

     novoJogo = () =>{

        this.iniciarJogo()

  
      }

      mudaCorTxt = () =>{
        var jogadorAtual = this.state.jogadorAtual

        if(jogadorAtual == 1) return {color: "red",
        fontSize:40,
        alignContent:'center',
        justifyContent: 'center',
        paddingBottom:40,
        fontWeight:'bold'
      }

        else if (jogadorAtual == -1) return {color: "blue",
        fontSize:40,
        alignContent:'center',
        justifyContent: 'center',
        paddingBottom:40,
        fontWeight:'bold'}
      }

      mudarTxt = () =>{
        var jogadorAtual = this.state.jogadorAtual
        if(jogadorAtual == 1) return "X"
        else if(jogadorAtual == -1) return "O"
      }

      tilePress = (linha, coluna)=>{

        var valor = this.state.gameState[linha][coluna]

        this.state.empate = this.state.empate + 1


        
        if(valor !== 0 ){return}

        var jogadorAtual = this.state.jogadorAtual

        var array = this.state.gameState.slice()

        array [linha][coluna] = jogadorAtual;

        this.setState({gameState: array})

        var proximoJogador = (jogadorAtual == 1) ? -1 : 1

        this.setState({jogadorAtual: proximoJogador})

        var vencedor = this.vencedor()

        
       
        
        
       
        
        if (vencedor == 1) {
          Alert.alert("O Jogador X venceu")
          history.key = history.key + 1
          this.iniciarJogo()
          history.historico.unshift(<HistoricoCardX key={history.key}></HistoricoCardX>)
        }

        if (vencedor == -1) {
          Alert.alert("O Jogador O venceu")
          history.key = history.key + 1
          this.iniciarJogo()
          history.historico.unshift(<HistoricoCardO key={history.key}></HistoricoCardO>)
        }


        if (this.state.empate == 9 && (vencedor != 1 && vencedor != -1 )) {
          Alert.alert("Empate")
          history.key = history.key + 1
          this.iniciarJogo()
          history.historico.unshift(<HistoricoEmpate key={history.key}></HistoricoEmpate>)
        }
      }

        render_Icon = (linha, coluna) =>{

        var valor = this.state.gameState[linha][coluna]

        switch (valor) {
          case 1: return <MaterialCommunityIcons name='close' style = {styles.x}></MaterialCommunityIcons>

          case -1: return <MaterialCommunityIcons name='circle-outline' style = {styles.o}></MaterialCommunityIcons>

          default: return <View></View>  
        }
      }

  render() {
    return (
        <View style ={styles.body}>
          <Text style={this.mudaCorTxt()}>Jogador {this.mudarTxt()}</Text>
        <View style = {{flexDirection : "row"}}>
          <TouchableOpacity onPress={() => this.tilePress(0,0)} style={[styles.quadrado, {borderLeftWidth:0, borderTopWidth:0}]}>
            {this.render_Icon(0,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.tilePress(0,1)} style={[styles.quadrado, {borderTopWidth:0}]}>
          {this.render_Icon(0,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.tilePress(0,2)} style={[styles.quadrado, {borderTopWidth:0, borderRightWidth:0}]}>
          {this.render_Icon(0,2)}
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection : "row"}}>
          <TouchableOpacity onPress={() => this.tilePress(1,0)} style={[styles.quadrado, {borderLeftWidth:0}]}>
          {this.render_Icon(1,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.tilePress(1,1)} style={[styles.quadrado, {}]}>
          {this.render_Icon(1,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.tilePress(1,2)} style={[styles.quadrado, {borderRightWidth:0}]}>
          {this.render_Icon(1,2)}
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection : "row"}}>
          <TouchableOpacity onPress={() => this.tilePress(2,0)} style={[styles.quadrado, {borderLeftWidth:0, borderBottomWidth:0}]}>
          {this.render_Icon(2,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.tilePress(2,1)} style={[styles.quadrado, {borderBottomWidth:0}]}>
          {this.render_Icon(2,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.tilePress(2,2)} style={[styles.quadrado, {borderRightWidth:0, borderBottomWidth:0}]}>
          {this.render_Icon(2,2)}
          </TouchableOpacity>
        </View>
        <MaterialCommunityIcons name='replay' onPress={this.novoJogo} style={styles.replay}></MaterialCommunityIcons>  
      </View>
    )
  }
}

const styles = StyleSheet.create({

    body:{
      flex:1,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center"
    },
  
    quadrado:{
      borderWidth:7,
      height:100,
      width:100,
      alignItems:'center',
      justifyContent:'center'
    },


    x:{
      color: "red",
      fontSize:80,
      alignContent:'center',
      justifyContent: 'center',
    },
    o:{
      color: "blue",
      fontSize:80,
      alignContent:'center',
      justifyContent: 'center',
    },


    replay:{
      color: "black",
      fontSize:80,
      alignContent:'center',
      justifyContent: 'center',
      paddingTop: 50,
      
    }


  
  
  })

