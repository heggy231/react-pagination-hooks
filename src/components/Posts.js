import React from 'react';
import { Heart } from 'react-spinners-css';

export const Posts = ({ posts, loading }) => {
  if ( loading ) {
    // If the posts are loading, show a spinner
    return <Heart />;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map(post => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  )
}
