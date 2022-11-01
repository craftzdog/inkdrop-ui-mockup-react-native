import React, { useCallback, useRef } from 'react'
import { TextInput as RNTextInput } from 'react-native'
import { Bar, TextInput } from '@/atoms'
import AnimatedBox, { AnimatedBoxProps } from '@/atoms/animated-box'
import { searchInputHasFocusAtom, searchQueryAtom } from '@/states/search-bar'
import { useAtom } from 'jotai'
import HeaderBarLeftButton from './header-bar-left-button'

type Props = AnimatedBoxProps & {
  onSidebarToggle: () => any
}

const HeaderBar: React.FC<Props> = props => {
  const { onSidebarToggle, ...rest } = props
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

  const handleLeftButtonPress = useCallback(() => {
    if (searchInputHasFocus) {
      const { current: input } = refSearchInput
      if (input) input.blur()
      setSearchQuery('')
    } else {
      onSidebarToggle()
    }
  }, [searchInputHasFocus, onSidebarToggle])

  return (
    <AnimatedBox position="absolute" top={0} left={0} right={0} {...rest}>
      <Bar
        variant="headerBar"
        flexDirection="row"
        alignItems="center"
        mx="lg"
        my="md"
        px="sm"
        minHeight={44}
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
      </Bar>
    </AnimatedBox>
  )
}

export default HeaderBar
