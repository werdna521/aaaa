import AsyncStorage from '@react-native-async-storage/async-storage'

const KEY = '@location-id'

export const getLocationId = (): Promise<string> => {
  return AsyncStorage.getItem(KEY)
}

export const setLocationId = (value: string): Promise<void> => {
  return AsyncStorage.setItem(KEY, value)
}
