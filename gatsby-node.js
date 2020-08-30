const fs = require('fs')
const path = require('path')
const { transformResults } = require('./src/transformers/results')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
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
        totalCount
      }
    }
  `)

  const { totalCount } = data.persons
  const persons = data.persons.edges.reverse().map(transformResults)
  const DIR = 'public'
  const PER_PAGE = 8

  const pagesCount = Math.ceil(totalCount / PER_PAGE)

  Array.from({ length: pagesCount }).forEach((_, index) => {
    const page = index + 1
    const begin = (page - 1) * PER_PAGE
    const end = begin + PER_PAGE

    fs.writeFileSync(
      path.resolve(DIR, `${page}.json`),
      JSON.stringify({
        nodes: persons.slice(begin, end),
        pageInfo: { hasNextPage: page < pagesCount }
      }, null, 2)
    )
  })

  const initialData = {
    nodes: persons.slice(0, 8),
    pageInfo: { hasNextPage: 1 < pagesCount }
  }

  createPage({
    path: '/',
    component: path.resolve('./src/templates/home.js'),
    context: initialData
  })
}
