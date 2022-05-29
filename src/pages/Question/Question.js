import { useParams, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import CommentList from '../../components/CommentList'
import { useMode } from '../../hooks/useMode'
import './Question.css'


export default function Question() {
  const { id } = useParams()
  const url = 'http://localhost:3000/questions/' + id
  const { error, isPending, data: question} = useFetch(url)
  const history = useHistory()
  const [content,setContent] = useState('')
  const { mode } = useMode()
  const [questionData, setQuestionData] = useState({question})
  const [active, setActive] = useState(false)
  
  
  const { postData } = useFetch('http://localhost:3000/comments/', 'POST')

  const handleSubmit =  (e) => {
    e.preventDefault()
    let questionId = id
    let likes = 0
    postData({content, questionId, likes})
    setContent('')
    window.location.reload()
  }

  const handleClick= () => {
    fetch('http://localhost:3000/questions/' + question.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }

  const handleSelect= () => {
    setActive(true)
    fetch(url)
    .then(response => response.json())
    .then(data => { setQuestionData(data)
    console.log(questionData)})
  }

  const handleUpdate = (e) => {
    const newBody = {
      ...questionData,
      title: questionData.title,
      question: questionData.question
    }

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBody)
    }

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {setQuestionData(data)})
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
          <div className="actions">
            <button onClick={handleSelect} className="edit">Edit</button>
            <button onClick={handleClick} className="delete">Delete</button>
          </div>
        </>}
    </div>
    {active && <form className="update-question" onSubmit={handleUpdate}>
      <h3 className={`hidden ${mode}`}>Edit title:</h3>
      <label>
       <span>Title:</span>
        <textarea 
        type="text" 
        onChange={(e) => setQuestionData({...questionData, title: e.target.value})}
        value={questionData.title}
        ></textarea>
      </label>
      <h3 className={`hidden ${mode}`}>Edit question details:</h3>
      <label>
        <span>Question in detail:</span>
          <textarea 
            onChange={(e) => setQuestionData({...questionData, question: e.target.value})}
            value={questionData.question}
          ></textarea>
      </label>
      <button>Submit</button>
    </form>}
    <div className="comments">
    <CommentList />
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span className={`add ${mode}`}>Add new comment:</span>
          <textarea 
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </label>
        <button className="btn">Send</button>
      </form>
    </div>
    </div>
  )
}