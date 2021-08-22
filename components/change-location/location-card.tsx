import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Area } from './types'
import Moon from '../home/moon'
import useWeathers from '../../hooks/use-weathers'
import { getCurrentWeatherIndex } from '../../utils'
import { setLocationId } from '../../lib/async-storage'

type Props = {
  area: Area
}

const LocationCard: FC<Props> = ({ area }) => {
  const { weathers, loading, error } = useWeathers(area?.id)
  const navigation = useNavigation()
  const weather = weathers?.[getCurrentWeatherIndex()]

  if (error) {
    return null
  }

  if (loading) {
    return null
  }

  const handlePress = () => {
    setLocationId(area?.id)
    navigation.goBack()
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.headerContainer}>
        <Text style={styles.temperatureText}>{weather?.tempC}°</Text>
        <Moon isMini isRandom />
      </View>
      <Text style={styles.cityText}>{area?.kota}</Text>
      <Text style={styles.districtText}>{area?.kecamatan}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#152c39',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  temperatureText: {
    color: '#f9faf5',
    fontFamily: 'inter-medium',
    fontSize: 30,
    letterSpacing: -3.5,
  },
  cityText: {
    color: '#e2e4e2',
    fontFamily: 'inter-medium',
    fontSize: 16,
  },
  districtText: {
    color: '#5e7382',
    fontFamily: 'inter-medium',
  },
})

export default LocationCard
