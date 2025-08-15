import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Mid/Home'
import Video from './Mid/Videos';
import Markiting from './Mid/Markiting';
import Games from './Mid/Games';
import UserList from './Mid/User-List';
import Menue from './Right-Side/Menue';
import Messenger from './Right-Side/Messenger';
import Notifications from './Right-Side/Notifications';
import Profile from './Right-Side/Profile';
import Login from './Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default: not logged in

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>

    <div>
      {isLoggedIn ? (
        <>
          
       <Router>
        <Navbar/>
        <Routes>
          <Route path='' element={<div><Home/></div>}/>
          <Route path='/user-list' element={<div><UserList/></div>}/>
          <Route path='/video' element={<div><Video/></div>}/>
          <Route path='/markiting' element={<div><Markiting/></div>}/>
          <Route path='/games' element={<div><Games/></div>}/>
          <Route path='/menue' element={<div><h1><Menue/></h1></div>}/>
          <Route path='/messenger' element={<div><h1><Messenger/></h1></div>}/>
          <Route path='/notification' element={<div><h1><Notifications/></h1></div>}/>
          <Route path='/profile' element={<div><h1><Profile/></h1></div>}/>
        </Routes>
       </Router>        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
       
      
    </>
  )
}

export default App
