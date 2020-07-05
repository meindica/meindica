import React from 'react'
import { Text, Flex } from '@chakra-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO />
    <Flex align="center" justify="center" minH="100vh">
      <Text as="h1" fontSize="4xl" fontWeight="bold" color="purple.300">
        Me Indica!
      </Text>
    </Flex>
  </Layout>
)

export default IndexPage
