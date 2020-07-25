import React from 'react'
import { Text, useTheme } from '@chakra-ui/core'

export function Title({ children, ...props }) {
  const theme = useTheme()

  return (
    <Text
      as="h2"
      color="transparent"
      fontSize={['5xl', '6xl']}
      fontWeight="bolder"
      lineHeight="1"
      style={{ WebkitTextStroke: `2px ${theme.colors.blue[200]}` }}
      textShadow={`5px 5px 0 ${theme.colors.blue[200]}`}
      {...props}
    >
      {children}
    </Text>
  )
}
