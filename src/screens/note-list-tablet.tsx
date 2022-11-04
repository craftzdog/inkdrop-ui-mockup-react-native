import React, { memo, useCallback } from 'react'
import NoteListScreen from './note-list'
import useResponsiveLayout from '@/hooks/use-responsive-layout'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { editingNoteIdAtom } from '@/states/editor'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useSetAtom } from 'jotai'

type Props = {
  navigation: CompositeNavigationProp<
    DrawerNavigationProp<HomeDrawerParamList>,
    NativeStackNavigationProp<RootStackParamList>
  >
  onSidebarToggle: () => any
}

const NoteListScreenForTablet: React.FC<Props> = memo(props => {
  const { navigation, onSidebarToggle } = props
  const setEditingNoteId = useSetAtom(editingNoteIdAtom)
  const { isPortrait } = useResponsiveLayout()
  const handleSidebarToggle = useCallback(() => {
    if (isPortrait) {
      navigation.toggleDrawer()
    } else {
      onSidebarToggle()
    }
  }, [isPortrait, navigation])

  const handleNoteListItemPress = useCallback((noteId: string) => {
    setEditingNoteId(noteId)
  }, [])

  return (
    <NoteListScreen
      onSidebarToggle={handleSidebarToggle}
      onNoteSelect={handleNoteListItemPress}
    />
  )
})

export default NoteListScreenForTablet
