import React from 'react'
import { Box, Text, Link } from '@chakra-ui/core'

export function TextAbout(props) {
  return (
    <Box {...props}>
      <Text fontSize={['base', '2xl']} color="pink.400">
        Sabe aquela vaga de tech que uma pessoa recrutadora te mandou no
        LinkedIn e você não tem interesse? Que tal indicar alguém que tá
        buscando trabalho pra ela?
      </Text>
      <Text fontSize={['base', '2xl']} color="pink.400">
        Quer entrar pra lista?{' '}
        <Link
          href="https://forms.gle/h1QbQVXxdxLmMkmR6"
          isExternal
          _hover={{ textDecoration: 'none', color: 'gray.50', outline: 'none' }}
        >
          {' '}
          Clique aqui para preencher o formulário
        </Link>
        !
      </Text>
    </Box>
  )
}
