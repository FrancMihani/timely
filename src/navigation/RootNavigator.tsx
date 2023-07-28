import React from 'react'
import { useColorScheme } from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import { RootScreensNavigationProps } from './types'

const RootStack = createNativeStackNavigator<RootScreensNavigationProps>()

export default () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <RootStack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
        <RootStack.Screen name="home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
