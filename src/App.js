import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Posts } from './components/Posts';

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

  // console.log('posts: =>', posts);
  // Get current posts
  //  step 1: get the i of last post
  const indexOfLastPost = currentPage * postsPerPage;
  //  step 2: get the i of first post
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //  step 3: get current posts. .slice(start, stop)
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log('currentPosts: =>', currentPosts);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary font-weight-bold mb-3'>My Journal</h1>
      <Posts posts={currentPosts} loading={loading}/>
    </div>
  );
};

export default App;
