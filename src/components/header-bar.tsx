import React, { useCallback, useRef } from 'react'
import { TextInput as RNTextInput } from 'react-native'
import { TextInput, TouchableOpacity } from '@/atoms'
import AnimatedBox, { AnimatedBoxProps } from '@/atoms/animated-box'
import { searchInputHasFocusAtom, searchQueryAtom } from '@/states/search-bar'
import { useAtom } from 'jotai'
import HeaderBarLeftButton from './header-bar-left-button'
import FeatherIcon from './icon'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@/themes'

type Props = AnimatedBoxProps & {
  onSidebarToggle: () => any
}

const HeaderBar: React.FC<Props> = props => {
  const { onSidebarToggle, ...rest } = props
  const safeAreaInsets = useSafeAreaInsets()
  const theme = useTheme<Theme>()
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)
  const [searchInputHasFocus, setSearchInputHasFocus] = useAtom(
    searchInputHasFocusAtom
  )
  const refSearchInput = useRef<RNTextInput>(null)

  const handleSearchInputFocus = () => {
    setSearchInputHasFocus(true)
  }

  const handleSearchInputBlur = () => {
    setSearchInputHasFocus(false)
  }

  const handleClearButtonPress = () => {
    setSearchQuery('')
  }

  const handleLeftButtonPress = useCallback(() => {
    if (searchInputHasFocus) {
      const { current: input } = refSearchInput
      if (input) input.blur()
      setSearchQuery('')
    } else {
      onSidebarToggle()
    }
  }, [searchInputHasFocus, onSidebarToggle])

  const safeAreaStyle = useAnimatedStyle(
    () => ({
      opacity: withTiming(searchInputHasFocus ? 1 : 0)
    }),
    [searchInputHasFocus]
  )
  const barStyle = useAnimatedStyle(
    () => ({
      marginHorizontal: withTiming(searchInputHasFocus ? 0 : theme.spacing.lg),
      borderRadius: withTiming(searchInputHasFocus ? 0 : theme.borderRadii.md, {
        duration: 600
      })
    }),
    [searchInputHasFocus]
  )

  return (
    <AnimatedBox position="absolute" top={0} left={0} right={0} {...rest}>
      <AnimatedBox
        position="absolute"
        top={-safeAreaInsets.top}
        left={0}
        right={0}
        bottom={0}
        bg="$headerBarBackground"
        style={safeAreaStyle}
      ></AnimatedBox>
      <AnimatedBox
        flexDirection="row"
        alignItems="center"
        mx="lg"
        my="md"
        px="sm"
        minHeight={44}
        bg="$headerBarBackground"
        style={barStyle}
      >
        <HeaderBarLeftButton
          onPress={handleLeftButtonPress}
          backButtonVisible={searchInputHasFocus}
        />
        <TextInput
          ref={refSearchInput}
          flex={1}
          ml="sm"
          fontSize={18}
          autoCapitalize="none"
          color="$foreground"
          placeholder="Search notes"
          placeholderColor="$fieldInputPlaceholderTextColor"
          value={searchQuery}
          onFocus={handleSearchInputFocus}
          onBlur={handleSearchInputBlur}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity
            m="xs"
            p="xs"
            rippleBorderless
            onPress={handleClearButtonPress}
          >
            <FeatherIcon name="x" size={22} />
          </TouchableOpacity>
        )}
      </AnimatedBox>
    </AnimatedBox>
  )
}

export default HeaderBar
