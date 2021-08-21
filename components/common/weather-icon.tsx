import React, { FC } from 'react'
import { Image, ImageStyle, StyleProp } from 'react-native'

import { getWeatherImageUrl } from '../../utils'

type Props = {
  size?: number
  style?: StyleProp<ImageStyle>
  weatherCode: string
}

const WeatherIcon: FC<Props> = ({ style = {}, size = 24, weatherCode }) => {
  const styleProp = {
    width: size,
    height: size,
  }

  return (
    <Image
      style={[styleProp, style]}
      source={{ uri: getWeatherImageUrl(weatherCode) }}
    />
  )
}

export default WeatherIcon
