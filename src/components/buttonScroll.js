import React, { useState, useEffect, useCallback } from 'react'
import { Button } from './button'
import { useColorMode, theme } from '@chakra-ui/core'

export function ButtonScroll({ children, ...props }) {
  const [showScroll, setShowScroll] = useState(false)

  const { colorMode } = useColorMode()
  const backgroundColor = { light: 'white', dark: '#1A202C' }

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const checkScrollTop = useCallback(() => {
    const shouldShowButtonScroll = window.pageYOffset > window.innerHeight
    setShowScroll(shouldShowButtonScroll)
  }, [setShowScroll])

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  })

  return (
    <Button
      backgroundColor={backgroundColor[colorMode]}
      color="blue.100"
      borderColor="blue.100"
      onClick={scrollTop}
      position="fixed"
      zIndex={theme.zIndices.docked}
      cursor="pointer"
      bottom={5}
      right={5}
      rightIcon="arrow-up"
      display={showScroll ? 'flex' : 'none'}
      _hover={{
        backgroundColor: 'blue.100',
        color: 'white',
      }}
      _focus={{
        backgroundColor: 'blue.100',
        color: 'white',
      }}
      _active={{
        backgroundColor: 'blue.100',
        color: 'white',
      }}
      {...props}
    >
      {children}
    </Button>
  )
}
