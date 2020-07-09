import React from 'react'
import { Box, Text, Stack, Link } from '@chakra-ui/core'

export function Card({
  name,
  locale,
  senority,
  stack,
  working,
  realocate,
  linkedin,
}) {
  return (
    <Box backgroundColor="pink.200" p={4} borderRadius="8px">
      <Link href={linkedin} isExternal _hover={{ textDecoration: 'none' }}>
        <Text color="blue.900" as="h2" fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <Text color="blue.900" mb={4}>
          {locale}
        </Text>

        <Stack spacing={2}>
          <Text color="blue.900">{senority}</Text>
          <Text color="blue.900">{stack}</Text>
          <Text color="blue.900">Trabalhando: {working}</Text>
          <Text color="blue.900">
            Disponível para mudança: {realocate}
          </Text>
        </Stack>
      </Link>
    </Box>
  )
}
