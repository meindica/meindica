import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as JSSearch from 'js-search'
import { useColorMode, Flex, Stack, IconButton } from '@chakra-ui/core'
import { transformResults } from '../transformers/results'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { List } from '../components/list'
import { Card } from '../components/card'
import { Search } from '../components/search'
import { Banner } from '../components/banner'
import { Row } from '../components/row'
import { Title } from '../components/title'

function buildIndexes(data) {
  const search = new JSSearch.Search('id')

  search.indexStrategy = new JSSearch.PrefixIndexStrategy()
  search.sanitizer = new JSSearch.LowerCaseSanitizer()
  search.searchIndex = new JSSearch.TfIdfSearchIndex('id')

  search.addIndex('locale')
  search.addIndex('senority')
  search.addIndex('stack')

  search.addDocuments(data)

  return search
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query fetchPersons {
      persons: allGoogleSheetRespostasAoFormulario1Row {
        edges {
          node {
            id
            nomeesobrenome
            urldoseulinkedin
            vagadetecnologiaquevocetaprocurando
            senioridadedavagaquevocebusca
            cidadeestadoquevocemora
            considerasemudarcasoavagasejaforadasuacidade
            voceestasemempregoatualmente
          }
        }
      }
    }
  `)
  const all = data.persons.edges.map(transformResults)

  const [criteria, setCriteria] = useState('')
  const [results, setResults] = useState([])
  const [engine] = useState(buildIndexes(all))

  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    if (criteria.length > 0) {
      const results = engine.search(criteria.trim())
      setResults(older => results)
    }

    if (criteria.length <= 0) {
      setResults(() => [])
    }
  }, [criteria]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleCriteriaChange = ({ target }) => {
    setCriteria(target.value)
  }

  const persons = results.length > 0 ? results : all

  return (
    <Layout>
      <SEO />

      <Banner />

      <Row py={32} px={4} direction="column" id="persons">
        <Stack spacing={8}>
          <Flex
            justifyContent="space-between"
            alignItems={['flex-start', 'center']}
          >
            <Title>Buscar pessoas</Title>
            <IconButton
              icon={colorMode === 'light' ? 'moon' : 'sun'}
              variant="outline"
              onClick={toggleColorMode}
              borderWidth="2px"
              borderColor="blue.100"
              borderRadius="10px"
              color="blue.100"
              _focus={{
                color: 'pink.400',
                borderColor: 'pink.200',
              }}
            />
          </Flex>

          <Search flex={1} onChange={handleCriteriaChange} value={criteria} />

          <List>
            {persons.map(person => (
              <Card key={person.id} {...person} />
            ))}
          </List>
        </Stack>
      </Row>
    </Layout>
  )
}

export default IndexPage
