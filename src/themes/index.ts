import light, { Theme } from './light'
import dark from './dark'
import nord from './nord'
import solarizedDark from './solarized-dark'

export type ThemeNames = 'light' | 'dark' | 'nord' | 'solarized-dark'
export interface ThemeMeta {
  id: ThemeNames
  name: string
  theme: Theme
}

export const themes: readonly ThemeMeta[] = [
  {
    id: 'light',
    name: 'Default Light',
    theme: light
  },
  {
    id: 'dark',
    name: 'Default Dark',
    theme: dark
  },
  {
    id: 'nord',
    name: 'Nord',
    theme: nord
  },
  {
    id: 'solarized-dark',
    name: 'Solarized Dark',
    theme: solarizedDark
  }
]

export type { Theme }
