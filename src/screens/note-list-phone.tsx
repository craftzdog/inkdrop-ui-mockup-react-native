import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { editingNoteIdAtom } from '@/states/editor'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useSetAtom } from 'jotai'
import React, { useCallback } from 'react'
import NoteListScreen from './note-list'

interface Props {
  navigation: CompositeNavigationProp<
    DrawerNavigationProp<HomeDrawerParamList>,
    NativeStackNavigationProp<RootStackParamList>
  >
}

const NoteListScreenForPhone: React.FC<Props> = ({ navigation }) => {
  const setEditingNoteId = useSetAtom(editingNoteIdAtom)

  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer()
  }, [])

  const handleNoteListItemPress = useCallback((noteId: string) => {
    setEditingNoteId(noteId)
    navigation.navigate('Detail')
  }, [])

  return (
    <NoteListScreen
      onSidebarToggle={handleSidebarToggle}
      onNoteSelect={handleNoteListItemPress}
    />
  )
}

export default NoteListScreenForPhone
