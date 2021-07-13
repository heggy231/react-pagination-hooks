import React from 'react'
import { Heart } from 'react-spinners-css';
export const Posts = ({ posts, loading }) => {
  
  if (loading) {
  /**
   * at first posts is [] then 100 data
   * show spinner when posts data is still loading
   */
    return (
      <div>
        <Heart color="#3495fd"/>
      </div>
    )
  }

// posts = [{
// "userId": 1,
// "id": 1,
// "title": "sunt aut",
// "body": "quia eto"
// }, {}, {}]
  return (
    <ul className="list-group mb-4">
      {posts.map( (post) => (
        <li key={post.id} className="list-group-item">
          <h3>Post title:</h3> {post.title}
        </li>
      ))}
    </ul>
  )
}
