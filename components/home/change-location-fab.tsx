import React, { FC } from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { SCREENS } from '../../constants/screens'

const ChangeLocationFAB: FC = () => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate(SCREENS.CHANGE_LOCATION as never)
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>Change Location</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#e66fb3',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  text: {
    color: '#f9faf5',
    fontFamily: 'inter-medium',
    fontSize: 18,
  },
})

export default ChangeLocationFAB
