import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

type Props = {
  title: string
}

const ICON_SIZE = 24

const Header: FC<Props> = ({ title }) => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <MaterialCommunityIcons
          name="chevron-left"
          color="#f9faf5"
          size={ICON_SIZE}
        />
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
  },
  titleText: {
    color: '#f9faf5',
    fontFamily: 'inter-medium',
    fontSize: 30,
    letterSpacing: -2,
    marginLeft: 8,
  },
})

export default Header
