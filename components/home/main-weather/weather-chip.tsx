import React, { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'

import Chip from '../../common/chip'
import { getWeatherImageUrl } from '../../../utils'

type Props = {
  text: string
  weatherCode: string
}

const IMAGE_SIZE = 24

const WeatherChip: FC<Props> = ({ text, weatherCode }) => {
  return (
    <View style={styles.container}>
      <Chip text={text} />
      <Image
        style={styles.weatherImage}
        source={{ uri: getWeatherImageUrl(weatherCode) }}
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
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginLeft: 16,
  },
})

export default WeatherChip
