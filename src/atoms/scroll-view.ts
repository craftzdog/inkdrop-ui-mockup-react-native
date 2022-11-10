import { Theme } from '@/themes'
import {
  ScrollView as NativeScrollView,
  ScrollViewProps as NativeScrollViewProps
} from 'react-native'
import { createBox } from '@shopify/restyle'

const ScrollView = createBox<Theme, NativeScrollViewProps>(NativeScrollView)
export type ScrollViewProps = React.ComponentProps<typeof ScrollView>

export default ScrollView
