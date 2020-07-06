import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Logo } from '../components/logo'
import { TextAbout } from '../components/text'
import { List } from '../components/list'
import { Card } from '../components/card'
import { Search } from '../components/search'

const IndexPage = () => (
  <Layout>
    <SEO />

    <Logo />
    <TextAbout />
    <Search />

    <List>
      {[1, 2, 3, 4, 5].map(i => (
        <Card
          key={i}
          name="Wallace Oliveira"
          locale="Maringá/PR"
          senority="Junior, Pleno"
          stack="Front-end, React"
          working
        />
      ))}
    </List>
  </Layout>
)

export default IndexPage
