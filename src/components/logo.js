import React from 'react'
import { Box } from '@chakra-ui/core'
import MeIndicaLogo from '../images/logo.svg'

export function Logo(props) {
  return (
    <Box {...props}>
      <MeIndicaLogo />
    </Box>
  )
}
