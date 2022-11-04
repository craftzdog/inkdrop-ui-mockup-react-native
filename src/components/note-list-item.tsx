import { Box, Text, TouchableOpacity } from '@/atoms'
import { Note } from '@/models'
import React, { memo, useCallback } from 'react'
import NoteListItemActionView from './note-list-item-action-view'
import SwipeableView, { BackViewProps } from './swipeable-view'

export interface ListItemProps extends Note {
  onPress: (noteId: string) => void
  onSwipeLeft?: (noteId: string, done: () => void) => void
}

const NoteListItem: React.FC<ListItemProps> = memo(props => {
  const { onPress, onSwipeLeft, id } = props
  const handlePress = useCallback(() => {
    onPress(id)
  }, [onPress, id])
  const handleSwipeLeft = useCallback(
    (done: () => void) => {
      onSwipeLeft && onSwipeLeft(id, done)
    },
    [id, onSwipeLeft]
  )

  const renderBackView = useCallback(
    ({ progress }: BackViewProps) => (
      <NoteListItemActionView progress={progress} />
    ),
    []
  )
  return (
    <SwipeableView
      bg="yellow"
      onSwipeLeft={handleSwipeLeft}
      backView={renderBackView}
    >
      <Box bg="$background">
        <TouchableOpacity
          bg="$background"
          px="lg"
          py="sm"
          onPress={handlePress}
        >
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            fontWeight="bold"
            mb="xs"
          >
            {props.title}
          </Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            fontSize={14}
            opacity={0.7}
          >
            {props.body}
          </Text>
        </TouchableOpacity>
      </Box>
    </SwipeableView>
  )
})

export default NoteListItem
