import React, { useEffect, useState } from 'react'
import AbackBox from './AbackBox';
import "./Feed.css";
import Post from './Post';
import axios from 'axios'

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('/api/questions').then((res) => {
      console.log(res.data.reverse())
      setPosts(res.data)
    }).catch((e) => {
      console.log(e)
    })
  }, [])
  return (
    <div className="feed">
        <AbackBox />
        {
          posts.map((post,index) => (
          <Post key={index} post = {post} />))
        }
        
    </div>
  )
}

export default Feed