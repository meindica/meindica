import React, { memo } from 'react'
import { Box, Text, Stack, Link, Icon, useColorMode } from '@chakra-ui/core'

const TextIcon = ({ icon, children }) => {
  const { colorMode } = useColorMode()
  const textColor = { light: 'white', dark: 'black' }

  return (
    <Text color={textColor[colorMode]}>
      <Icon fill="currentColor" name={icon} mr={2} width="20px" height="20px" />
      {children}
    </Text>
  )
}

function CardItem({
  name,
  locale,
  senority,
  stack,
  working,
  realocate,
  linkedin,
}) {
  const { colorMode } = useColorMode()

  const textColor = { light: 'white', dark: 'black' }
  const backgroundColor = { light: 'blue.200', dark: 'blue.100' }

  return (
    <Box backgroundColor={backgroundColor[colorMode]} p={4} borderRadius="8px">
      <Link href={linkedin} isExternal _hover={{ textDecoration: 'none' }}>
        <Text
          color={textColor[colorMode]}
          as="h2"
          fontWeight="bold"
          fontSize="lg"
          mb={5}
        >
          {name}
        </Text>

        <Stack spacing={2}>
          <TextIcon icon="location">{locale}</TextIcon>
          <TextIcon icon="graduate">{senority}</TextIcon>
          <TextIcon icon="star">{stack}</TextIcon>
          <TextIcon icon="hat">
            {working ? 'Trabalhando' : 'Não está trabalhando'}
          </TextIcon>
          <TextIcon icon="truck">
            {realocate
              ? 'Disponível para mudança'
              : 'Não está disponível para mudança'}
          </TextIcon>
        </Stack>
      </Link>
    </Box>
  )
}

export const Card = memo(CardItem)
