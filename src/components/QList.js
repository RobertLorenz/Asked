import './QList.css'
import { Link } from 'react-router-dom'


export default function QList({ questions }) {
  return (
    <div className="question-list">
      {questions.map(question => (
        <div key={question.id} className="card">
          <h3>{question.title}</h3>
          <div>{question.question.substring(0, 100)}...</div>
          <Link to={`/questions/${question.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}