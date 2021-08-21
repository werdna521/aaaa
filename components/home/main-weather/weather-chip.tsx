import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import Chip from '../../common/chip'
import WeatherIcon from '../../common/weather-icon'

type Props = {
  text: string
  weatherCode: string
}

const ICON_SIZE = 24

const WeatherChip: FC<Props> = ({ text, weatherCode }) => {
  return (
    <View style={styles.container}>
      <Chip text={text} />
      <WeatherIcon
        style={styles.weatherImage}
        weatherCode={weatherCode}
        size={ICON_SIZE}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherImage: {
    marginLeft: 16,
  },
})

export default WeatherChip
