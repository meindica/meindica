import React from 'react'
import { Box, Text, Stack } from '@chakra-ui/core'

export function Card({ name, locale, senority, stack, working, realocate }) {
  return (
    <Box backgroundColor="pink.200" p={4} borderRadius="8px">
      <Text as="h2" fontWeight="bold" fontSize="lg">
        {name}
      </Text>
      <Text mb={4}>{locale}</Text>

      <Stack spacing={2}>
        <Text>{senority}</Text>
        <Text>{stack}</Text>
        <Text>Trabalhando: {working ? 'Sim' : 'Não'}</Text>
        <Text>Disponível para mudança: {realocate ? 'Sim' : 'Não'}</Text>
      </Stack>
    </Box>
  )
}
