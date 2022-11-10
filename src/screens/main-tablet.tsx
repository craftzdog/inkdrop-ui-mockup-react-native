import Sidebar from '@/components/sidebar'
import ThreeColumnLayout from 'react-native-three-column-layout'
import useResponsiveLayout from '@/hooks/use-responsive-layout'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback, useState } from 'react'
import DetailScreenForTablet from './detail-tablet'
import NoteListScreenForTablet from './note-list-tablet'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

export default function MainScreenForTablet({ navigation }: Props) {
  const { isPortrait } = useResponsiveLayout()
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [distractionFreeMode, setDistractionFreeMode] = useState(false)

  const toggleSidebar = useCallback(() => {
    setSidebarVisible(visible => !visible)
  }, [])
  const toggleDistractionFreeMode = useCallback(() => {
    setDistractionFreeMode(enabled => !enabled)
  }, [])

  const leftViewVisible = !isPortrait && sidebarVisible && !distractionFreeMode

  return (
    <ThreeColumnLayout
      renderLeftView={() => <Sidebar />}
      renderMiddleView={() => (
        <NoteListScreenForTablet
          navigation={navigation}
          onSidebarToggle={toggleSidebar}
        />
      )}
      renderRightView={viewProps => (
        <DetailScreenForTablet
          {...viewProps}
          onDistractionFreeModeToggle={toggleDistractionFreeMode}
        />
      )}
      leftViewVisible={leftViewVisible}
      middleViewVisible={!distractionFreeMode}
    />
  )
}
