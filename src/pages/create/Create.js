import { useState, useRef, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useHistory } from 'react-router-dom'
import './Create.css'
import { useMode } from '../../hooks/useMode'

export default function Create() {  
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [newKeyword, setNewKeyword] = useState('')
  const [keywords, setKeywords] = useState([])
  const [likes, setLikes] = useState(0)
  const keywordInput = useRef(null)
  const history = useHistory()
  const { mode } = useMode()

  const { postData, data, error } = useFetch('http://localhost:3000/questions', 'POST')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    postData({title, question, keywords, likes})
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const kw = newKeyword.trim()

    if (kw && !keywords.includes(kw)) {
      setKeywords(prevKeywords => [...prevKeywords, newKeyword])
    }
    setNewKeyword('')
    keywordInput.current.focus()
  }

  useEffect(() => {
    if(data){
      history.push("/")
    }
  },[data])


  return (
    <div className={`create ${mode}`}>
      <h2 className="page-title-create">Ask something</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Question keywords:</span>
          <div className="keywords">
            <input 
              type="text" 
              onChange={(e) => setNewKeyword(e.target.value)}
              value={newKeyword}
              ref={keywordInput}
            />
            <button onClick={handleAdd} className="btn">add</button>
          </div>
        </label>
        <p>Current keywords: {keywords.map(kw => <em key={kw}>{kw}, </em>)}</p>

        <label>
          <span>Question in detail:</span>
          <textarea 
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
            required
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  )
}