import { useParams, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import CommentSection from '../../components/CommentSection'
import './Question.css'


export default function Question( comments ) {
  const { id } = useParams()
  const url = 'http://localhost:3000/questions/' + id
  const { error, isPending, data: question} = useFetch(url)
  const history = useHistory()
  const [content,setContent] = useState('')
  
  
  const { postData, data} = useFetch('http://localhost:3000/comments/', 'POST')

  const handleSubmit =  (e) => {
    e.preventDefault()
    let questionId = id
    postData({content, questionId})
    setContent('')
  }

  const handleClick= () => {
    fetch('http://localhost:3000/questions/' + question.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }

    

  

  return (
    <div>
    <div className="question">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {question && <>
          <h2 className="page-title">{question.title}</h2>
          <ul>
            {question.keywords.map(kw => <li key={kw}>{kw}</li>)}
          </ul>
          <p className="word">Question: </p>
          <p className="q">{question.question}</p>
          <button onClick={handleClick} className="delete">Delete</button>
        </>}
    </div>
    <div className="comments">
      <h4>Comments</h4>
      
      <CommentSection />
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea 
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
    </div>
  )
}