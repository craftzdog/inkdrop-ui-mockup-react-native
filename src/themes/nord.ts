import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'react-native'
import light, { Theme } from './light'

// Palette
const p = {
  // Polar Night
  nord0: '#2E3440',
  nord1: '#3B4252',
  nord2: '#434C5E',
  nord3: '#4C566A',

  // Snow Storm
  nord4: '#D8DEE9',
  nord5: '#E5E9F0',
  nord6: '#ECEFF4',

  // Frost
  nord7: '#8FBCBB',
  nord8: '#88C0D0',
  nord9: '#81A1C1',
  nord10: '#5E81AC',

  // Aurora
  nord11: '#BF616A',
  nord12: '#D08770',
  nord13: '#EBCB8B',
  nord14: '#A3BE8C',
  nord15: '#B48EAD'
}

export const theme: Theme = createTheme({
  ...light,
  colors: {
    ...light.colors,
    $primary: p.nord10,
    $secondary: p.nord9,
    $windowBackground: p.nord0,
    $background: p.nord0,
    $foreground: p.nord4,
    $separator: p.nord3,
    $navbarBackground: p.nord1,
    $navbarBorderBottom: p.nord0,
    $headerBarBackground: p.nord2,
    $sidebarBackground: p.nord0,
    $sidebarForeground: p.nord4,
    $sidebarSeparator: p.nord4 + '20'
  },
  statusBar: {
    barStyle: 'light-content' as StatusBarStyle
  },
  textVariants: {
    ...light.textVariants
  },
  barVariants: {
    headerBar: {
      bg: '$headerBarBackground',
      borderRadius: 'hg'
    }
  }
})

export default theme
