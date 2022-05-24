import './CommentList.css'


export default function CommentList( {comments} ) {
    let id = window.location.pathname.split("/").pop()
    console.log(id)
    

    if(comments.length === 0){
        return <div className="error">No comments on this topic</div>
      }
    
      
  return (
    <div className="comment-list">
      {comments.length > 0 && comments.map(comment => (
        <div key={comment.questionId ===id} className="card">
          <p>{comment.questionId === id && comment.content}<button>delete</button></p>
          
        </div>
      ))}
    </div>
  )
}
