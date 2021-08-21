import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import MainWeather from '../components/home/main-weather'
import Moon from '../components/home/moon'

const HomePage: FC = () => {
  return (
    <View style={styles.container}>
      <MainWeather />
      <Moon style={styles.moon} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  moon: {
    position: 'absolute',
    top: -125,
    right: -200,
  },
})

export default HomePage
