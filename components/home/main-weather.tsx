import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Chip from '../common/chip'

const MainWeather: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainInfoContainer}>
        <Text style={styles.temperatureText}>27</Text>
        <Text style={styles.cityText}>Jakarta</Text>
        <Chip text="Rainy" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: 16,
  },
  mainInfoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  temperatureText: {
    color: 'white',
    fontFamily: 'inter-bold',
    fontSize: 64,
  },
  cityText: {
    color: 'white',
    fontFamily: 'inter-medium',
    fontSize: 24,
    marginTop: -16,
  },
})

export default MainWeather
