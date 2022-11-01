import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback } from 'react'
import NoteListScreenForTablet from './note-list-tablet'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

export default function MainScreenForTablet({ navigation }: Props) {
  const toggleSidebar = useCallback(() => {
    // TODO
  }, [])

  return (
    <NoteListScreenForTablet
      navigation={navigation}
      onSidebarToggle={toggleSidebar}
    />
  )
}
