import { atom } from 'jotai'

export const searchQueryAtom = atom<string>('')
export const searchInputHasFocusAtom = atom<boolean>(false)
