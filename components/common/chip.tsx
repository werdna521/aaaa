import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
  text: string
}

const Chip: FC<Props> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353362',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  label: {
    color: 'white',
    fontFamily: 'inter-medium',
    fontSize: 16,
  },
})

export default Chip