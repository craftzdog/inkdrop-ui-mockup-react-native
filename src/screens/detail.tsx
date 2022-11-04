import React, { ReactNode } from 'react'
import { Box, Container, ScrollView, Text } from '@/atoms'
import Navbar from '@/components/navbar'
import { useAtom } from 'jotai'
import { editingNoteIdAtom } from '@/states/editor'
import NOTES from '@/fixtures/notes'

type Props = {
  renderNavBarLeft: () => ReactNode
}

export default function DetailScreen(props: Props) {
  const { renderNavBarLeft } = props
  const [editingNoteId] = useAtom(editingNoteIdAtom)
  const note = NOTES.find(n => n.id === editingNoteId)

  return (
    <Container>
      <Navbar>
        {renderNavBarLeft()}
        <Box flex={1}>
          <Text variant="navbar" textAlign="center">
            Editor
          </Text>
        </Box>
        <Box width={36} />
      </Navbar>
      <ScrollView flex={1} p="sm">
        <Text fontWeight="bold" fontSize={24} m="sm">
          {note?.title}
        </Text>
        <Text fontSize={20} m="sm">
          {note?.body}
        </Text>
      </ScrollView>
    </Container>
  )
}
