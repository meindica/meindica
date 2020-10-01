import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as JSSearch from 'js-search'
import { useColorMode, Flex, Stack, IconButton, Text } from '@chakra-ui/core'
import { transformResults } from '../transformers/results'
import SearchTermsSanitizer from '../utils/SearchTermsSanitizer'

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
  search.sanitizer = SearchTermsSanitizer
  search.searchIndex = new JSSearch.TfIdfSearchIndex('id')

  search.addIndex('locale')
  search.addIndex('senority')
  search.addIndex('stack')

  search.addDocuments(data)

  return search
}

function sortByDate(order, list) {
  if (order === 'desc') {
    return [...list].reverse()
  }

  return list
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query fetchPersons {
      persons: allGoogleSheetRespostasAoFormulario1Row {
        edges {
          node {
            id
            carimbodedatahora
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
  const [sort, setSort] = useState(() => 'desc')

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

  const handleCriteriaChange = useCallback(
    ({ target }) => setCriteria(target.value),
    []
  )

  const handleChangeSort = useCallback(
    ({ target }) => setSort(() => target.value),
    []
  )

  const persons = useMemo(() => (results.length ? results : all), [
    results,
    all,
  ])

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

          <Search
            flex={1}
            onChange={handleCriteriaChange}
            onSortChange={handleChangeSort}
            value={criteria}
            sort={sort}
          />

          <Text> Você está visualizando {persons.length} pessoas { criteria && `de ${all.length}`} </Text>

          <List>
            {sortByDate(sort, persons).map(person => (
              <Card key={person.id} {...person} />
            ))}
          </List>
        </Stack>
      </Row>
    </Layout>
  )
}

export default IndexPage
