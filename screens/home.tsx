import React, { FC } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import MainWeather from '../components/home/main-weather'
import Moon from '../components/home/moon'
import { WeathersProvider } from '../contexts/weathers'
import Forecast from '../components/home/forecast'
import ChangeLocationFAB from '../components/home/change-location-fab'

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.innerContainer}>
          <WeathersProvider>
            <MainWeather />
            <Forecast />
          </WeathersProvider>
        </View>
        <Moon style={styles.moon} />
      </ScrollView>
      <ChangeLocationFAB />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081b25',
  },
  scrollView: {
    flex: 1,
  },
  innerContainer: {
    paddingTop: 48,
    paddingBottom: 64,
    paddingHorizontal: 16,
  },
  moon: {
    position: 'absolute',
    top: -125,
    right: -200,
    zIndex: -1,
  },
})

export default HomeScreen
