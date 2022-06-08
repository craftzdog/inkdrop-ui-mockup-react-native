import { Theme } from '@/themes'
import { useTheme } from '@shopify/restyle'
import * as React from 'react'
import { StatusBar as NativeStatusBar } from 'react-native'

export default function StatusBar() {
  const theme = useTheme<Theme>()

  return (
    <NativeStatusBar
      animated={true}
      backgroundColor={theme.colors.$windowBackground || 'white'}
      barStyle={theme.statusBar?.barStyle}
    />
  )
}
