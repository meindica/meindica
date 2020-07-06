import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { transformResults } from '../transformers/results'
import * as JSSearch from 'js-search'

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
      persons: allGoogleSpreadsheetRepostasAoFormulario {
        edges {
          node {
            id
            cidade_estadoQueVoc_Mora_
            consideraSeMudarCasoAVagaSejaForaDaSuaCidade_
            nomeESobrenome_
            senioridadeDaVagaQueVoc_Busca_
            urlDoSeuLinkedIn_
            vagaDeTecnologiaQueVoc_T_Procurando_
            voc_Est_SemEmpregoAtualmente_
          }
        }
      }
    }
  `)
  const persons = data.persons.edges.map(transformResults)

  const [criteria, setCriteria] = useState('')
  const [results, setResults] = useState([])
  const [engine] = useState(buildIndexes(persons))

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

  return (
    <Layout>
      <SEO />

      <Logo />
      <TextAbout />
      <Search onChange={handleCriteriaChange} value={criteria} />

      <List>
        {results.length > 0 &&
          results.map(
            ({
              id,
              name,
              locale,
              senority,
              stack,
              working,
              realocate,
              linkedin,
            }) => (
              <Card
                key={id}
                name={name}
                locale={locale}
                senority={senority}
                stack={stack}
                working={working}
                realocate={realocate}
                linkedin={linkedin}
              />
            )
          )}

        {results.length <= 0 &&
          persons.map(
            ({
              id,
              name,
              locale,
              senority,
              stack,
              working,
              realocate,
              linkedin,
            }) => (
              <Card
                key={id}
                name={name}
                locale={locale}
                senority={senority}
                stack={stack}
                working={working}
                realocate={realocate}
                linkedin={linkedin}
              />
            )
          )}
      </List>
    </Layout>
  )
}

export default IndexPage
