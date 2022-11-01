import { searchInputHasFocusAtom } from '@/states/search-bar'
import { useAtom } from 'jotai'

const useDrawerEnabled = () => {
  const [searchInputHasFocus] = useAtom(searchInputHasFocusAtom)
  return !searchInputHasFocus
}

export default useDrawerEnabled
