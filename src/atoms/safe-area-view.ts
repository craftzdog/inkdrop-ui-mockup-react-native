import { Theme } from '@/themes'
import { SafeAreaView as NativeSafeAreaView, ViewProps } from 'react-native'
import { createBox } from '@shopify/restyle'

const SafeAreaView = createBox<Theme, ViewProps>(NativeSafeAreaView)
export type SafeAreaViewProps = React.ComponentProps<typeof SafeAreaView>

export default SafeAreaView
