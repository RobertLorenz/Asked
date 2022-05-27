import { useFetch } from '../hooks/useFetch'
import { useState, useEffect } from 'react'
import CommentList from './CommentList'

export default function CommentSection() {
  

    return (
      <div className="section">
      <CommentList />
    </div>
    )
}