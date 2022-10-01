import React from 'react'
import './home.scss'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';


const Home = () => {
  return (
    <>
      <Topbar/>
      <div className="bodyContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
      
    </>
  )
}

export default Home
