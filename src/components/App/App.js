import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import Profile from '../Profile'
import './App.css'


function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App
