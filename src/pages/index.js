import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as JSSearch from 'js-search'
import { useColorMode, Flex, Switch } from '@chakra-ui/core'
import { transformResults } from '../transformers/results'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Logo } from '../components/logo'
import { TextAbout } from '../components/text'
import { List } from '../components/list'
import { Card } from '../components/card'
import { Search } from '../components/search'

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

      <Flex align="flex-end" justify="space-between">
        <Logo />
        <Switch
          onChange={toggleColorMode}
          color="cyan"
          size="lg"
          isChecked={colorMode === 'light'}
          title={`Alternar para modo ${colorMode === 'light' ? 'escuro' : 'claro'}`}
        />
      </Flex>

      <TextAbout />
      <Search onChange={handleCriteriaChange} value={criteria} />

      <List>
        {persons.map(person => <Card key={person.id} {...person} />)}
      </List>
    </Layout>
  )
}

export default IndexPage
