import React, { useState, useMemo, useCallback } from 'react'
import { useColorMode, Flex, Stack, IconButton, Button } from '@chakra-ui/core'

import { STATUS, useLoadMore } from '../hooks/useLoader'
import { useSearch } from '../hooks/useSearch'

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

const IndexPage = ({ pageContext }) => {
  const { data, pageInfo, status, loadNextPage } = useLoadMore({
    initialData: pageContext.nodes,
    initialPageInfo: pageContext.pageInfo
  })
  const { colorMode, toggleColorMode } = useColorMode()
  const { onSearch, results, term } = useSearch({ data })
  const [sort, setSort] = useState(() => 'desc')

  const handleChangeSort = useCallback(
    ({ target }) => setSort(() => target.value),
    []
  )

  const persons = useMemo(
    () => ((term.length > 2) ? results : data),
    [results, data, term]
  )

  const isLoading = status === STATUS.loading
  const shouldRenderLoadMoreButton = pageInfo.hasNextPage && term.length < 3

  const backgroundButtonColor = { dark: 'blue.100', light: 'blue.200' }
  const colorButton = { dark: 'black', light: 'white' }
  const stateButton = { dark: 'blue.200', light: 'blue.100' }

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
            onChange={onSearch}
            onSortChange={handleChangeSort}
            value={term}
            sort={sort}
          />


          <List>
            {sortByDate(sort, persons).map(person => (
              <Card key={person.id} {...person} />
            ))}
          </List>

          {shouldRenderLoadMoreButton && (
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
