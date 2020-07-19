import React from 'react'
import { Text, useColorMode, useTheme } from '@chakra-ui/core'

export function Title({ children, ...props }) {
  const { colorMode } = useColorMode()
  const theme = useTheme()

  const shadow =
    colorMode === 'dark' ? theme.colors.gray[800] : theme.colors.white

  return (
    <Text
      as="h2"
      color="blue.100"
      fontSize="6xl"
      fontWeight="bolder"
      lineHeight="1"
      textShadow={`-4px -4px 0 ${shadow}, -5px -5px 0 #696A99`}
      {...props}
    >
      {children}
    </Text>
  )
}
