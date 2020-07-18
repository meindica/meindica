import React from 'react'
import { Box } from '@chakra-ui/core'
import { useWindowSize } from '../hooks/useWindowSize'

import LogoDesk from '../images/logo.inline.svg'
import LogoMobile from '../images/logo-mobile.inline.svg'

export function Logo(props) {
  const { width } = useWindowSize()

  const isMobile = width < 480

  return (
    <Box {...props}>
      {isMobile ? (
        <LogoMobile style={{ maxWidth: '100%' }} />
      ) : (
        <LogoDesk style={{ width: '45vw', maxWidth: '630px' }} />
      )}
    </Box>
  )
}
