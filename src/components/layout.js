/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CSSReset />
      <ThemeProvider>{children}</ThemeProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
