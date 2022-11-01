import * as React from 'react'
import { BoxProps } from '@shopify/restyle'
import { Theme } from '@/themes'
import Box from './box'

const Container: React.FC<
  BoxProps<Theme> & { children: React.ReactNode }
> = props => (
  <Box {...props} flex={1} backgroundColor="$background">
    {props.children}
  </Box>
)

export default Container
