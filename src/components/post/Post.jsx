import React, { useState } from 'react'
import './post.scss'
import postimg from '../../assets/person/1.jpeg'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import postimg1 from '../../assets/post/1.jpeg'
import like1 from '../../assets/like.png'
import heart from '../../assets/heart.png'

const Post = ({hello}) => {
    const[like, setLike] = useState(hello.like)
    const [isliked, setisliked] = useState(false)

    const likeHandle=()=>{
        setLike(isliked?like-1:like+1)
        setisliked(!isliked)
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={postimg} alt="" />
                        <span className='postUser'>lues campel</span>
                        <span className='postTime'>{hello.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon className='postOption' />
                    </div>
                </div>
                <div className="postCenter">
                    <span>{hello.desc}</span>
                    <img src={postimg1} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={like1} onClick={likeHandle} alt="" />
                        <img src={heart} onClick={likeHandle} alt="" />
                        <span>{like} person liked your post</span>
                    </div>
                    <div className="postBottomRight">
                        <span>{hello.comment} Comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post
