import React from 'react'
import { Button, Flex } from '@chakra-ui/core'

export function Header() {
  return (
    <Flex
      py={4}
      direction="row"
      w="100%"
      maxW="1366px"
      marginX="auto"
      justifyContent="flex-end"
    >
      <Button
        variantColor="yellow"
        mr={4}
        color="blue.200"
        borderRadius="15px"
        borderWidth="2px"
        borderColor="yellow.100"
        _hover={{ color: 'yellow.100', backgroundColor: 'transparent' }}
      >
        Inscreva-se
      </Button>
      <Button
        variant="outline"
        borderColor="yellow.100"
        borderWidth="2px"
        color="yellow.100"
        borderRadius="15px"
        _hover={{
          color: 'blue.200',
          backgroundColor: 'yellow.100',
        }}
      >
        Buscar pessoas
      </Button>
    </Flex>
  )
}
