import React from 'react'
import './rightbar.scss'
import bday_gift from '../../assets/gift.png'
import ad from '../../assets/ad.png'
import personActive from '../../assets/person/2.jpeg'
import { Users } from '../../dummyData'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="bday">
          <img className='bdayimg' src={bday_gift} alt="" />
          <span className='bdayNotification'>
            <b>Polar Foster</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img className='add' src={ad} alt="" />
        <div className="activebar">
          <h4>Online Friends</h4>
          {
            Users.map((online, index) => {
              return (
                <ul className='activeFriendList' key={index}>
                  <li>
                    <img className='activeFriends' src={personActive} alt="" />
                    <span className='activeFriend'></span>
                    <span className='activeFriendName'>{online.username}</span>
                  </li>
                </ul>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Rightbar
