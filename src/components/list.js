import React from 'react'
import { Grid } from '@chakra-ui/core'

export function List({children, ...props}) {
  return (
    <Grid
      gridTemplateColumns="repeat(auto-fit, minmax(288px, 1fr))"
      columnGap={4}
      rowGap={8}
      {...props}
    >
      {children}
    </Grid>
  )
}
