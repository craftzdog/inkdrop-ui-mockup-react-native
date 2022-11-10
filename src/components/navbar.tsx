import * as React from 'react'
import { Box, SafeAreaView } from '@/atoms'
import { StyleSheet } from 'react-native'

interface Props {
  children?: React.ReactNode
}

const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView
      backgroundColor="$navbarBackground"
      borderBottomColor="$navbarBorderBottom"
      borderBottomWidth={StyleSheet.hairlineWidth}
    >
      <Box minHeight={52} flexDirection="row" alignItems="center" px="md">
        {children}
      </Box>
    </SafeAreaView>
  )
}

export default Navbar
