import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { useWeathersContext } from '../../../contexts/weathers'
import ForecastDay from './forecast-day'

const Forecast: FC = () => {
  const { weathers, loading, error } = useWeathersContext()

  if (error) {
    return null
  }

  if (loading) {
    return null
  }

  return (
    <View style={styles.container}>
      <ForecastDay weathers={weathers?.slice(0, 4)} title="Today" />
      <ForecastDay
        style={styles.spacing}
        weathers={weathers?.slice(4, 8)}
        title="Tomorrow"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
  spacing: {
    marginTop: 24,
  },
})

export default Forecast
