import React, { FC } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import MainWeather from '../components/home/main-weather'
import Moon from '../components/home/moon'
import { WeathersProvider } from '../contexts/weathers'
import Forecast from '../components/home/forecast'

const HomeScreen: FC = () => {
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <WeathersProvider>
          <MainWeather />
          <Forecast />
        </WeathersProvider>
      </View>
      <Moon style={styles.moon} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#081b25',
  },
  container: {
    paddingVertical: 48,
    paddingHorizontal: 16,
  },
  moon: {
    position: 'absolute',
    top: -125,
    right: -200,
  },
})

export default HomeScreen
