import React from 'react'
import './topbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profile from '../../assets/person/1.jpeg'

const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbar">
            <div className="topbarLeft">
                <span>Dev_Command</span>
            </div>
            <div className="topbarMiddle">
                <div className="middle">
                    <SearchIcon className='search'/>
                    <input className='searchInput' type="text" placeholder='search for friends, post and video' />

                </div>
            </div>
            <div className="topbarRight">
                <div className="rightContainer">
                    <div className="link">
                        <span>Hompage</span>
                        <span>Timeline</span>
                    </div>
                    <div className="icon">
                        <div className="person">
                            <PersonIcon/>
                            <span>1</span>

                        </div>
                        <div className="chat">
                            <ChatIcon/>
                            <span>1</span>
                        </div>
                        <div className="notification">
                            <NotificationsIcon/>
                            <span>1</span>
                        </div>
                    </div>
                    <div className="profile">
                        <img src={profile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar
