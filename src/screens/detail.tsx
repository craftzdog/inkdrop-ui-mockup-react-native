import React, { useCallback } from 'react'
import { Box, Container, Text, TouchableOpacity } from '@/atoms'
import FeatherIcon from '@/components/icon'
import Navbar from '@/components/navbar'
import { RootStackParamList } from '@/navs'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useAtom } from 'jotai'
import { editingNoteIdAtom } from '@/states/editor'

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export default function DetailScreen({ navigation }: Props) {
  const [editingNoteId] = useAtom(editingNoteIdAtom)
  const handleBackPress = useCallback(() => {
    navigation.goBack()
  }, [])

  return (
    <Container>
      <Navbar>
        <TouchableOpacity onPress={handleBackPress} p="sm">
          <FeatherIcon name="arrow-left" size={24} />
        </TouchableOpacity>
        <Box flex={1}>
          <Text variant="navbar" textAlign="center">
            Editor
          </Text>
        </Box>
        <Box width={36} />
      </Navbar>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text mb="hg">Editing Note ID: {editingNoteId}</Text>
      </Box>
    </Container>
  )
}
