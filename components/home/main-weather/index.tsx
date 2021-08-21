import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import MetricDetails from './metric-details'
import useWeathers from '../../hooks/use-weathers'
import WeatherChip from './weather-chip'

const MainWeather: FC = () => {
  const { weathers, loading, error } = useWeathers()
  const weather = weathers?.[0]

  if (error) {
    return null
  }

  if (loading) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainInfoContainer}>
        <Text style={styles.cityText}>Medan</Text>
        <View style={styles.temperatureContainer}>
          <Text style={styles.temperatureText}>{weather?.tempC}</Text>
          <Text style={styles.degreeText}>〇</Text>
        </View>
        <WeatherChip text={weather?.cuaca} weatherCode={weather?.kodeCuaca} />
        <MetricDetails weather={weather} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginRight: 16,
  },
  mainInfoContainer: {
    alignItems: 'flex-start',
  },
  temperatureContainer: {
    flexDirection: 'row',
  },
  temperatureText: {
    color: '#f9faf5',
    fontFamily: 'inter-medium',
    fontSize: 64,
    letterSpacing: -5,
  },
  degreeText: {
    color: '#f9faf5',
    fontFamily: 'inter-medium',
    fontSize: 16,
  },
  cityText: {
    color: '#f9faf5',
    fontFamily: 'inter-medium',
    fontSize: 24,
  },
})

export default MainWeather
