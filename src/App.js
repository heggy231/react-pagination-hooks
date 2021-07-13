import React, { useState, useEffect } from 'react';
import { Posts } from './components/Posts';
import { Pagination } from './components/Pagination';

import axios from 'axios';
import './App.css';

const App = () => {
  // create state values
  const [posts, setPosts] = useState([]);
  // loading of api data
  const [loading, setLoading] = useState(false);
  // pagination state management, default page 1
  const [currentPage, setCurrentPage] = useState(1);
  // how many posts per page? 10/pg
  const [postsPerPage] = useState(10);

  useEffect(() => {
    // when component mounts, fire off request to get data api call and also when state updates
    // axios get api call https://jsonplaceholder.typicode.com/posts

    // should not use async/await on useEffect 
    //  therefore, create new function to assign async/await
    const fetchPosts = async () => {
      // set loading to true since data fetching
      setLoading(true);

      const url = 'https://jsonplaceholder.typicode.com/posts';
      const res = await axios.get(url);
      // pass promise response.data into setPosts to update state

      setPosts(res.data);
      setLoading(false); // toggle back to false, done api call
    }

    console.log('posts before setPosts(res.data)', posts);

    fetchPosts();// call api

    console.log('posts', posts);
  // passing dependency array empty which mimics component did mount lifeCycle Method
  }, []);

  // Get Current posts, currentPage ex: pg 1, postPerPage ex: 10 posts/pg 
  //  result in last index => 10
  console.log('outside useEffect posts', posts); // 100 array of posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // .slice(start, stop) indexOfLastPost not included .slice(0, 10)
  //  => currentPosts i from 0 to 9 shallow copy of orig array
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // console.log('posts =>', posts);  // => 100 posts

  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts 
      posts={currentPosts}
      loading={loading} />
      <Pagination 
      postsPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate} />
    </div>
  );
};

export default App;
