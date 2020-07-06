import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { transformResults } from '../transformers/results'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Logo } from '../components/logo'
import { TextAbout } from '../components/text'
import { List } from '../components/list'
import { Card } from '../components/card'
import { Search } from '../components/search'

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

  return (
    <Layout>
      <SEO />

      <Logo />
      <TextAbout />
      <Search criteria={['estágio', 'pleno']} />

      <List>
        {persons.map(
          ({ id, name, locale, senority, stack, working, realocate }) => (
            <Card
              key={id}
              name={name}
              locale={locale}
              senority={senority}
              stack={stack}
              working={working}
              realocate={realocate}
            />
          )
        )}
      </List>
    </Layout>
  )
}

export default IndexPage
