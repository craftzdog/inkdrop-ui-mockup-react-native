import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'react-native'
import light, { Theme } from './light'

// Palette
const p = {
  base000: '#00141A',
  base00: '#002b36',
  base01: '#073642',
  base02: '#586e75',
  base03: '#657b83',
  base04: '#839496',
  base05: '#93a1a1',
  base06: '#eee8d5',
  base07: '#fdf6e3',
  red: '#dc322f',
  orange: '#cb4b16',
  yellow: '#b58900',
  green: '#859900',
  cyan: '#2aa198',
  blue: '#268bd2',
  violet: '#6c71c4',
  magenta: '#d33682'
}

export const theme: Theme = createTheme({
  ...light,
  colors: {
    ...light.colors,
    $primary: p.blue,
    $secondary: p.orange,
    $windowBackground: p.base00,
    $background: p.base00,
    $foreground: p.base06,
    $separator: p.base04,
    $navbarBackground: p.base01,
    $navbarBorderBottom: p.base00,
    $headerBarBackground: p.base01,
    $sidebarBackground: p.base000,
    $sidebarForeground: p.base06,
    $sidebarSeparator: p.base07 + '20'
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
      borderRadius: 'hg',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 8
    }
  }
})

export default theme
