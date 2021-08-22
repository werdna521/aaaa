import React, { FC, useEffect, useState } from 'react'
import { FlatList, StyleSheet, TextInput, View } from 'react-native'

import LocationCard from './location-card'
import { Area } from './types'
import { AREA } from '../../constants/area'

const SearchInput: FC = () => {
  const [value, setValue] = useState(null)
  const [filteredArea, setFilteredArea] = useState<Area[]>(AREA)

  useEffect(() => {
    // filter areas by city
    setFilteredArea(
      AREA.filter(({ kota }) => {
        return kota.toLowerCase().includes(value ?? '')
      }),
    )
  }, [value])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search ..."
        placeholderTextColor="#5e7382"
        value={value}
        onChangeText={setValue}
      />
      <FlatList
        data={filteredArea}
        renderItem={({ item }) => <LocationCard area={item} />}
        keyExtractor={({ id }) => `location-${id}`}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 24,
    marginBottom: 8,
  },
  textInput: {
    color: '#f9faf5',
    fontFamily: 'inter',
    fontSize: 16,
    borderBottomColor: '#5e7382',
    borderBottomWidth: 1,
    marginBottom: 8,
  },
})

export default SearchInput
