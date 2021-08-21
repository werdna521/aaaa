import React, { FC } from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'

import { Weather } from '../types'
import ForecastItem from './forecast-item'

type Props = {
  weathers: Weather[]
  title: string
  style?: StyleProp<ViewStyle>
}

const ForecastDay: FC<Props> = ({ weathers, title, style }) => {
  const renderWeatherForecasts = () => {
    return weathers?.map((weather, index) => {
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
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.forecastContainer}>{renderWeatherForecasts()}</View>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default ForecastDay
