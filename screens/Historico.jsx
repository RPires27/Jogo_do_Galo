import React from 'react'
import { ScrollView, Text } from 'react-native'
import history from '../components/history'

function Historico() {


  
  return (
    <ScrollView>
      {history.historico}
    </ScrollView>


  )
}

export default Historico
