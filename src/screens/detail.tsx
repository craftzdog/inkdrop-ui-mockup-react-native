import React, { ReactNode } from 'react'
import { Box, Container, Text } from '@/atoms'
import Navbar from '@/components/navbar'
import { useAtom } from 'jotai'
import { editingNoteIdAtom } from '@/states/editor'

type Props = {
  renderNavBarLeft: () => ReactNode
}

export default function DetailScreen(props: Props) {
  const { renderNavBarLeft } = props
  const [editingNoteId] = useAtom(editingNoteIdAtom)

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
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text mb="hg">Editing Note ID: {editingNoteId}</Text>
      </Box>
    </Container>
  )
}
