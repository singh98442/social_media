import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.scss'
import {Posts} from '../../dummyData'

const Feed = () => {
  return (
    <div className='feed'>
      <Share/>
      {/* <Post/> */}
      {
        Posts.map((p=>(
          <Post hello={p}/>
        )))
      }
      
    </div>
  )
}

export default Feed
