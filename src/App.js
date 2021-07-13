import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Posts from './components/Posts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false); // for fetching data from api
  // pagination
  const [currentPage, setCurrentPage] = useState(1); // default page is 1
  // how many posts per page?
  const [postsPerPage, setPostsPerPage] = useState(10);

  // mimic componentDidMount lifecycle method (called only once)
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // process of fetching
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const response = await axios.get(url);
      
      // console.log('response: =>', response);
      // console.log('response.data: =>', response.data);

      if (response.status === 200) {
        // upon success, set posts to response.data
        setPosts(response.data);
        setLoading(false);
      }
    };

    fetchPosts(); // call fetchPosts function
  }, []);

  console.log('posts: =>', posts);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary font-weight-bold mb-3'>My Journal</h1>
      <Posts posts={posts} loading={loading}/>
    </div>
  );
};

export default App;
