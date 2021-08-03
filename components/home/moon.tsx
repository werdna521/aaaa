import React, { FC } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'

type Props = {
  style: StyleProp<ViewStyle>
}

const Moon: FC<Props> = ({ style }) => {
  return (
    <LinearGradient
      colors={['#30aafd', '#c565f9']}
      style={[styles.moon, style]}
    />
  )
}

const styles = StyleSheet.create({
  moon: {
    width: 350,
    height: 350,
    borderRadius: 175,
    transform: [{ rotateZ: '-45deg' }],
  },
})

export default Moon
