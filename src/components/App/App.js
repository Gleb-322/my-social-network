import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import Content from '../Content'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App
