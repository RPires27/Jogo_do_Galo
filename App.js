import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import About from './screens/About'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home'
import Jogo from './screens/Jogo'
import Historico from './screens/Historico'

const App = () => {

  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  
  return (

      <NavigationContainer>
        <StatusBar style="auto"></StatusBar>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name='Jogo' component={Jogo}></Stack.Screen>
          <Stack.Screen name='Sobre' component={About}></Stack.Screen>
          <Stack.Screen name='Histórico' component={Historico}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    
  )
}

export default App

