import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'react-native'

// Palette
const p = {
  white: 'white',
  black: 'black',
  red: 'red',
  blue: 'blue',
  yellow: 'yellow',
  paper00: '#ffffff',
  paper10: '#f5f5f4',
  paper20: '#e6e6e6',
  paper300: '#767577',
  paper900: '#202020',
  blue70: '#2185d0',
  navy20: '#171a21',
  navy900: '#b9babc'
}

const theme = createTheme({
  spacing: {
    '0': 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 48,
    hg: 128
  },
  breakpoints: {
    phone: 0,
    tablet: 768
  },
  colors: {
    white: p.white,
    black: p.black,
    red: p.red,
    blue: p.blue,
    yellow: p.yellow,

    $primary: p.blue70,
    $windowBackground: '#f0f0f0',
    $background: p.paper10,
    $foreground: p.paper900,
    $sidebarBackground: p.navy20,
    $sidebarForeground: p.navy900,
    $sidebarSeparator: p.paper00 + '20',
    $headerBarBackground: p.paper20
  },
  borderRadii: {
    xs: 4,
    sm: 16,
    md: 24,
    lg: 64,
    hg: 128
  },
  statusBar: {
    barStyle: 'dark-content' as StatusBarStyle
  },
  textVariants: {
    defaults: {
      color: '$foreground',
      fontSize: 16
    },
    sidebar: {
      color: '$sidebarForeground'
    }
  },
  barVariants: {
    headerBar: {
      bg: '$headerBarBackground',
      borderRadius: 'hg'
    }
  }
})
export default theme

export type Theme = typeof theme
