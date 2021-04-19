import { useCallback, useEffect, useState } from 'react'
import path from 'path'
import * as JSSearch from 'js-search'
import SearchTermsSanitizer from '../utils/SearchTermsSanitizer'

const fetchAllData = async () => {
  const files = path.join('/', `all.json`)
  const response = await fetch(files)
  const { nodes } = await response.json()

  return Promise.resolve(nodes)
}

async function buildIndexes() {
  const search = new JSSearch.Search('id')
  const data = await fetchAllData()

  search.indexStrategy = new JSSearch.PrefixIndexStrategy()
  search.sanitizer = SearchTermsSanitizer
  search.searchIndex = new JSSearch.TfIdfSearchIndex('id')

  search.addIndex('locale')
  search.addIndex('senority')
  search.addIndex('stack')

  search.addDocuments(data)

  return search
}

export function useSearch() {
  const [engine, setEngine] = useState(null)
  const [results, setResults] = useState([])
  const [term, setTerm] = useState('')

  useEffect(() => {
    async function buildSearch() {
      try {
        const search = await buildIndexes()
        setEngine(search)
      } catch (error) {
        alert('Ocorreu um erro ao buscar')
      }
    }

    buildSearch()
  }, [])

  const search = useCallback(
    term => {
      setResults(() => engine.search(term))
    },
    [engine]
  )

  const onSearch = useCallback(
    ({ target }) => {
      setTerm(() => target.value)
      search(target.value)
    },
    [search]
  )

  return {
    search,
    onSearch,
    results,
    term,
  }
}
