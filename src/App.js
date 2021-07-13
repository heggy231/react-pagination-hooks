import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Posts } from './components/Posts';
import { Pagination } from './components/Pagination';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false); // for fetching data from api
  // pagination
  const [currentPage, setCurrentPage] = useState(1); // default page is 1
  // how many posts per page?
  const [postsPerPage] = useState(10);

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

  // Change page function, pageNumber gets passed in
  //  from Pagination component
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary font-weight-bold mb-3'>My Journal</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination paginate={paginate} postsPerPage={postsPerPage} totalPosts={posts.length} />
    </div>
  );
};

export default App;
