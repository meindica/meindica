import path from 'path'
import { useState } from 'react'

export const STATUS = {
  idle: 'idle',
  loading: 'loading',
  done: 'done',
}

export function useLoadMore ({ initialPageInfo, initialData }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState(initialData)
  const [pageInfo, setPageInfo] = useState(initialPageInfo)
  const [status, setStatus] = useState(STATUS.idle)

  const loadNextPage = async () => {
    const nextPage = currentPage + 1
    setCurrentPage(nextPage)
    setStatus(STATUS.loading)

    const files = path.join('/', `${nextPage}.json`)

    const response = await fetch(files)
    const data = await response.json()

    setData(state => [...state, ...data.nodes])
    setPageInfo(() => data.pageInfo)
    setStatus(() => STATUS.done)
  }

  return {
    currentPage,
    loadNextPage,
    pageInfo,
    data,
    status
  }
}
