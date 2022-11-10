import * as React from 'react'
import { Box, Text } from '@/atoms'

type Props = {}

const NoteListHeaderTitleBar = (_props: Props) => {
  return (
    <Box
      px="md"
      py="sm"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Text
        ml="xs"
        mr="md"
        fontWeight="bold"
        fontSize={14}
        numberOfLines={1}
        ellipsizeMode="middle"
        style={{ maxWidth: '70%' }}
      >
        All Notes
      </Text>
    </Box>
  )
}

export default NoteListHeaderTitleBar
