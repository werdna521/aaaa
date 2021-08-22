import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import Header from '../components/common/header'
import SearchInput from '../components/change-location/search-input'

const ChangeLocationScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Header title="Change Location" />
        <SearchInput />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081b25',
  },
  innerContainer: {
    paddingTop: 48,
    paddingBottom: 64,
    paddingHorizontal: 16,
  },
})

export default ChangeLocationScreen
