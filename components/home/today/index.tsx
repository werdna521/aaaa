import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import useWeathers from '../../hooks/use-weathers'
import ForecastItem from './forecast-item'

const Today: FC = () => {
  const { weathers, loading, error } = useWeathers()

  if (error) {
    return null
  }

  if (loading) {
    return null
  }

  const renderWeatherForecasts = () => {
    return weathers?.slice(0, 4)?.map((weather, index) => {
      const isFirstElement = index === 0
      const style = !isFirstElement ? styles.forecastSpacing : {}

      return (
        <ForecastItem
          key={`#weather-${weather?.jamCuaca}`}
          style={style}
          weather={weather}
        />
      )
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>
      <View style={styles.forecastContainer}>{renderWeatherForecasts()}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
  title: {
    color: '#5e7382',
    fontFamily: 'inter-medium',
    fontSize: 16,
  },
  forecastContainer: {
    marginTop: 12,
  },
  forecastSpacing: {
    marginTop: 8,
  },
})

export default Today
