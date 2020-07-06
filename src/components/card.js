import React from 'react'
import { Box, Text, Stack } from '@chakra-ui/core'

export function Card({ name, locale, senority, stack, working }) {
  return (
    <Box backgroundColor="purple.200" p={4} borderRadius="8px">
      <Text as="h2" fontWeight="bold" fontSize="lg">
        {name}
      </Text>
      <Text mb={4}>{locale}</Text>

      <Stack spacing={2}>
        <Text>{senority}</Text>
        <Text>Stack: {stack}</Text>
        <Text color="gray.700">
          {working
            ? 'Está empregado no momento'
            : 'Não está trabalhando no momento'}
        </Text>
      </Stack>
    </Box>
  )
}
