import React from 'react'
import { Button as CButton } from '@chakra-ui/core'

export function Button({ children, ...props }) {
  return (
    <CButton
      variant="outline"
      color="yellow.100"
      borderWidth="2px"
      borderColor="yellow.100"
      borderRadius="15px"
      size="lg"
      _hover={{
        backgroundColor: 'yellow.200',
        color: 'blue.200',
      }}
      _focus={{
        backgroundColor: 'yellow.200',
        color: 'blue.200',
      }}
      _active={{
        backgroundColor: 'yellow.100',
        color: 'blue.200',
      }}
      {...props}
    >
      {children}
    </CButton>
  )
}
