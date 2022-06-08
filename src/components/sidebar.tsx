import { Box, Text } from '@/atoms'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native'
import BookList from './book-list'
import InkdropLogo from './inkdrop-logo'

const Sidebar: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])
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
      <BookList onPressItem={handleBookListItemPress} />
    </Box>
  )
}

export default Sidebar
