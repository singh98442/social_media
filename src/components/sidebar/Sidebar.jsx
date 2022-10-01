import React from 'react'
import './sidebar.scss'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import person1 from '../../../src/assets/person/2.jpeg'
import person2 from '../../../src/assets/person/3.jpeg'
import person3 from '../../../src/assets/person/4.jpeg'
import person4 from '../../../src/assets/person/5.jpeg'
import person5 from '../../../src/assets/person/6.jpeg'
import person6 from '../../../src/assets/person/6.jpeg'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="menu">
                    <li>
                        <RssFeedIcon />
                        <span>Feed</span>
                    </li>
                    <li>
                        <ChatIcon />
                        <span>Chats</span>
                    </li>
                    <li>
                        <PlayCircleIcon />
                        <span>Videos</span>
                    </li>
                    <li>
                        <GroupIcon />
                        <span>Groups</span>
                    </li>
                    <li>
                        <BookmarkIcon />
                        <span>Bookmarks</span>
                    </li>
                    <li>
                        <HelpOutlineIcon />
                        <span>Questions</span>
                    </li>
                    <li>
                        <WorkIcon />
                        <span>Jobs</span>
                    </li>
                    <li>
                        <EventIcon />
                        <span>Events</span>
                    </li>
                    <li>
                        <SchoolIcon />
                        <span>Courses</span>
                    </li>
                </ul>
                <button>show more..</button>

                <hr />

                <ul className="friendList">
                    <li className="friends">
                        <img src={person1} alt="" />
                        <span>John</span>
                    </li>
                    <li className="friends">
                        <img src={person2} alt="" />
                        <span>John</span>
                    </li>
                    <li className="friends">
                        <img src={person3} alt="" />
                        <span>Lewis</span>
                    </li>
                    <li className="friends">
                        <img src={person4} alt="" />
                        <span>Carlous</span>
                    </li>
                    <li className="friends">
                        <img src={person5} alt="" />
                        <span>Campel</span>
                    </li>
                    <li className="friends">
                        <img src={person6} alt="" />
                        <span>Jona</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
