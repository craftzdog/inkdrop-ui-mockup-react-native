import React, { useCallback } from 'react'
import { Box, Container, Text, TouchableOpacity } from '@/atoms'
import FeatherIcon from '@/components/icon'
import Navbar from '@/components/navbar'
import { RootStackParamList } from '@/navs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>

export default function DetailScreen({ navigation, route }: Props) {
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
        <Text mb="hg">{JSON.stringify(route.params, null, 4)}</Text>
      </Box>
    </Container>
  )
}
