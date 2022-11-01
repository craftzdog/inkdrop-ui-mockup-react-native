import { Container, Text } from '@/atoms'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

export default function MainScreenForTablet({ navigation }: Props) {
  return (
    <Container justifyContent="center" alignItems="center">
      <Text>Tablet layout!</Text>
    </Container>
  )
}
