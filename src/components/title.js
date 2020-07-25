import React from 'react'
import { Text, useTheme, useColorMode } from '@chakra-ui/core'

export function Title({ children, ...props }) {
  const { colorMode } = useColorMode()
  const theme = useTheme()

  const color = { light: theme.colors.blue[200], dark: theme.colors.blue[100] }

  return (
    <Text
      as="h2"
      color="transparent"
      fontSize={['5xl', '6xl']}
      fontWeight="bolder"
      lineHeight="1"
      style={{ WebkitTextStroke: `2px ${color[colorMode]}` }}
      textShadow={`5px 5px 0 ${color[colorMode]}`}
      {...props}
    >
      {children}
    </Text>
  )
}
