import React from 'react'
import { Input } from '@chakra-ui/core'

export function Search(props) {
  return (
    <Input
      placeholder="Procure por stack, cidade ou senoriedade"
      borderRadius="50px"
      color="pink.400"
      size="lg"
      variant="filled"
      _focus={{
        color: 'purple.400',
        borderColor: 'purple.200',
      }}
      {...props}
    />
  )
}
