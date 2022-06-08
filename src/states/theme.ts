import { Theme, ThemeNames, themes } from '@/themes'
import { atom } from 'jotai'

const activeThemeId = atom<ThemeNames>('dark')

export const activeThemeAtom = atom<Theme>(get => {
  const themeId = get(activeThemeId)
  const themeIndex = themes.findIndex(t => t.id === themeId)
  if (themeIndex >= 0) {
    return themes[themeIndex].theme
  } else {
    return themes[0].theme
  }
})

export default activeThemeId
