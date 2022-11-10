import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigatorScreenParams } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import Sidebar from './components/sidebar'
import useDrawerEnabled from './hooks/use-drawer-enabled'
import useResponsiveLayout from './hooks/use-responsive-layout'
import DetailScreenForPhone from './screens/detail-phone'
import MainScreen from './screens/main'

export type HomeDrawerParamList = {
  Main: {}
}

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeDrawerParamList>
  Detail: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<HomeDrawerParamList>()

function Home() {
  const { isTablet } = useResponsiveLayout()
  const swipeEnabled = useDrawerEnabled()

  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerType: isTablet ? 'front' : 'back',
        drawerStyle: {
          width: isTablet ? 280 : '90%'
        },
        swipeEdgeWidth: 200,
        swipeEnabled: swipeEnabled
      }}
      drawerContent={Sidebar}
    >
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  )
}

export default function Navigations() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreenForPhone}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
