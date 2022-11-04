import { Container } from '@/atoms'
import ResponsiveLayout from '@/components/responsive-layout'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import MainScreenForPhone from './main-phone'
import MainScreenForTablet from './main-tablet'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

export default function MainScreen(props: Props) {
  return (
    <Container>
      <ResponsiveLayout
        renderOnPhone={() => <MainScreenForPhone {...props} />}
        renderOnTablet={() => <MainScreenForTablet {...props} />}
      />
    </Container>
  )
}
