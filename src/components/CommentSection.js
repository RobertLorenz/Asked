import { useFetch } from '../hooks/useFetch'
import CommentList from './CommentList'

export default function CommentSection() {
    const { data, isPending, error } = useFetch('http://localhost:3000/comments')
    
  return (
    <div className="section">
    {error && <p className="error">{error}</p>}
    {isPending && <p className="loading">Loading...</p>}
    {data && <CommentList comments = {data}/>}
  </div>
  )
}
