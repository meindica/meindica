import { useCallback, useEffect, useState } from 'react'
import * as JSSearch from 'js-search'
import SearchTermsSanitizer from '../utils/SearchTermsSanitizer'

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

export function useSearch({ data }) {
  const [engine, setEngine] = useState(null)
  const [results, setResults] = useState([])
  const [term, setTerm] = useState('')

  useEffect(() => {
    setEngine(() => buildIndexes(data))
  }, [data])

  const search = useCallback(term => {
      setResults(() => engine.search(term))
  }, [engine])

  const onSearch = useCallback(({ target }) => {
    setTerm(() => target.value)
    search(target.value)
  }, [search])

  return {
    search,
    onSearch,
    results,
    term,
  }
}
