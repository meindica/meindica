import React from 'react'
import { Input, Box, Tag, TagCloseButton, Stack } from '@chakra-ui/core'

export function Search({ criteria, ...props }) {
  return (
    <Box {...props}>
      <Input
        placeholder="Procure por stack, cidade ou senoriedade"
        borderRadius="50px"
        color="pink.400"
        size="lg"
        variant="filled"
        _focus={{
          color: 'pink.400',
          borderColor: 'pink.200',
        }}
      />

      {criteria.length > 0 && (
        <Stack mt={4} spacing={4} isInline>
          {criteria.map(i => (
            <Tag rounded="full" variantColor="pink">
              {i}
              <TagCloseButton />
            </Tag>
          ))}
        </Stack>
      )}
    </Box>
  )
}
