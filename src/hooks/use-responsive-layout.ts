import { useWindowDimensions } from 'react-native'
import { RESPONSIVE_SCREEN_BREAKPOINT } from '@/consts'

const useResponsiveLayout = () => {
  const screenSize = useWindowDimensions()
  const isTablet =
    screenSize.width >= RESPONSIVE_SCREEN_BREAKPOINT ||
    screenSize.height >= RESPONSIVE_SCREEN_BREAKPOINT
  const isPortrait = screenSize.width < screenSize.height
  return { isTablet, isPortrait }
}

export default useResponsiveLayout
