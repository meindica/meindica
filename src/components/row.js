import React from 'react'
import { Flex } from '@chakra-ui/core'

export function Row({ children, ...props }) {
  return (
    <Flex {...props} w="100%" maxW="1366px" marginX="auto">
      {children}
    </Flex>
  )
}
