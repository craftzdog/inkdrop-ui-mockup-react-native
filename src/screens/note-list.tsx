import React, { useCallback, useRef, useState } from 'react'
import { Container } from '@/atoms'
import NoteList, { Props as NoteListProps } from '@/components/note-list'
import useStickyHeader from '@/hooks/use-sticky-header'
import HeaderBar from '@/components/header-bar'
import NoteListHeaderTitleBar from '@/components/note-list-header-title-bar'
import MoveNoteSheet from '@/components/move-note-sheet'

type Props = {
  onSidebarToggle: () => any
  onNoteSelect: NoteListProps['onItemPress']
}

const NoteListScreen: React.FC<Props> = props => {
  const { onSidebarToggle, onNoteSelect } = props
  const refMoveNoteSheet = useRef<MoveNoteSheet>(null)
  const {
    handleNoteListLayout,
    handleScroll,
    headerBarStyle,
    headerBarHeight
  } = useStickyHeader()
  const [concealNoteListItem, setConcealNoteListItem] = useState<
    (() => void) | null
  >(null)

  const handleNoteListItemSwipeLeft = useCallback(
    (_noteId: string, conceal: () => void) => {
      const { current: menu } = refMoveNoteSheet
      if (menu) {
        menu.show()
        setConcealNoteListItem(() => conceal)
      }
    },
    []
  )
  const handleMoveNoteSheetClose = useCallback(() => {
    concealNoteListItem && concealNoteListItem()
    setConcealNoteListItem(null)
  }, [concealNoteListItem])

  return (
    <Container alignItems="center" justifyContent="center">
      <NoteList
        contentInsetTop={headerBarHeight}
        onScroll={handleScroll}
        onItemPress={onNoteSelect}
        onItemSwipeLeft={handleNoteListItemSwipeLeft}
        ListHeaderComponent={NoteListHeaderTitleBar}
      />
      <HeaderBar
        style={headerBarStyle}
        onLayout={handleNoteListLayout}
        onSidebarToggle={onSidebarToggle}
      ></HeaderBar>
      <MoveNoteSheet
        ref={refMoveNoteSheet}
        onClose={handleMoveNoteSheetClose}
      />
    </Container>
  )
}

export default NoteListScreen
