import React, { FC } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { generateRandomNumber } from '../../utils'

type Props = {
  style?: StyleProp<ViewStyle>
  isMini?: boolean
  isRandom?: boolean
}

const Moon: FC<Props> = ({ style, isMini, isRandom }) => {
  const moonStyle = isMini ? styles.miniMoon : styles.moon
  const rotateDegree = isRandom ? generateRandomNumber(360) : -45
  const transformStyle = {
    transform: [{ rotateZ: `${rotateDegree}deg` }],
  }

  return (
    <LinearGradient
      colors={['#30aafd', '#c565f9']}
      style={[moonStyle, transformStyle, style]}
    />
  )
}

const styles = StyleSheet.create({
  moon: {
    width: 350,
    height: 350,
    borderRadius: 175,
  },
  miniMoon: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
})

export default Moon
