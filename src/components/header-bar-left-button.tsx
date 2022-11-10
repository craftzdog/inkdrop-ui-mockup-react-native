import React from 'react'
import { AnimatedBox, Box, TouchableOpacity } from '@/atoms'
import { AnimatedBoxProps } from '@/atoms/animated-box'
import FeatherIcon from '@/components/icon'
import { Easing, useAnimatedStyle, withTiming } from 'react-native-reanimated'

type Props = AnimatedBoxProps & {
  onPress: () => void
  backButtonVisible: boolean
}

const HeaderBarLeftButton: React.FC<Props> = props => {
  const { onPress, backButtonVisible } = props

  const menuButtonStyle = useAnimatedStyle(
    () => ({
      transform: [
        { rotateZ: withTiming(backButtonVisible ? `0deg` : `180deg`) }
      ],
      opacity: withTiming(backButtonVisible ? 0 : 1, {
        easing: Easing.out(Easing.quad)
      })
    }),
    [backButtonVisible]
  )
  const backButtonStyle = useAnimatedStyle(
    () => ({
      transform: [
        { rotateZ: withTiming(backButtonVisible ? `0deg` : `180deg`) }
      ],
      opacity: withTiming(backButtonVisible ? 1 : 0, {
        easing: Easing.in(Easing.quad)
      })
    }),
    [backButtonVisible]
  )

  return (
    <TouchableOpacity m="xs" p="xs" onPress={onPress} rippleBorderless>
      <AnimatedBox
        position="absolute"
        width={30}
        height={30}
        alignItems="center"
        justifyContent="center"
        style={menuButtonStyle}
      >
        <FeatherIcon name="menu" size={22} />
      </AnimatedBox>
      <AnimatedBox
        position="absolute"
        width={30}
        height={30}
        alignItems="center"
        justifyContent="center"
        style={backButtonStyle}
      >
        <FeatherIcon name="arrow-left" size={26} />
      </AnimatedBox>
      <Box width={22} height={22} />
    </TouchableOpacity>
  )
}

export default HeaderBarLeftButton
