import React from 'react'
import { Box, Text } from '@chakra-ui/core'

export function TextAbout(props) {
  return (
    <Box {...props}>
      <Text fontSize={['base', '2xl']} color="pink.400">
        Sabe aquela vaga de tech que uma pessoa recrutadora te mandou no
        LinkedIn e você não tem interesse? Que tal indicar alguém que tá
        buscando trabalho pra ela?
      </Text>
    </Box>
  )
}
