import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

  const [data, getData] = useState(null);

  useEffect(() => {
    // axios get api call https://jsonplaceholder.typicode.com/posts
    const url = 'https://jsonplaceholder.typicode.com/posts';
    axios.get(url)
      .then(res => console.log('data =>', res.data))
      .then(getData)
      .catch( err => console.error(err))
  }, []);

  return (
    <div className="container">
      <h1>My App</h1>
    </div>
  );
};

export default App;
