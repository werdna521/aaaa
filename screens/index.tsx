import React, { FC } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import MainWeather from '../components/home/main-weather'
import Moon from '../components/home/moon'
import Today from '../components/home/today'

const HomePage: FC = () => {
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <MainWeather />
        <Today />
      </View>
      <Moon style={styles.moon} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: '100%',
  },
  container: {
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
