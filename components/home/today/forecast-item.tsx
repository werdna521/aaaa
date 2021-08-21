import React, { FC } from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'

import { Weather } from '../types'
import WeatherIcon from '../../common/weather-icon'
import { parseTime } from '../../../utils'

type Props = {
  style?: StyleProp<ViewStyle>
  weather?: Weather
}

const ForecastItem: FC<Props> = ({ style, weather }) => {
  const time = parseTime(weather?.jamCuaca)

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.timeText}>{time}</Text>
      <WeatherIcon weatherCode={weather?.kodeCuaca} />
      <Text style={styles.temperatureText}>{weather?.tempC}°</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    color: '#f9faf5',
    fontFamily: 'inter-medium',
    fontSize: 16,
  },
  temperatureText: {
    color: '#f9faf5',
    fontFamily: 'inter-medium',
    fontSize: 24,
  },
})

export default ForecastItem
