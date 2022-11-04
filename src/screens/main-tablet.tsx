import { Box } from '@/atoms'
import ThreeColumnLayout from '@/components/three-column-layout'
import useResponsiveLayout from '@/hooks/use-responsive-layout'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback, useState } from 'react'
import NoteListScreenForTablet from './note-list-tablet'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

export default function MainScreenForTablet({ navigation }: Props) {
  const { isPortrait } = useResponsiveLayout()
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const toggleSidebar = useCallback(() => {
    setSidebarVisible(visible => !visible)
  }, [])

  const leftViewVisible = !isPortrait && sidebarVisible

  return (
    <ThreeColumnLayout
      renderLeftView={() => <Box flex={1} bg="red" />}
      renderMiddleView={() => (
        <NoteListScreenForTablet
          navigation={navigation}
          onSidebarToggle={toggleSidebar}
        />
      )}
      renderRightView={() => <Box flex={1} bg="blue" />}
      leftViewVisible={leftViewVisible}
    />
  )
}
