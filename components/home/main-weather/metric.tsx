import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {
  iconName: 'temperature-celsius' | 'temperature-fahrenheit' | 'water-outline'
  value: string
  unit: string
}

const ICON_SIZE = 32

const Metric: FC<Props> = ({ iconName, value, unit }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={iconName}
        size={ICON_SIZE}
        color="#6a8bbd"
      />
      <Text style={styles.valueText}>
        {value}
        {unit}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueText: {
    color: '#e8eaea',
    marginLeft: 8,
    fontSize: 16,
  },
})

export default Metric
