import React from 'react'
import { Input, Box } from '@chakra-ui/core'

export function Search({ onChange, value, ...props }) {
  return (
    <Box {...props}>
      <Input
        placeholder="Procure por stack, cidade ou senoriedade"
        borderRadius="50px"
        color="pink.400"
        size="lg"
        variant="filled"
        value={value}
        onChange={onChange}
        _focus={{
          color: 'pink.400',
          borderColor: 'pink.200',
        }}
      />
    </Box>
  )
}
