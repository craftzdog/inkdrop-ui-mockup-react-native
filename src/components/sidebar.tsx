import { Box, Text } from '@/atoms'
import activeThemeId from '@/states/theme'
import { Theme, ThemeMeta, ThemeNames, themes } from '@/themes'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import { useNavigation } from '@react-navigation/native'
import { createBox } from '@shopify/restyle'
import { useAtom } from 'jotai'
import React, { useCallback } from 'react'
import { FlatList, FlatListProps, SafeAreaView } from 'react-native'
import InkdropLogo from './inkdrop-logo'
import ThemeListItem from './theme-list-item'

type Props = {}
const StyledFlatList = createBox<Theme, FlatListProps<ThemeMeta>>(FlatList)

const Sidebar: React.FC<Props> = () => {
  const navigation = useNavigation<DrawerNavigationHelpers>()
  const [, setActiveTheme] = useAtom(activeThemeId)

  const handleThemeItemPress = useCallback(
    (selectedThemeId: ThemeNames) => {
      setActiveTheme(selectedThemeId)
      // navigation.closeDrawer()
    },
    [navigation]
  )

  const renderThemeItem = useCallback(
    ({ item }: { item: ThemeMeta }) => {
      return <ThemeListItem theme={item} onPress={handleThemeItemPress} />
    },
    [handleThemeItemPress]
  )

  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Box
          alignItems="flex-start"
          pl="md"
          pb="sm"
          mt="xs"
          borderBottomColor="$sidebarSeparator"
          borderBottomWidth={1}
        >
          <InkdropLogo width={128} height={36} color="$sidebarForeground" />
        </Box>
      </SafeAreaView>
      <StyledFlatList
        ListHeaderComponent={() => (
          <Box p="lg" alignItems="flex-start">
            <Text color="$sidebarForeground" fontWeight="bold">
              UI Themes
            </Text>
          </Box>
        )}
        data={themes}
        keyExtractor={(t: ThemeMeta) => t.id}
        renderItem={renderThemeItem}
      />
    </Box>
  )
}

export default Sidebar
