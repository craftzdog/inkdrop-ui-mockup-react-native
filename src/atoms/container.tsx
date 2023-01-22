import * as React from 'react'
import { BoxProps } from '@shopify/restyle'
import { Theme } from '@/themes'
import Box from './box'

type Props = BoxProps<Theme> & {
  children: React.ReactNode
}

const Container: React.FC<Props> = props => (
  <Box {...props} flex={1} backgroundColor="$background">
    {props.children}
  </Box>
)

export default Container
