import React, { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SCREENS } from './constants/screens'
import HomeScreen from './screens'

const Stack = createNativeStackNavigator()

// TODO: add design system
const App: FC = () => {
  const [fontsLoaded] = useFonts({
    inter: Inter_400Regular,
    'inter-medium': Inter_500Medium,
    'inter-bold': Inter_700Bold,
    'inter-black': Inter_900Black,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  )
}

export default App
