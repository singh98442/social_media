import React from 'react'
import './share.scss'
import userprofile from '../../assets/person/1.jpeg'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={userprofile} alt="" />
                <input className='shareInput' placeholder="What's in your mind?" />
            </div>
            <hr className='shareHr' />
            <div className="shareBottom">
                <div className="shareicon">
                    <PermMediaIcon htmlColor='tomato'/>
                    <span>Photo or Video</span>
                </div>
                <div className="shareicon">
                    <LabelIcon htmlColor='green'/>
                    <span>Tag</span>
                </div>
                <div className="shareicon">
                    <LocationOnIcon htmlColor='blue'/>
                    <span>Location</span>
                </div>
                <div className="shareicon">
                    <EmojiEmotionsIcon htmlColor='goldenrod'/>
                    <span>Feelings</span>
                </div>
                <button className='sharebtn'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share
