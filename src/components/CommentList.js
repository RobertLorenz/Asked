import { useState, useEffect } from 'react'
import likeIcon from '../assets/like.svg'
import dislikeIcon from '../assets/dislike.svg'
import deleteIcon from '../assets/thrash.svg'
import editIcon from '../assets/edit.svg'
import './CommentList.css'


export default function CommentList( ) {
  const [content,setContent] = useState("")
  const [likes, setLikes] = useState(0)
  let id = window.location.pathname.split("/").pop()
  const url = 'http://localhost:3000/comments/' + id
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET'
    }
    fetch("http://localhost:3000/comments", requestOptions)
      .then(response => response.json())
      .then(data => setComments(data));
    },[])

 
    if(comments.length === 0){
        return <div className="error">No comments on this topic</div>
      }

    const handleDelete = (commentId) => {
      const requestOptions = {
        method: 'DELETE'
      }
      fetch("http://localhost:3000/comments/" + commentId, requestOptions).then((response) => {
        return response.json()
      }).then((result) => {
        window.location.reload()
      })      
    }

    const handleSelect = (commentId) =>{
      fetch('http://localhost:3000/comments/' + commentId)
      .then(response => response.json())
      .then(data => { setContent(data)})
    }

    
    const handleUpdate = () => {
      console.log(content)
      const newBody = {...content, content: content.content}
      console.log(newBody)
      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newBody)
      }

        fetch("http://localhost:3000/comments/" + content.id, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setContent(data)})
       
          const reqtOptions = {
            method: 'GET'
          }
          fetch("http://localhost:3000/comments", reqtOptions)
            .then(response => response.json())
            .then(data => setComments(data));
        
    }

    const handlePlus = (id) => {
      setLikes(likes + 1)  
      fetch('http://localhost:3000/comments/' + id, {
        method: 'PUT',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        }, body:JSON.stringify(likes)
      })
    }
    const handleMinus = (id) => {
      setLikes(likes - 1) 
      fetch('http://localhost:3000/comments/' + id, {
        method: 'PUT',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        }, body:JSON.stringify(likes)
      }) 
    }

      
  return (
    <div className="section">
    <div className="comment-list">
    <h4>Answers:</h4>
      {comments.length > 0 && comments.map(comment => {
        return comment.questionId ===id &&
        <div key={comment.id} className="card">
          <p className="comment-content">{comment.content }</p>
          <div className="buttons">
          <img src={deleteIcon} onClick={() => { handleDelete(comment.id) }} />
          <img src={editIcon} onClick={() => { handleSelect(comment.id) }} />
          <div className="likes">
          <img onClick={() => {handlePlus(comment.id)}}
          src={likeIcon} /> {likes} <img onClick={() => {handleMinus(comment.id)}}
          src={dislikeIcon} />
          </div>
          </div>
        </div>
      })}
    </div>
    <form className="update-comment" onSubmit={handleUpdate}>
        <label>
          <textarea 
            value={content.content} onChange={(e)=>{setContent({...content, content: e.target.value})}}
          ></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
