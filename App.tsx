import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'

import HomePage from './screens'
import { FC } from 'react'

// TODO: add design system
const App: FC = () => {
  const [fontsLoaded] = useFonts({
    'inter-medium': Inter_500Medium,
    'inter-bold': Inter_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <HomePage />
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081b25',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
