import { View, Text, StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'

export default function App() {
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'red'
  }
})

