import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useColorMode, Flex, Stack, IconButton, Button } from '@chakra-ui/core'
import * as JSSearch from 'js-search'
import SearchTermsSanitizer from '../utils/SearchTermsSanitizer'

import { STATUS, useLoadMore } from '../hooks/useLoader'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { List } from '../components/list'
import { Card } from '../components/card'
import { Search } from '../components/search'
import { Banner } from '../components/banner'
import { Row } from '../components/row'
import { Title } from '../components/title'

function sortByDate(order, list) {
  if (order === 'asc') {
    return [...list].reverse()
  }

  return list
}

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

const IndexPage = ({ pageContext }) => {
  const { data, loadNextPage, pageInfo, status } = useLoadMore({
    initialData: pageContext.nodes,
    initialPageInfo: pageContext.pageInfo
  })

  const [criteria, setCriteria] = useState('')
  const [results, setResults] = useState([])
  const [sort, setSort] = useState(() => 'desc')
  const [engine, setEngine] = useState(null)

  const { colorMode, toggleColorMode } = useColorMode()

  const backgroundButtonColor = { dark: 'blue.100', light: 'blue.200' }
  const colorButton = { dark: 'black', light: 'white' }
  const stateButton = { dark: 'blue.200', light: 'blue.100' }

  useEffect(() => {
    setEngine(() => buildIndexes(data))
  }, [data])

  useEffect(() => {
    if (criteria.length > 2) {
      const results = engine.search(criteria)
      setCriteria(criteria)

      setResults(() => results)
    }

    if (criteria.length <= 0) {
      setResults(() => [])
      setCriteria(() => '')
    }
  }, [criteria, engine])

  const handleCriteriaChange = useCallback(
    ({ target }) => setCriteria(target.value),
    []
  )

  const handleChangeSort = useCallback(
    ({ target }) => setSort(() => target.value),
    []
  )

  const persons = useMemo(() => ((criteria.length > 2) ? results : data), [results, data, criteria])

  const isLoading = status === STATUS.loading

  return (
    <Layout>
      <SEO />

      <Banner />

      <Row py={32} px={4} direction="column" id="pessoas">
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


          <List>
            {sortByDate(sort, persons).map(person => (
              <Card key={person.id} {...person} />
            ))}
          </List>

          {(pageInfo.hasNextPage && criteria.length < 2) && (
            <Button
              borderRadius="lg"
              onClick={loadNextPage}
              isDisabled={isLoading}
              isLoading={isLoading}
              color={colorButton[colorMode]}
              size="lg"
              backgroundColor={backgroundButtonColor[colorMode]}
              _hover={{ backgroundColor: stateButton[colorMode] }}
              _focus={{ backgroundColor: stateButton[colorMode] }}
              _active={{ backgroundColor: stateButton[colorMode] }}
            >
              Carregar mais
            </Button>
          )}
        </Stack>
      </Row>
    </Layout>
  )
}

export default IndexPage
