import React, { useCallback } from 'react'
import { Theme } from '@/themes'
import { createBox } from '@shopify/restyle'
import {
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent
} from 'react-native'
import NoteListItem from './note-list-item'
import NOTES from '@/fixtures/notes'
import { Note } from '@/models'
import Animated, { AnimateProps } from 'react-native-reanimated'
import { Box } from '@/atoms'

const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<Note>>>(
  Animated.FlatList
)

export interface Props {
  contentInsetTop: number
  ListHeaderComponent?: React.ComponentType<any> | null | undefined
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onItemPress: (noteId: string) => void
  onItemSwipeLeft: (noteId: string, cancel: () => void) => void
}

const NoteList: React.FC<Props> = ({
  ListHeaderComponent,
  onScroll,
  contentInsetTop,
  onItemPress,
  onItemSwipeLeft
}) => {
  const renderItem = useCallback(
    ({ item }: { item: Note }) => {
      return (
        <NoteListItem
          {...item}
          onPress={onItemPress}
          onSwipeLeft={onItemSwipeLeft}
        />
      )
    },
    [onItemPress, onItemSwipeLeft]
  )

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={NOTES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width="100%"
      onScroll={onScroll}
      scrollEventThrottle={16}
      ListHeaderComponent={
        <Box>
          <>
            <Box width="100%" height={contentInsetTop}></Box>
            {ListHeaderComponent && <ListHeaderComponent />}
          </>
        </Box>
      }
    />
  )
}

export default NoteList
