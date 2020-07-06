import React from 'react'
import { Box, Text } from '@chakra-ui/core'

export function TextAbout(props) {
  return (
    <Box {...props}>
      <Text fontSize="2xl" color="purple.400" mb={4}>
        Sabe aquela vaga de tech que uma pessoa recrutadora te mandou no
        LinkedIn e você não tem interesse? Que tal indicar alguém que tá
        buscando trabalho pra ela?
      </Text>
    </Box>
  )
}
