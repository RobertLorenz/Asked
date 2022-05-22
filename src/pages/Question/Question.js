import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Question.css'

export default function Question() {
  const { id } = useParams()
  const url = 'http://localhost:3000/questions/' + id
  const { error, isPending, data: question } = useFetch(url)

  return (
    <div className="question">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {question && <>
          <h2 className="page-title">{question.title}</h2>
          <ul>
            {question.keywords.map(kw => <li key={kw}>{kw}</li>)}
          </ul>
          <p className="q">{question.question}</p>
        </>}
    </div>
  )
}