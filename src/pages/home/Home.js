import './Home.css'
import { useFetch } from '../../hooks/useFetch'
import QList from '../../components/QList'

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/questions')
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <QList questions = {data}/>}
    </div>
  )
}