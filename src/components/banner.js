import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Stack, Text, Box } from '@chakra-ui/core'
import { Logo } from './logo'
import { Circle, Stripes } from './backgrounds'
import { Button } from './button'
import { Row } from './row'

const fetchBackgroundImages = graphql`
  query {
    circle: file(relativePath: { eq: "circle.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    stripes: file(relativePath: { eq: "stripes.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export function Banner() {
  const data = useStaticQuery(fetchBackgroundImages)

  return (
    <Flex
      px={6}
      w="100%"
      h="100vh"
      backgroundColor="blue.200"
      position="relative"
      overflow="hidden"
    >
      <Row
        flex={1}
        alignItems="center"
        justifyContent="flex-start"
        position="relative"
      >
        <Circle
          fluid={data.circle.childImageSharp.fluid}
          style={{ position: 'absolute' }}
        />

        <Stripes
          fluid={data.stripes.childImageSharp.fluid}
          style={{ position: 'absolute' }}
        />

        <Stack spacing={4}>
          <Logo />
          <Text
            fontSize={['lg', '2xl']}
            fontWeight="bold"
            color="yellow.100"
            maxW="40rem"
          >
            Ajude outras pessoas a entrarem no mercado de tech com um pequeno
            gesto: indicando!
          </Text>

          <Box>
            <Button as="a" href="#pessoas" mr={4} mb={4}>
              Buscar pessoas
            </Button>

            <Button
              as="a"
              href="https://forms.gle/h1QbQVXxdxLmMkmR6"
              target="_blank"
              rel="noopener noreferer"
              mb={4}
              rightIcon="arrow-forward"
            >
              Quero me inscrever
            </Button>
          </Box>
        </Stack>
      </Row>
    </Flex>
  )
}
