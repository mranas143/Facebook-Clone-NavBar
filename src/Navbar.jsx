import React from 'react'
import { NavLink } from 'react-router-dom'
import img from './images/img.png'
import './Navbar.css'
import home from './images/home.png'
import user from './images/user.png'  
import video from './images/video.png'
import markiting from './images/markiting.png' 
import game from './images/game.png'

function Navbar() {
  return (
    <>
    <nav className='navbar'>
      <div className="nav-links">
      <NavLink to="/">
        <img src={img} style={{marginLeft:"16px"}} alt="Site Logo" className="logo" />
      </NavLink>

       
      <NavLink to="/search">
        <input className="search" type='text' placeholder='🔍︎ Search Facebook' />
      </NavLink>

      
        <NavLink to="" className="link">
          <img src={home} style={{marginLeft:"5px"}} alt="home-logo" className='H-logo' />
        </NavLink>
        <NavLink to="/user-list" className="link">
          <img src={user} style={{marginLeft:"3px"}} alt="friend-logo" className='H-logo' />        </NavLink>
        <NavLink to="/video" className="link">
          <img src={video} style={{marginLeft:"-6px"}} alt="video-logo" className='H-logo' />
        </NavLink>
        <NavLink to="/markiting" className="link">
          <img src={markiting} style={{marginLeft:"4px"}} alt="markiting-logo" className='H-logo' />
        </NavLink>
        <NavLink to="/games" className="link">
          <img src={game} style={{marginLeft:"3px"}} alt="game-logo" className='H-logo' />
        </NavLink>

        <div className="link2">
        <NavLink to="/menue">
          <div className="menu-icon">
             <div className="dot"></div>
             <div className="dot"></div>
             <div className="dot"></div>
             <div className="dot"></div>
             <div className="dot"></div>
             <div className="dot"></div>
             <div className="dot"></div>
             <div className="dot"></div>
             <div className="dot"></div>
          </div>
        </NavLink>
        <NavLink to="/messenger">
          <div className="messenger-icon">
            <i className="fab fa-facebook-messenger"></i>
          </div>
        </NavLink>
        <NavLink to="/notification">
          <div className="notification-icon">
            <i className="fas fa-bell"></i>
          </div>
        </NavLink>
        <NavLink to="/profile"> 
          <div className="profile-icon">
            <i className="fas fa-user"></i>
          </div>
        </NavLink>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar




// https://emojidb.org/search-symbol-emojis