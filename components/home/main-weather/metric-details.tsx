import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Weather } from '../types'

import Metric from './metric'

type Props = {
  weather: Weather
}

const MetricDetails: FC<Props> = ({ weather }) => {
  return (
    <View style={styles.container}>
      <Metric iconName="temperature-celsius" value={weather?.tempC} unit="°" />
      <Metric
        iconName="temperature-fahrenheit"
        value={weather?.tempF}
        unit="°"
      />
      <Metric iconName="water-outline" value={weather?.humidity} unit="%" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 48,
  },
})

export default MetricDetails
