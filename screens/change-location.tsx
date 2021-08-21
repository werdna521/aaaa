import React, { FC } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const ChangeLocationScreen: FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text>Change Location</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081b25',
  },
  scrollView: {
    flex: 1,
  },
})

export default ChangeLocationScreen
