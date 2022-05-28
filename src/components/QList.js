import './QList.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function QList({ questions }) {
  const [comments, setComments] = useState([])
  let array =  []

  useEffect(() => {
    const requestOptions = {
      method: 'GET'
    }
    fetch("http://localhost:3000/comments", requestOptions)
      .then(response => response.json())
      .then(data => setComments(data))
    },[])

  comments.map(comment => {
    array.push(comment.questionId)
  })
    

  if(questions.length === 0){
    return <div className="error">No results</div>
  }

  
  return (
    <div className="question-list">
      {questions.map(question => (
        <div key={question.id} className="card">
          <h3>{question.title}</h3>
          <div>{question.question.substring(0, 100)}...</div>
          <p>{array.filter(item => item == question.id).length} Answers</p>
          <Link to={`/questions/${question.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}