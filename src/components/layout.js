/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import { Flex, Stack } from '@chakra-ui/core'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <Flex py={[8, 16]} px={[4, 8]} maxW="1440px" marginX="auto">
      <Stack spacing={[8, 16]} width="100%">
        {children}
      </Stack>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
