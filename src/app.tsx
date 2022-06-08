import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigations from './navs'
import { ThemeProvider } from '@shopify/restyle'
import StatusBar from '@/components/status-bar'
import { useAtom } from 'jotai'
import { activeThemeAtom } from './states/theme'

const App = () => {
  const [activeTheme] = useAtom(activeThemeAtom)
  return (
    <NavigationContainer>
      <ThemeProvider theme={activeTheme}>
        <StatusBar />
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
