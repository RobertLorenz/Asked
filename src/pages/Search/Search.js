import { useFetch } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import './Search.css'
import QList from '../../components/QList'
import { useMode } from "./../../hooks/useMode"

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:3000/questions?q=' + query
  const { error, isPending, data } = useFetch(url)

  const { mode } = useMode()

  return (
    <div className={`search ${mode}`}>
      <h2 className="page-title-search">Questions about: "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <QList questions={data} /> }
    </div>
  )
}